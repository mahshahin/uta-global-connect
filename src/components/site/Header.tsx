import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/utam-logo-transparent.png.asset.json";



export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/network", label: t("nav.network") },
    { to: "/clients", label: t("nav.clients") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-card" : "bg-transparent",
      )}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className={cn(
            "rounded-lg transition-all overflow-hidden grid place-items-center",
            scrolled ? "bg-white p-1 shadow-card" : "bg-white/95 p-1 shadow-glow",
          )}>
            <img src={logoAsset.url} alt="UTAM — For Shipping and Clearance" className="h-9 md:h-11 w-auto object-contain" />
          </div>
        </Link>


        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "px-3.5 py-2 rounded-md text-sm font-medium transition-colors",
                  scrolled
                    ? active ? "text-primary" : "text-foreground/75 hover:text-foreground"
                    : active ? "text-white" : "text-white/80 hover:text-white",
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className={cn(
              "hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold transition-colors",
              scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10",
            )}
            aria-label="Switch language"
          >
            <Globe className="size-4" />
            {lang === "ar" ? "EN" : "ع"}
          </button>

          <Link
            to="/quote"
            className="hidden md:inline-flex items-center gap-1.5 bg-primary-gradient text-primary-foreground px-4 py-2.5 rounded-md text-sm font-semibold shadow-glow hover:opacity-95 transition"
          >
            {t("nav.quote")}
            <ArrowRight className="size-4 flip-x" />
          </Link>

          <button
            className={cn("lg:hidden p-2 rounded-md", scrolled ? "text-foreground" : "text-white")}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-elevated">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="mt-2 inline-flex items-center gap-2 px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted text-start"
            >
              <Globe className="size-4" />
              {lang === "ar" ? "English" : "العربية"}
            </button>
            <Link to="/quote" className="mt-2 bg-primary-gradient text-primary-foreground px-4 py-3 rounded-md text-base font-semibold text-center">
              {t("nav.quote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
