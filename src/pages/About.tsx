import { Layout, PageHero, SEO } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { Award, Target, Eye, Heart, Quote } from "lucide-react";

export default function About() {
  const { t } = useI18n();
  return (
    <Layout>
      <SEO title="About UTAM — Our Story Since 2000" description="Founded in 2000, UTAM is an Egyptian logistics leader delivering global freight forwarding, customs and supply chain expertise." path="/about" />
      <PageHero eyebrow={t("about.eyebrow")} title={t("about.title")} />

      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="size-4" /> Since 2000
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">{t("about.profile.title")}</h2>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>{t("about.profile.body")}</p>
            <p>{t("about.competence.body")}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="container-x">
          <div className="relative bg-card rounded-3xl p-8 md:p-14 shadow-card border border-border overflow-hidden">
            <Quote className="absolute top-8 end-8 size-24 text-primary/10" />
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              {t("about.chairman.title")}
            </div>
            <p className="text-xl md:text-3xl font-display font-medium leading-relaxed text-foreground max-w-4xl">
              "{t("about.chairman.body")}"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="size-14 rounded-full bg-primary-gradient grid place-items-center text-primary-foreground font-display font-bold text-xl">
                HG
              </div>
              <div>
                <div className="font-bold">{t("about.chairman.name")}</div>
                <div className="text-sm text-muted-foreground">{t("about.chairman.role")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {[
            { Icon: Target, k: "about.mission" },
            { Icon: Eye, k: "about.vision" },
          ].map(({ Icon, k }) => (
            <div key={k} className="bg-card border border-border rounded-2xl p-8 md:p-10 hover:shadow-card transition">
              <div className="size-12 rounded-xl bg-primary-gradient grid place-items-center text-primary-foreground shadow-glow">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-6 text-2xl md:text-3xl font-bold">{t(`${k}.title`)}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t(`${k}.body`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink text-white">
        <div className="container-x">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Heart className="size-4" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">{t("about.values.title")}</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["about.values.1", "about.values.2", "about.values.3", "about.values.4"].map((k, i) => (
              <div key={k} className="glass rounded-2xl p-6">
                <div className="text-accent font-display font-bold text-3xl">0{i + 1}</div>
                <div className="mt-3 text-lg font-semibold">{t(k)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
