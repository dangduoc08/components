import {
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  FileSearch,
  Globe,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const FEATURE_ICONS = [
  BrainCircuit,
  FileSearch,
  Users,
  BarChart3,
  ShieldCheck,
  Zap,
];
const STEPS = ["01", "02", "03"];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("landing");

  const navLinks = [
    { label: t("navFeatures"), href: "#features" },
    { label: t("navHowItWorks"), href: "#how-it-works" },
    { label: t("navPricing"), href: "#pricing" },
  ];

  const features = FEATURE_ICONS.map((icon, index) => ({
    icon,
    title: t(`feature${index + 1}Title`),
    description: t(`feature${index + 1}Description`),
  }));

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  const steps = STEPS.map((step, index) => ({
    step,
    title: t(`step${index + 1}Title`),
    description: t(`step${index + 1}Description`),
  }));

  const plans = [
    {
      name: t("starterName"),
      price: t("starterPrice"),
      description: t("starterDescription"),
      features: [
        t("starterFeature1"),
        t("starterFeature2"),
        t("starterFeature3"),
        t("starterFeature4"),
      ],
      isPopular: false,
      cta: t("starterCta"),
    },
    {
      name: t("growthName"),
      price: t("growthPrice"),
      description: t("growthDescription"),
      features: [
        t("growthFeature1"),
        t("growthFeature2"),
        t("growthFeature3"),
        t("growthFeature4"),
        t("growthFeature5"),
      ],
      isPopular: true,
      cta: t("growthCta"),
    },
    {
      name: t("enterpriseName"),
      price: t("enterprisePrice"),
      description: t("enterpriseDescription"),
      features: [
        t("enterpriseFeature1"),
        t("enterpriseFeature2"),
        t("enterpriseFeature3"),
        t("enterpriseFeature4"),
        t("enterpriseFeature5"),
      ],
      isPopular: false,
      cta: t("enterpriseCta"),
    },
  ];

  const testimonials = [
    {
      quote: t("testimonial1Quote"),
      name: t("testimonial1Name"),
      title: t("testimonial1Title"),
    },
    {
      quote: t("testimonial2Quote"),
      name: t("testimonial2Name"),
      title: t("testimonial2Title"),
    },
    {
      quote: t("testimonial3Quote"),
      name: t("testimonial3Name"),
      title: t("testimonial3Title"),
    },
  ];

  const footerLinks = [t("privacy"), t("terms"), t("security"), t("status")];

  const mockupLabels = [
    t("pipelineOverview"),
    t("aiMatchScore"),
    t("timeToHire"),
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="size-4 text-primary-foreground" />
            </div>
            <span className="font-semibold tracking-tight">Owlky</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3 text-primary" />
            {t("heroBadge")}
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            {t.rich("heroTitle", {
              highlight: (chunks) => (
                <span className="text-primary">{chunks}</span>
              ),
            })}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            {t("heroDescription")}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("startFreeTrial")}
            </Link>
            <a
              href="#how-it-works"
              className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
            >
              {t("seeHowItWorks")}
            </a>
          </div>
          <div className="mt-16 overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-border/40 px-4 py-3">
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
            </div>
            <div className="grid gap-3 p-6 md:grid-cols-3">
              {mockupLabels.map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-border/40 bg-background p-4"
                >
                  <div className="mb-3 h-2 w-24 rounded-full bg-muted" />
                  <div className="h-16 rounded-lg bg-muted/50" />
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-2 w-12 rounded-full bg-primary/30" />
                    <div className="h-2 w-8 rounded-full bg-muted" />
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-y border-border/40 bg-muted/20">
          <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border/40 px-6 py-12">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-6 text-center">
                <div className="text-3xl font-semibold text-primary">
                  {value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="features" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              {t("featuresTitle")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t("featuresDescription")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/40 bg-card p-6 transition-colors hover:border-border"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-2 font-medium">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="how-it-works"
          className="border-y border-border/40 bg-muted/20"
        >
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold tracking-tight">
                {t("howItWorksTitle")}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {t("howItWorksDescription")}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map(({ step, title, description }) => (
                <div key={step} className="relative">
                  <div className="mb-4 text-4xl font-bold text-border">
                    {step}
                  </div>
                  <h3 className="mb-2 font-medium">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              {t("pricingTitle")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t("pricingDescription")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {plans.map(
              ({ name, price, description, features, isPopular, cta }) => (
                <div
                  key={name}
                  className={`relative rounded-2xl border p-6 ${
                    isPopular
                      ? "border-primary bg-primary/5"
                      : "border-border/40 bg-card"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                      {t("mostPopular")}
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="font-medium">{name}</h3>
                    <div className="mt-2 flex items-end gap-1">
                      <span className="text-3xl font-semibold">{price}</span>
                      {price !== "Custom" && (
                        <span className="mb-1 text-sm text-muted-foreground">
                          {t("perMonth")}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>

                  <ul className="mb-6 space-y-2.5">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/dashboard"
                    className={`block rounded-full py-2 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                      isPopular
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-background text-foreground"
                    }`}
                  >
                    {cta}
                  </Link>
                </div>
              ),
            )}
          </div>
        </section>
        <section className="border-t border-border/40 bg-muted/20">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold tracking-tight">
                {t("testimonialsTitle")}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map(({ quote, name, title }) => (
                <div
                  key={name}
                  className="rounded-2xl border border-border/40 bg-card p-6"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{name}</div>
                      <div className="text-xs text-muted-foreground">
                        {title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-2xl bg-primary/5 border border-primary/20 px-8 py-14 text-center">
            <Globe className="mx-auto mb-4 size-8 text-primary/60" />
            <h2 className="text-3xl font-semibold tracking-tight">
              {t("ctaTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              {t("ctaDescription")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t("startYourFreeTrial")}
              </Link>
              <Link
                href="/dashboard"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("bookDemo")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex size-5 items-center justify-center rounded bg-primary">
              <Sparkles className="size-3 text-primary-foreground" />
            </div>
            <span className="font-medium text-foreground">Owlky</span>
            <span>&copy; 2026</span>
          </div>
          <div className="flex gap-6">
            {footerLinks.map((item) => (
              <Link
                key={item}
                href="/dashboard"
                className="transition-colors hover:text-foreground"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
