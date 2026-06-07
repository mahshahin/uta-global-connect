import { useState } from "react";
import { Layout, PageHero, SEO } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { Send, CheckCircle2 } from "lucide-react";

export default function Quote() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <SEO title="Request a Quote — UTAM" description="Get a tailored freight forwarding quote from UTAM within 24 hours. Air, sea, land or LCL — import or export." path="/quote" />
      <PageHero eyebrow={t("quote.eyebrow")} title={t("quote.title")} subtitle={t("quote.subtitle")} />

      <section className="py-20 md:py-28">
        <div className="container-x max-w-4xl">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-card">
            {sent ? (
              <div className="text-center py-14">
                <div className="size-16 rounded-full bg-primary-gradient grid place-items-center mx-auto text-primary-foreground">
                  <CheckCircle2 className="size-8" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">{t("contact.success")}</h2>
                <p className="mt-2 text-muted-foreground">We'll reply within one business day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Label>{t("quote.type")}</Label>
                  <div className="grid grid-cols-2 gap-3 mt-1.5">
                    {[["import", t("quote.import")], ["export", t("quote.export")]].map(([v, l]) => (
                      <label key={v} className="flex items-center justify-center gap-2 border border-input rounded-lg py-3 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:text-primary font-semibold transition">
                        <input type="radio" name="direction" value={v} required className="sr-only" />
                        {l}
                      </label>
                    ))}
                  </div>
                </div>

                <Input label={t("contact.form.name")} name="name" required />
                <Input label={t("contact.form.email")} name="email" type="email" required />
                <Input label={t("contact.form.phone")} name="phone" type="tel" />
                <Input label={t("contact.form.company")} name="company" />
                <Input label={t("quote.origin")} name="origin" required />
                <Input label={t("quote.dest")} name="dest" required />

                <div>
                  <Label>{t("quote.mode")}</Label>
                  <select name="mode" required className="mt-1.5 w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none text-sm">
                    <option value="">—</option>
                    <option>{t("quote.mode.air")}</option>
                    <option>{t("quote.mode.sea")}</option>
                    <option>{t("quote.mode.land")}</option>
                    <option>{t("quote.mode.lcl")}</option>
                  </select>
                </div>

                <Input label={t("quote.weight")} name="weight" type="number" />
                <Input label={t("quote.volume")} name="volume" type="number" />

                <div className="md:col-span-2">
                  <Label>{t("contact.form.message")}</Label>
                  <textarea name="message" rows={4} className="mt-1.5 w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none text-sm" />
                </div>

                <button type="submit" className="md:col-span-2 mt-2 inline-flex items-center justify-center gap-2 bg-primary-gradient text-primary-foreground py-4 rounded-lg font-semibold shadow-glow hover:opacity-95 transition">
                  <Send className="size-4" /> {t("quote.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="block text-sm font-semibold text-foreground">{children}</span>;
}

function Input({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <Label>{label}{required && <span className="text-destructive"> *</span>}</Label>
      <input name={name} type={type} required={required} className="mt-1.5 w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none text-sm" />
    </label>
  );
}
