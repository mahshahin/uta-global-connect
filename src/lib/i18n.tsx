import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Dict = Record<string, string>;

const en: Dict = {
  "brand.name": "UTAM",
  "brand.tagline": "Universal Trading & Marketing Co.",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.network": "Global Network",
  "nav.clients": "Clients",
  "nav.contact": "Contact",
  "nav.quote": "Get a Quote",
  "cta.quote": "Request a Quote",
  "cta.contact": "Contact Us",
  "cta.learn": "Learn more",
  "cta.explore": "Explore services",
  "cta.send": "Send message",

  "hero.eyebrow": "Global Logistics · Since 2000",
  "hero.title": "Move the world.\nDelivered with precision.",
  "hero.subtitle": "Air, sea and land freight, customs clearance and supply chain solutions trusted by industry leaders across Egypt and beyond.",
  "hero.scroll": "Scroll to explore",

  "stats.years": "Years of Experience",
  "stats.countries": "Countries Served",
  "stats.partners": "Worldwide Partners",
  "stats.shipments": "Successful Shipments",

  "services.eyebrow": "What we do",
  "services.title": "End-to-end logistics solutions",
  "services.subtitle": "A complete portfolio of freight, brokerage and supply chain services — engineered around your business.",
  "svc.air.title": "Air Freight",
  "svc.air.desc": "IATA-grade air freight with time-definite, guaranteed and cost-saving options worldwide.",
  "svc.sea.title": "Sea Freight",
  "svc.sea.desc": "FCL & LCL ocean freight backed by an extensive carrier network and competitive rates.",
  "svc.lcl.title": "Consolidation (LCL)",
  "svc.lcl.desc": "Reliable consolidated cargo to and from any port — lower cost, dependable transit times.",
  "svc.land.title": "Land Transportation",
  "svc.land.desc": "Modern fleet and trusted partners for cross-border road freight and last-mile delivery.",
  "svc.customs.title": "Customs Clearance",
  "svc.customs.desc": "Licensed brokerage at every Egyptian port and airport — faster releases, fewer surprises.",
  "svc.warehouse.title": "Warehousing",
  "svc.warehouse.desc": "Bonded and general warehousing, inventory management, pick & pack and distribution.",
  "svc.project.title": "Project Cargo",
  "svc.project.desc": "Heavy lift, out-of-gauge and turnkey project logistics for industrial and energy clients.",
  "svc.door.title": "Door-to-Door",
  "svc.door.desc": "Fully managed door-to-door delivery with a single point of accountability.",

  "why.eyebrow": "Why UTAM",
  "why.title": "Trusted by businesses that can't afford delays",
  "why.subtitle": "Two decades of operational excellence, global coverage and customs expertise — engineered around your supply chain.",
  "why.1.title": "Fast & Reliable",
  "why.1.desc": "Time-definite delivery options and live tracking across all modes.",
  "why.2.title": "Global Coverage",
  "why.2.desc": "Exclusive partnerships in every major port, airport and hub worldwide.",
  "why.3.title": "Customs Expertise",
  "why.3.desc": "Licensed brokers across Egyptian ports — faster releases, fewer issues.",
  "why.4.title": "Competitive Pricing",
  "why.4.desc": "Direct carrier relationships and consolidation programs that save you money.",
  "why.5.title": "Dedicated Support",
  "why.5.desc": "A single account manager from quote to delivery — 24/7 available.",
  "why.6.title": "Tailored Solutions",
  "why.6.desc": "Custom supply chain design for automotive, FMCG, industrial and more.",

  "industries.eyebrow": "Industries we serve",
  "industries.title": "Specialized expertise across sectors",
  "ind.automotive": "Automotive",
  "ind.industrial": "Industrial",
  "ind.fmcg": "FMCG",
  "ind.retail": "Retail",
  "ind.electronics": "Electronics",
  "ind.healthcare": "Healthcare",

  "network.eyebrow": "Global network",
  "network.title": "Six branches in Egypt. Partners on every continent.",
  "network.subtitle": "From our headquarters in Nasr City to ports in Alexandria, Port Said and Sokhna — UTAM moves cargo wherever business takes you.",

  "clients.eyebrow": "Trusted partners",
  "clients.title": "Working with brands that demand reliability",

  "cta.banner.title": "Ready to move your cargo?",
  "cta.banner.subtitle": "Get a tailored quote within 24 hours from our logistics specialists.",

  "footer.about": "UTAM is a leading Egyptian logistics and freight forwarding company, delivering air, sea and land freight, customs clearance and supply chain solutions since 2000.",
  "footer.quick": "Quick Links",
  "footer.services": "Services",
  "footer.contact": "Get in touch",
  "footer.rights": "All rights reserved.",

  "about.eyebrow": "About UTAM",
  "about.title": "Two decades of moving Egypt forward",
  "about.profile.title": "Company Profile",
  "about.profile.body": "UTAM has long expertise in logistics and freight forwarding, established in 2000 by a team with deep industry experience. We started with a vision to deliver exceptional customer value with a true passion for service — a vision that has grown the business across every major market. With offices in all key locations worldwide and exclusive partnerships in every major city, port and hub, our global presence ensures a seamless experience for every customer.",
  "about.chairman.title": "Chairman's Message",
  "about.chairman.body": "At UTAM, our promise is simple: we treat every shipment as if it were our own. Two decades into this journey, our commitment to excellence, innovation and customer trust is stronger than ever. Thank you for being part of our story.",
  "about.chairman.name": "Hany ElGohary",
  "about.chairman.role": "Founder & Chairman",
  "about.mission.title": "Our Mission",
  "about.mission.body": "At UTAM, customer experience sits at the heart of every operation. We deliver timely solutions, measure satisfaction relentlessly, and bring services to our customers' workplaces faster — so they can focus on growing their businesses while we move the world for them.",
  "about.vision.title": "Our Vision",
  "about.vision.body": "To be the most trusted logistics partner connecting Egypt with the world — recognized for operational excellence, integrity and a relentless focus on the customer.",
  "about.values.title": "Core Values",
  "about.values.1": "Customer Obsession",
  "about.values.2": "Operational Excellence",
  "about.values.3": "Integrity & Trust",
  "about.values.4": "Global Mindset",
  "about.competence.title": "Core Competencies",
  "about.competence.body": "From the smallest parcel to the largest project shipment — air, sea, land or multimodal — we manage, coordinate and control the entire delivery process so cargo arrives on time, every time.",

  "contact.eyebrow": "Get in touch",
  "contact.title": "Let's talk logistics",
  "contact.subtitle": "Reach out to any of our offices across Egypt or send us a message — our team responds within one business day.",
  "contact.form.name": "Full name",
  "contact.form.email": "Email",
  "contact.form.phone": "Phone",
  "contact.form.company": "Company",
  "contact.form.subject": "Subject",
  "contact.form.message": "Message",
  "contact.offices": "Our Offices",
  "contact.success": "Thanks — we'll be in touch shortly.",

  "office.nasr": "Nasr City — Head Office",
  "office.nasr.note": "Administration",
  "office.alex": "Alexandria",
  "office.alex.note": "Sea freight · Customs clearance",
  "office.cairo": "Cairo Airport",
  "office.cairo.note": "Air freight · Customs clearance",
  "office.portsaid": "Port Said",
  "office.portsaid.note": "Sea freight · Customs clearance",
  "office.sokhna": "Sokhna Port",
  "office.sokhna.note": "Sea freight · Customs clearance",
  "office.newcairo": "New Cairo Branch",
  "office.newcairo.note": "Import & Export",

  "quote.eyebrow": "Quote request",
  "quote.title": "Request a tailored quote",
  "quote.subtitle": "Tell us about your shipment — we'll come back with options, transit times and pricing within 24 hours.",
  "quote.type": "Shipment direction",
  "quote.import": "Import",
  "quote.export": "Export",
  "quote.origin": "Origin",
  "quote.dest": "Destination",
  "quote.mode": "Shipment type",
  "quote.mode.air": "Air freight",
  "quote.mode.sea": "Sea freight",
  "quote.mode.land": "Land transport",
  "quote.mode.lcl": "Consolidation (LCL)",
  "quote.weight": "Weight (kg)",
  "quote.volume": "Volume (m³)",
  "quote.submit": "Submit request",

  "services.heading": "Logistics services",
  "services.tagline": "Eight services. One accountable partner. End-to-end visibility.",

  "network.heading": "Where we operate",
  "network.body": "Headquartered in Cairo with six operational branches across Egypt, UTAM works through an exclusive partner network covering every major port, airport and trade lane worldwide.",
  "network.egypt": "Egypt operations",
  "network.global": "Global reach",
  "network.global.body": "From the Suez Canal to the Far East, Europe, the Americas and Africa — our partner network gives you direct access to the world's busiest trade lanes.",

  "clients.heading": "Our clients",
  "clients.body": "We're proud to support importers, exporters and global brands across Egypt — including our agency for Romaqua Group (Borsec sparkling water, juices and coffee), and many others across automotive, FMCG, industrial and retail.",
  "clients.industries": "Industries we move",
};

