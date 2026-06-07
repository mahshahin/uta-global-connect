import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logoAsset from "@/assets/utam-logo-transparent.png.asset.json";


export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80 pt-20 pb-8">
      <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex items-center bg-white rounded-lg p-2 mb-4 shadow-card">
            <img src={logoAsset.url} alt="UTAM — For Shipping and Clearance" className="h-14 w-auto object-contain" />
          </div>
          <p className="text-sm leading-relaxed text-white/65">{t("footer.about")}</p>
        </div>


        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.quick")}</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["/about", t("nav.about")],
              ["/services", t("nav.services")],
              ["/network", t("nav.network")],
              ["/clients", t("nav.clients")],
              ["/contact", t("nav.contact")],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to as string} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.services")}</h4>
          <ul className="space-y-2.5 text-sm">
            <li>{t("svc.air.title")}</li>
            <li>{t("svc.sea.title")}</li>
            <li>{t("svc.land.title")}</li>
            <li>{t("svc.customs.title")}</li>
            <li>{t("svc.warehouse.title")}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 text-accent shrink-0" />
              <span>8 El Fath Buildings, End of Abbas El Akkad St., Nasr City, Cairo</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-accent shrink-0" />
              <a href="tel:+20224178630" dir="ltr">+20 2 2417 8630</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 text-accent shrink-0" />
              <a href="mailto:info@utamegypt.com">info@utamegypt.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
        <div>© {year} UTAM — {t("footer.rights")}</div>
        <div>Universal Trading & Marketing Co.</div>
      </div>
    </footer>
  );
}
