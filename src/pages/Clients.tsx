import { Layout, PageHero, SEO } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";

const featured = ["Romaqua Group", "Borsec", "Industrial Co.", "Auto Egypt", "FMCG Brands", "Retail Holding", "Med Health", "Power Group"];
const industries = ["Automotive", "Industrial", "FMCG", "Retail", "Electronics", "Healthcare", "Construction", "Energy"];

export default function Clients() {
  const { t } = useI18n();
  return (
    <Layout>
      <SEO title="Our Clients — UTAM" description="UTAM partners with importers, exporters and global brands across automotive, FMCG, industrial and retail sectors in Egypt." path="/clients" />
      <PageHero eyebrow={t("clients.eyebrow")} title={t("clients.heading")} subtitle={t("clients.body")} />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {featured.map((name) => (
              <div key={name} className="aspect-[3/2] rounded-2xl bg-card border border-border grid place-items-center p-6 hover:border-primary/40 hover:shadow-card transition group">
                <span className="font-display font-bold text-lg text-muted-foreground group-hover:text-foreground transition text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{t("clients.industries")}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {industries.map((i, idx) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
                <div className="text-xs font-bold opacity-60">0{idx + 1}</div>
                <div className="mt-2 font-bold text-lg">{i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