const ar: Dict = {
  "brand.name": "يوتام",
  "brand.tagline": "الشركة العالمية للتجارة والتسويق",
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.services": "الخدمات",
  "nav.network": "الشبكة العالمية",
  "nav.clients": "العملاء",
  "nav.contact": "اتصل بنا",
  "nav.quote": "طلب عرض سعر",
  "cta.quote": "اطلب عرض سعر",
  "cta.contact": "تواصل معنا",
  "cta.learn": "اعرف المزيد",
  "cta.explore": "استكشف الخدمات",
  "cta.send": "إرسال الرسالة",

  "hero.eyebrow": "حلول لوجستية عالمية · منذ ٢٠٠٠",
  "hero.title": "نُحرّك العالم.\nبدقة لا تتوقف.",
  "hero.subtitle": "شحن جوي وبحري وبري، تخليص جمركي وحلول سلاسل إمداد متكاملة، تثق بها كبرى الشركات في مصر والعالم.",
  "hero.scroll": "اكتشف المزيد",

  "stats.years": "عاماً من الخبرة",
  "stats.countries": "دولة نخدمها",
  "stats.partners": "شريك حول العالم",
  "stats.shipments": "شحنة ناجحة",

  "services.eyebrow": "ما نقدمه",
  "services.title": "حلول لوجستية متكاملة من البداية للنهاية",
  "services.subtitle": "محفظة شاملة من خدمات الشحن والتخليص الجمركي وسلاسل الإمداد، مصممة خصيصاً لأعمالك.",
  "svc.air.title": "الشحن الجوي",
  "svc.air.desc": "خدمات شحن جوي بمعايير IATA مع خيارات سريعة ومضمونة واقتصادية حول العالم.",
  "svc.sea.title": "الشحن البحري",
  "svc.sea.desc": "شحن بحري كامل وجزئي مدعوم بشبكة ناقلين واسعة وأسعار تنافسية.",
  "svc.lcl.title": "الشحن المُجمَّع",
  "svc.lcl.desc": "شحن LCL موثوق من وإلى أي ميناء — تكلفة أقل وأوقات وصول مضمونة.",
  "svc.land.title": "النقل البري",
  "svc.land.desc": "أسطول حديث وشركاء موثوقون للنقل البري عبر الحدود والتوصيل للمرحلة الأخيرة.",
  "svc.customs.title": "التخليص الجمركي",
  "svc.customs.desc": "وكلاء تخليص مرخصون في كل ميناء ومطار مصري — تخليص أسرع ومفاجآت أقل.",
  "svc.warehouse.title": "التخزين",
  "svc.warehouse.desc": "تخزين عام وجمركي، إدارة مخزون، تجهيز وتوزيع.",
  "svc.project.title": "شحن المشاريع",
  "svc.project.desc": "نقل البضائع الثقيلة والاستثنائية ولوجستيات المشاريع الصناعية والطاقة.",
  "svc.door.title": "خدمة من الباب للباب",
  "svc.door.desc": "خدمة متكاملة من المصدر لوجهتك النهائية مع نقطة تواصل واحدة.",

  "why.eyebrow": "لماذا يوتام",
  "why.title": "موثوقون من الشركات التي لا تحتمل التأخير",
  "why.subtitle": "عقدان من التميز التشغيلي، تغطية عالمية، وخبرة جمركية مصممة لسلسلة إمدادك.",
  "why.1.title": "سرعة وموثوقية",
  "why.1.desc": "خيارات توصيل بأوقات محددة وتتبع مباشر لكل وسائط الشحن.",
  "why.2.title": "تغطية عالمية",
  "why.2.desc": "شراكات حصرية في كل ميناء ومطار رئيسي حول العالم.",
  "why.3.title": "خبرة جمركية",
  "why.3.desc": "مخلصون مرخصون في كل الموانئ المصرية — تخليص أسرع.",
  "why.4.title": "أسعار تنافسية",
  "why.4.desc": "علاقات مباشرة مع الناقلين وبرامج تجميع توفر لك التكلفة.",
  "why.5.title": "دعم مخصص",
  "why.5.desc": "مدير حساب واحد من العرض حتى التسليم — متاح ٢٤/٧.",
  "why.6.title": "حلول مخصصة",
  "why.6.desc": "تصميم سلسلة إمداد مخصصة للسيارات والصناعة والتجزئة والمزيد.",

  "industries.eyebrow": "القطاعات التي نخدمها",
  "industries.title": "خبرة متخصصة عبر مختلف القطاعات",
  "ind.automotive": "السيارات",
  "ind.industrial": "الصناعة",
  "ind.fmcg": "السلع الاستهلاكية",
  "ind.retail": "التجزئة",
  "ind.electronics": "الإلكترونيات",
  "ind.healthcare": "الرعاية الصحية",

  "network.eyebrow": "الشبكة العالمية",
  "network.title": "ستة فروع في مصر. شركاء في كل قارة.",
  "network.subtitle": "من مقرنا في مدينة نصر إلى موانئ الإسكندرية وبورسعيد والسخنة — يوتام تنقل بضائعك أينما تكون أعمالك.",

  "clients.eyebrow": "شركاء موثوقون",
  "clients.title": "نعمل مع علامات تجارية تتطلب الموثوقية",

  "cta.banner.title": "جاهز لشحن بضائعك؟",
  "cta.banner.subtitle": "احصل على عرض سعر مخصص خلال ٢٤ ساعة من خبراء اللوجستيات لدينا.",

  "footer.about": "يوتام شركة مصرية رائدة في الشحن والتخليص الجمركي وحلول سلاسل الإمداد منذ عام ٢٠٠٠.",
  "footer.quick": "روابط سريعة",
  "footer.services": "الخدمات",
  "footer.contact": "تواصل معنا",
  "footer.rights": "جميع الحقوق محفوظة.",

  "about.eyebrow": "عن يوتام",
  "about.title": "عقدان من تحريك مصر إلى الأمام",
  "about.profile.title": "نبذة عن الشركة",
  "about.profile.body": "تأسست يوتام عام ٢٠٠٠ على يد فريق ذي خبرة عميقة في مجال الشحن واللوجستيات. بدأنا برؤية لتقديم قيمة استثنائية للعميل بشغف حقيقي للخدمة — رؤية نمت بها أعمالنا في كل سوق رئيسي. مع مكاتب في كل المواقع الرئيسية حول العالم وشراكات حصرية في كل مدينة وميناء ومحور كبير، يضمن وجودنا العالمي تجربة سلسة لكل عميل.",
  "about.chairman.title": "كلمة رئيس مجلس الإدارة",
  "about.chairman.body": "في يوتام، وعدنا بسيط: نتعامل مع كل شحنة كأنها شحنتنا. بعد عقدين من الرحلة، التزامنا بالتميز والابتكار وثقة العميل أقوى من أي وقت مضى. شكراً لأنك جزء من قصتنا.",
  "about.chairman.name": "هاني الجوهري",
  "about.chairman.role": "المؤسس ورئيس مجلس الإدارة",
  "about.mission.title": "رسالتنا",
  "about.mission.body": "في يوتام، تجربة العميل في قلب كل عملية. نقدم حلولاً في وقتها، نقيس الرضا باستمرار، ونوصل الخدمات إلى مكاتب عملائنا بسرعة — ليتفرغوا لتنمية أعمالهم بينما نحرك العالم لهم.",
  "about.vision.title": "رؤيتنا",
  "about.vision.body": "أن نكون الشريك اللوجستي الأكثر موثوقية الذي يربط مصر بالعالم — معروفون بالتميز التشغيلي والنزاهة والتركيز المطلق على العميل.",
  "about.values.title": "قيمنا الأساسية",
  "about.values.1": "هوس العميل",
  "about.values.2": "التميز التشغيلي",
  "about.values.3": "النزاهة والثقة",
  "about.values.4": "العقلية العالمية",
  "about.competence.title": "كفاءاتنا الجوهرية",
  "about.competence.body": "من أصغر طرد إلى أكبر شحنة مشاريع — جواً أو بحراً أو براً أو متعدد الوسائط — ندير ونتحكم في عملية التسليم بأكملها لتصل البضائع في وقتها، في كل مرة.",

  "contact.eyebrow": "تواصل معنا",
  "contact.title": "لنتحدث عن اللوجستيات",
  "contact.subtitle": "تواصل مع أي من مكاتبنا في مصر أو أرسل لنا رسالة — فريقنا يرد خلال يوم عمل واحد.",
  "contact.form.name": "الاسم الكامل",
  "contact.form.email": "البريد الإلكتروني",
  "contact.form.phone": "الهاتف",
  "contact.form.company": "الشركة",
  "contact.form.subject": "الموضوع",
  "contact.form.message": "الرسالة",
  "contact.offices": "مكاتبنا",
  "contact.success": "شكراً — سنعاود التواصل قريباً.",

  "office.nasr": "مدينة نصر — المكتب الرئيسي",
  "office.nasr.note": "الإدارة",
  "office.alex": "الإسكندرية",
  "office.alex.note": "شحن بحري · تخليص جمركي",
  "office.cairo": "مطار القاهرة",
  "office.cairo.note": "شحن جوي · تخليص جمركي",
  "office.portsaid": "بورسعيد",
  "office.portsaid.note": "شحن بحري · تخليص جمركي",
  "office.sokhna": "ميناء السخنة",
  "office.sokhna.note": "شحن بحري · تخليص جمركي",
  "office.newcairo": "فرع القاهرة الجديدة",
  "office.newcairo.note": "استيراد وتصدير",

  "quote.eyebrow": "طلب عرض سعر",
  "quote.title": "اطلب عرض سعر مخصص",
  "quote.subtitle": "أخبرنا عن شحنتك — سنعود إليك بالخيارات وأوقات النقل والأسعار خلال ٢٤ ساعة.",
  "quote.type": "اتجاه الشحنة",
  "quote.import": "استيراد",
  "quote.export": "تصدير",
  "quote.origin": "المصدر",
  "quote.dest": "الوجهة",
  "quote.mode": "نوع الشحن",
  "quote.mode.air": "شحن جوي",
  "quote.mode.sea": "شحن بحري",
  "quote.mode.land": "نقل بري",
  "quote.mode.lcl": "شحن مجمع",
  "quote.weight": "الوزن (كجم)",
  "quote.volume": "الحجم (م³)",
  "quote.submit": "إرسال الطلب",

  "services.heading": "خدماتنا اللوجستية",
  "services.tagline": "ثماني خدمات. شريك واحد مسؤول. رؤية كاملة من البداية للنهاية.",

  "network.heading": "أين نعمل",
  "network.body": "مقرنا في القاهرة مع ستة فروع تشغيلية في كل مصر، نعمل عبر شبكة شركاء حصرية تغطي كل ميناء ومطار وممر تجاري كبير حول العالم.",
  "network.egypt": "العمليات في مصر",
  "network.global": "الانتشار العالمي",
  "network.global.body": "من قناة السويس إلى الشرق الأقصى وأوروبا والأمريكتين وأفريقيا — تمنحك شبكة شركائنا وصولاً مباشراً لأكثر الممرات التجارية ازدحاماً في العالم.",

  "clients.heading": "عملاؤنا",
  "clients.body": "نفتخر بدعم المستوردين والمصدرين والعلامات العالمية في مصر — بما في ذلك وكالتنا لمجموعة Romaqua (مياه برسك الغازية والعصائر والقهوة) والعديد غيرها في السيارات والسلع الاستهلاكية والصناعة والتجزئة.",
  "clients.industries": "القطاعات التي ننقلها",
};

const dicts: Record<Lang, Dict> = { ar, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string; dir: "rtl" | "ltr" };
const I18nCtx = createContext<Ctx | null>(null);

const STORAGE_KEY = "utam-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Lang | null;
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, l);
  };

  const dir = lang === "ar" ? "rtl" : "ltr";
  const t = (k: string) => dicts[lang][k] ?? dicts.en[k] ?? k;

  return <I18nCtx.Provider value={{ lang, setLang, t, dir }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
