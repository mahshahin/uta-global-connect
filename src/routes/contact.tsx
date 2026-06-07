import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact UTAM — Get in Touch" },
      { name: "description", content: "Reach UTAM offices across Egypt — Nasr City, Alexandria, Cairo Airport, Port Said, Sokhna and New Cairo. We respond within one business day." },
      { property: "og:title", content: "Contact — UTAM" },
      { property: "og:description", content: "Let's talk logistics." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const offices = [
  { k: "office.nasr", phone: "+20 2 2417 8630" },
  { k: "office.alex", phone: "+20 127 010 6111" },
  { k: "office.cairo", phone: "+20 2 2417 8631" },
  { k: "office.portsaid", phone: "+20 122 170 9813" },
  { k: "office.sokhna", phone: "+20 120 590 5942" },
  { k: "office.newcairo", phone: "+20 2 2417 8631" },
];

function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <PageHero eyebrow={t("contact.eyebrow")} title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-card">
              {sent ? (
                <div className="text-center py-12">
                  <div className="size-16 rounded-full bg-primary-gradient grid place-items-center mx-auto text-primary-foreground"><Send className="size-7" /></div>
                  <p className="mt-6 text-xl font-semibold">{t("contact.success")}</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("contact.form.name")} name="name" required />
                  <Field label={t("contact.form.email")} name="email" type="email" required />
                  <Field label={t("contact.form.phone")} name="phone" type="tel" />
                  <Field label={t("contact.form.company")} name="company" />
                  <div className="sm:col-span-2"><Field label={t("contact.form.subject")} name="subject" /></div>
                  <div className="sm:col-span-2"><Field label={t("contact.form.message")} name="message" textarea required /></div>
                  <button type="submit" className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 bg-primary-gradient text-primary-foreground py-3.5 rounded-lg font-semibold shadow-glow hover:opacity-95 transition">
                    <Send className="size-4" /> {t("cta.send")}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-ink text-white rounded-3xl p-8">
              <h3 className="font-bold text-lg mb-5">Head Office</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3"><MapPin className="size-5 text-accent shrink-0 mt-0.5" /><span>8 El Fath Buildings, End of Abbas El Akkad St., Nasr City, Cairo, Egypt</span></div>
                <div className="flex items-center gap-3"><Phone className="size-5 text-accent shrink-0" /><a dir="ltr" href="tel:+20224178630">+20 2 2417 8630</a></div>
                <div className="flex items-center gap-3"><Mail className="size-5 text-accent shrink-0" /><a href="mailto:info@utamegypt.com">info@utamegypt.com</a></div>
              </div>
              <a href="https://wa.me/201226772303" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-semibold w-full justify-center">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>

            <div className="bg-card border border-border rounded-3xl p-7">
              <h3 className="font-bold mb-4">{t("contact.offices")}</h3>
              <ul className="divide-y divide-border">
                {offices.map((o) => (
                  <li key={o.k} className="py-3 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold text-sm">{t(o.k)}</div>
                      <div className="text-xs text-muted-foreground">{t(`${o.k}.note`)}</div>
                    </div>
                    <a dir="ltr" href={`tel:${o.phone.replace(/\s/g, "")}`} className="font-mono text-xs font-semibold text-primary whitespace-nowrap">{o.phone}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-3xl overflow-hidden border border-border shadow-card aspect-[16/8]">
            <iframe
              title="UTAM Head Office Map"
              src="https://www.google.com/maps?q=Nasr+City+Abbas+El+Akkad+Cairo&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, textarea }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls = "w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition text-sm";
  return (
    <label className="block">
      <span className="block mb-1.5 text-sm font-semibold text-foreground">{label}{required && <span className="text-destructive"> *</span>}</span>
      {textarea ? <textarea name={name} required={required} rows={5} className={cls} /> : <input name={name} type={type} required={required} className={cls} />}
    </label>
  );
}
