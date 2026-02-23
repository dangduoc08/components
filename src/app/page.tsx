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
import Link from "next/link";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

const FEATURES = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Screening",
    description:
      "Automatically rank and filter candidates based on job fit, culture alignment, and skill signals — before a human ever reviews a resume.",
  },
  {
    icon: FileSearch,
    title: "Smart Job Matching",
    description:
      "Surface the right talent from your pipeline with semantic search that understands context, not just keywords.",
  },
  {
    icon: Users,
    title: "Collaborative Hiring",
    description:
      "Keep your whole team aligned with structured interview scorecards, async feedback, and real-time decision tracking.",
  },
  {
    icon: BarChart3,
    title: "Workforce Analytics",
    description:
      "Track hiring velocity, diversity metrics, and retention signals in one unified dashboard built for HR teams.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Built-in",
    description:
      "Stay audit-ready with GDPR-compliant data handling, EEO tracking, and automated record retention policies.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks — offer letters, background check triggers, onboarding sequences — all on autopilot.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Connect your stack",
    description:
      "Integrate with your ATS, HRIS, and job boards in minutes. No engineering required.",
  },
  {
    step: "02",
    title: "Let AI do the heavy lifting",
    description:
      "Owlky screens, scores, and surfaces the best-fit candidates automatically from the moment a role goes live.",
  },
  {
    step: "03",
    title: "Hire with confidence",
    description:
      "Make data-driven decisions, reduce time-to-hire by up to 60%, and build teams that last.",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "$49",
    description: "For small teams getting started with smarter hiring.",
    features: [
      "Up to 5 active roles",
      "AI resume screening",
      "Basic analytics",
      "Email support",
    ],
    isPopular: false,
    cta: "Get started",
  },
  {
    name: "Growth",
    price: "$149",
    description: "For scaling companies that hire continuously.",
    features: [
      "Unlimited active roles",
      "Advanced AI matching",
      "Workforce analytics",
      "Workflow automation",
      "Priority support",
    ],
    isPopular: true,
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex hiring needs.",
    features: [
      "Everything in Growth",
      "Custom AI models",
      "SSO & SCIM",
      "Dedicated CSM",
      "SLA guarantee",
    ],
    isPopular: false,
    cta: "Contact sales",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Owlky cut our time-to-hire in half. The AI screening alone saves our team 20+ hours per week on every role we open.",
    name: "Sarah Chen",
    title: "Head of Talent, Finlink",
  },
  {
    quote:
      "We went from 300 applicants to a shortlist of 12 in under an hour. The signal quality is unlike anything we've used before.",
    name: "Marcus Webb",
    title: "VP People, Atlasgrow",
  },
  {
    quote:
      "Finally an HR tool that thinks like a recruiter. The workflow automations alone paid for the subscription in week one.",
    name: "Linh Tran",
    title: "Recruiting Lead, Novapeak",
  },
];

const STATS = [
  { value: "60%", label: "Reduction in time-to-hire" },
  { value: "3×", label: "More qualified candidates reviewed" },
  { value: "98%", label: "Customer satisfaction score" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="size-4 text-primary-foreground" />
            </div>
            <span className="font-semibold tracking-tight">Owlky</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign in
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3 text-primary" />
            AI-native HR platform — now in public beta
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Hire smarter with{" "}
            <span className="text-primary">AI that works</span> like your best
            recruiter
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Owlky automates screening, surfaces top talent, and eliminates
            busywork — so your HR team can focus on people, not paperwork.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start free trial
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
            >
              See how it works
            </Link>
          </div>

          {/* Dashboard mockup */}
          <div className="mt-16 overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-border/40 px-4 py-3">
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
            </div>
            <div className="grid gap-3 p-6 md:grid-cols-3">
              {["Pipeline overview", "AI match score", "Time-to-hire"].map(
                (label) => (
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
                    <p className="mt-3 text-xs text-muted-foreground">
                      {label}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border/40 bg-muted/20">
          <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border/40 px-6 py-12">
            {STATS.map(({ value, label }) => (
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

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Everything your HR team needs
            </h2>
            <p className="mt-3 text-muted-foreground">
              One platform to recruit, onboard, and retain — powered by AI at
              every step.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
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

        {/* How it works */}
        <section
          id="how-it-works"
          className="border-y border-border/40 bg-muted/20"
        >
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold tracking-tight">
                Up and running in minutes
              </h2>
              <p className="mt-3 text-muted-foreground">
                No lengthy setup. No consultants. Just results.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {STEPS.map(({ step, title, description }) => (
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

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="mt-3 text-muted-foreground">
              Start free. Scale when you're ready. Cancel anytime.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PLANS.map(
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
                      Most popular
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="font-medium">{name}</h3>
                    <div className="mt-2 flex items-end gap-1">
                      <span className="text-3xl font-semibold">{price}</span>
                      {price !== "Custom" && (
                        <span className="mb-1 text-sm text-muted-foreground">
                          / month
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

        {/* Testimonials */}
        <section className="border-t border-border/40 bg-muted/20">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold tracking-tight">
                Loved by HR teams worldwide
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map(({ quote, name, title }) => (
                <div
                  key={name}
                  className="rounded-2xl border border-border/40 bg-card p-6"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    "{quote}"
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

        {/* CTA Banner */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-2xl bg-primary/5 border border-primary/20 px-8 py-14 text-center">
            <Globe className="mx-auto mb-4 size-8 text-primary/60" />
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to transform your hiring?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Join hundreds of companies using Owlky to hire faster, smarter,
              and more fairly.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start your free trial
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Book a demo →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex size-5 items-center justify-center rounded bg-primary">
              <Sparkles className="size-3 text-primary-foreground" />
            </div>
            <span className="font-medium text-foreground">Owlky</span>
            <span>© 2026</span>
          </div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Security", "Status"].map((item) => (
              <Link
                key={item}
                href="#"
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
