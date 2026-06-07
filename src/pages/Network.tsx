import { Layout, PageHero, SEO } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { MapPin, Globe2 } from "lucide-react";

const branches = [
  { k: "office.nasr", phone: "+20 2 2417 8630" },
  { k: "office.alex", phone: "+20 127 010 6111" },
  { k: "office.cairo", phone: "+20 2 2417 8631" },
  { k: "office.portsaid", phone: "+20 122 170 9813" },
  { k: "office.sokhna", phone: "+20 120 590 5942" },
  { k: "office.newcairo", phone: "+20 2 2417 8631" },
];

const regions = [
  { name: "Europe", cities: "Hamburg · Rotterdam · Antwerp · Genoa · Marseille" },
  { name: "Asia", cities: "Shanghai · Ningbo · Singapore · Dubai · Mumbai" },
  { name: "Americas", cities: "New York · Los Angeles · Houston · São Paulo" },
  { name: "Africa", cities: "Cairo · Casablanca · Lagos · Mombasa · Durban" },
  { name: "Middle East", cities: "Jeddah · Dammam · Doha · Kuwait · Beirut" },
  { name: "Oceania", cities: "Sydney · Melbourne · Auckland" },
];

export default function Network() {
  const { t } = useI18n();
  return (
    <Layout>
      <SEO title="Global Network — UTAM" description="Six branches across Egypt and an exclusive partner network covering every major port, airport and trade lane worldwide." path="/network" />
      <PageHero eyebrow={t("network.eyebrow")} title={t("network.title")} subtitle={t("network.subtitle")} />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-center gap-3 mb-10">
            <div className="size-10 rounded-lg bg-primary-gradient grid place-items-center text-primary-foreground"><MapPin className="size-5" /></div>
            <h2 className="text-3xl md:text-4xl font-bold">{t("network.egypt")}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((b) => (
              <div key={b.k} className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/50 hover:shadow-card transition">
                <div className="flex items-start justify-between">
                  <MapPin className="size-5 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Egypt</span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{t(b.k)}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t(`${b.k}.note`)}</p>
                <a href={`tel:${b.phone.replace(/\s/g, "")}`} dir="ltr" className="mt-4 block font-mono text-sm font-semibold text-primary hover:underline">
                  {b.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_30%,oklch(0.55_0.22_260/0.6),transparent_55%),radial-gradient(circle_at_80%_70%,oklch(0.74_0.13_213/0.4),transparent_55%)]" />
        <div className="container-x relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-lg bg-accent grid place-items-center text-accent-foreground"><Globe2 className="size-5" /></div>
            <h2 className="text-3xl md:text-4xl font-bold">{t("network.global")}</h2>
          </div>
          <p className="text-lg text-white/75 max-w-3xl">{t("network.global.body")}</p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <div key={r.name} className="glass rounded-2xl p-6">
                <div className="text-accent text-xs font-bold uppercase tracking-wider">{r.name}</div>
                <div className="mt-2 text-white/85 leading-relaxed">{r.cities}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
