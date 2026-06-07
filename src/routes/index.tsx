import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plane, Ship, Truck, FileCheck2, Warehouse, Package, Boxes, Home as HomeIcon, Zap, Globe2, ShieldCheck, BadgeDollarSign, Headphones, Settings2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-port.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UTAM — Global Logistics & Freight Forwarding in Egypt" },
      { name: "description", content: "Air, sea and land freight, customs clearance and supply chain solutions trusted by industry leaders across Egypt and worldwide since 2000." },
      { property: "og:title", content: "UTAM — Global Logistics & Freight Forwarding" },
      { property: "og:description", content: "End-to-end freight, customs and supply chain solutions across Egypt and beyond." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center pt-24 overflow-hidden">
        <img src={heroImg} alt="Container ship at port" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/90" />
        <div className="absolute inset-0 [background-image:radial-gradient(ellipse_at_30%_30%,oklch(0.55_0.22_260/0.45),transparent_55%)]" />

        <div className="container-x relative text-white py-20 md:py-28">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-up">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            {t("hero.eyebrow")}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] max-w-4xl whitespace-pre-line animate-fade-up">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed animate-fade-up">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up">
            <Link to="/quote" className="group inline-flex items-center gap-2 bg-primary-gradient px-6 py-3.5 rounded-lg font-semibold shadow-glow hover:opacity-95 transition">
              {t("cta.quote")}
              <ArrowRight className="size-4 flip-x group-hover:translate-x-0.5 transition" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 glass px-6 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition">
              {t("cta.explore")}
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-16 z-10">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-elevated bg-card">
            {[
              { v: "25+", k: "stats.years" },
              { v: "60+", k: "stats.countries" },
              { v: "200+", k: "stats.partners" },
              { v: "50K+", k: "stats.shipments" },
            ].map((s) => (
              <div key={s.k} className="bg-card p-6 md:p-8 text-center">
                <div className="text-3xl md:text-5xl font-display font-bold text-gradient-primary">{s.v}</div>
                <div className="mt-2 text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">{t(s.k)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} subtitle={t("services.subtitle")} />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Plane, k: "svc.air" },
              { Icon: Ship, k: "svc.sea" },
              { Icon: Boxes, k: "svc.lcl" },
              { Icon: Truck, k: "svc.land" },
              { Icon: FileCheck2, k: "svc.customs" },
              { Icon: Warehouse, k: "svc.warehouse" },
              { Icon: Package, k: "svc.project" },
              { Icon: HomeIcon, k: "svc.door" },
            ].map(({ Icon, k }) => (
              <Link key={k} to="/services" className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-elevated transition-all duration-300">
                <div className="size-12 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary-gradient group-hover:text-primary-foreground transition-all">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{t(`${k}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(`${k}.desc`)}</p>
                <ArrowRight className="absolute top-6 end-6 size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 flip-x transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container-x">
          <SectionHeader eyebrow={t("why.eyebrow")} title={t("why.title")} subtitle={t("why.subtitle")} />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Zap, k: "why.1" },
              { Icon: Globe2, k: "why.2" },
              { Icon: ShieldCheck, k: "why.3" },
              { Icon: BadgeDollarSign, k: "why.4" },
              { Icon: Headphones, k: "why.5" },
              { Icon: Settings2, k: "why.6" },
            ].map(({ Icon, k }) => (
              <div key={k} className="bg-card border border-border rounded-2xl p-7 hover:shadow-card transition-shadow">
                <div className="size-11 rounded-lg bg-gradient-to-br from-primary to-cyan grid place-items-center text-primary-foreground shadow-glow">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{t(`${k}.title`)}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{t(`${k}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeader eyebrow={t("industries.eyebrow")} title={t("industries.title")} />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {["ind.automotive", "ind.industrial", "ind.fmcg", "ind.retail", "ind.electronics", "ind.healthcare"].map((k) => (
              <div key={k} className="aspect-square rounded-2xl border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 grid place-items-center p-4 text-center font-semibold cursor-default">
                {t(k)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient text-white p-10 md:p-16 shadow-elevated">
            <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_85%_30%,oklch(0.78_0.16_70/0.5),transparent_50%),radial-gradient(circle_at_15%_80%,oklch(0.55_0.22_260/0.6),transparent_55%)]" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">{t("cta.banner.title")}</h2>
                <p className="mt-3 text-lg text-white/80">{t("cta.banner.subtitle")}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/quote" className="bg-white text-ink px-6 py-3.5 rounded-lg font-semibold hover:bg-white/90 transition inline-flex items-center gap-2">
                  {t("cta.quote")} <ArrowRight className="size-4 flip-x" />
                </Link>
                <Link to="/contact" className="glass px-6 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition">
                  {t("cta.contact")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, align = "center" }: { eyebrow?: string; title: string; subtitle?: string; align?: "center" | "start" }) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
