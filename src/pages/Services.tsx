import { Link } from "react-router-dom";
import { Layout, PageHero, SEO } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { Plane, Ship, Boxes, Truck, FileCheck2, Warehouse, Package, Home as HomeIcon, ArrowRight } from "lucide-react";
import airImg from "@/assets/air-freight.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import landImg from "@/assets/land-transport.jpg";

const services = [
  { Icon: Plane, k: "svc.air", img: airImg },
  { Icon: Ship, k: "svc.sea", img: null },
  { Icon: Boxes, k: "svc.lcl", img: null },
  { Icon: Truck, k: "svc.land", img: landImg },
  { Icon: FileCheck2, k: "svc.customs", img: null },
  { Icon: Warehouse, k: "svc.warehouse", img: warehouseImg },
  { Icon: Package, k: "svc.project", img: null },
  { Icon: HomeIcon, k: "svc.door", img: null },
];

export default function Services() {
  const { t } = useI18n();
  return (
    <Layout>
      <SEO title="Logistics Services — UTAM" description="Air, sea, land, LCL consolidation, customs brokerage, warehousing, project cargo and door-to-door logistics services." path="/services" />
      <PageHero eyebrow={t("services.eyebrow")} title={t("services.heading")} subtitle={t("services.tagline")} />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {services.map(({ Icon, k, img }, i) => (
            <article key={k} className="group relative overflow-hidden bg-card border border-border rounded-3xl hover:shadow-elevated transition-all duration-500">
              {img ? (
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={img} alt={t(`${k}.title`)} loading="lazy" width={1280} height={720} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              ) : (
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-cyan/10 to-accent/10 grid place-items-center">
                  <Icon className="size-20 text-primary/40 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.25} />
                </div>
              )}
              <div className="p-7 md:p-9">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary-gradient grid place-items-center text-primary-foreground shadow-glow">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">0{i + 1}</span>
                </div>
                <h2 className="mt-5 text-2xl font-bold">{t(`${k}.title`)}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{t(`${k}.desc`)}</p>
                <Link to="/quote" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-primary hover:gap-2.5 transition-all">
                  {t("cta.quote")} <ArrowRight className="size-4 flip-x" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
