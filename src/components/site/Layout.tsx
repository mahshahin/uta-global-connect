import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-hero-gradient text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,oklch(0.55_0.22_260/0.5),transparent_50%),radial-gradient(circle_at_80%_60%,oklch(0.74_0.13_213/0.35),transparent_55%)]" />
      <div className="container-x relative">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-white/85 mb-5 animate-fade-up">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl animate-fade-up">{title}</h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed animate-fade-up">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export function SEO({ title, description, path }: { title: string; description: string; path: string }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={path} />
      <link rel="canonical" href={path} />
    </Helmet>
  );
}
