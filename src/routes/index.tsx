import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Linkedin,
  MessageCircle,
  ArrowRight,
  Workflow,
  Bot,
  Cog,
  Database,
  Handshake,
  Briefcase,
  Globe,
  ExternalLink,
} from "lucide-react";

import headshotAsset from "@/assets/headshot.png.asset.json";
import heroVideoAsset from "@/assets/hero-bg.mp4.asset.json";
const logoAsset = { url: "https://d071a9a9-b0b9-45a1-8e87-7c9fd100c453.lovableproject.com/__l5e/assets-v1/d071a9a9-b0b9-45a1-8e87-7c9fd100c453/logo.png" }; // Placeholder for direct asset replacement
import { TypingRoles } from "@/components/portfolio/TypingRoles";
import { Lightbox } from "@/components/portfolio/Lightbox";
import { TestimonialsCarousel } from "@/components/portfolio/TestimonialsCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jill Añonuevo — Workflow & Automation Specialist" },
      {
        name: "description",
        content:
          "Workflow automation, systems implementation, and CRM optimization for agencies, startups, and growing businesses.",
      },
    ],
  }),
  component: Portfolio,
});

/* ---------------- DATA ---------------- */

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
];

const SOCIALS = [
  { label: "Email", href: "mailto:jillnnv@gmail.com", Icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jillanonuevo/", Icon: Linkedin },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~0145e30ea4af18eac4",
    Icon: Briefcase,
  },
  {
    label: "OnlineJobs PH",
    href: "https://v2.onlinejobs.ph/jobseekers/info/1658261",
    Icon: Globe,
  },
  { label: "WhatsApp", href: "https://wa.me/639984776203", Icon: MessageCircle },
];

const SERVICES = [
  {
    Icon: Workflow,
    title: "End-to-End Workflow Automation",
    items: [
      "Lead Tracking & Client Onboarding",
      "Task & Email Automation",
      "Automated Reporting & Communication",
      "Process Optimization & Streamlining",
    ],
  },
  {
    Icon: Bot,
    title: "AI-Powered Systems",
    items: [
      "ChatGPT & Gemini Integration",
      "AI Content Processing",
      "Knowledge Management Systems",
      "Productivity Enhancement Tools",
    ],
  },
  {
    Icon: Database,
    title: "CRM & Operational Solutions",
    items: [
      "GoHighLevel Workflow Design",
      "CRM Optimization",
      "Pipeline Management Systems",
      "Customer Journey Automation",
    ],
  },
  {
    Icon: Cog,
    title: "Systems Implementation & Process Improvement",
    items: [
      "Workflow Audits & Documentation",
      "SOP Creation",
      "Workflow Mapping",
      "Process Standardization",
    ],
  },
  {
    Icon: Handshake,
    title: "Custom Solutions & Ongoing Support",
    items: [
      "Tailored Business Solutions",
      "System Troubleshooting",
      "Ongoing System Maintenance",
      "Continuous Improvement",
    ],
  },
];

const TOOLS: { name: string; slug: string; color: string }[] = [
  { name: "Zapier", slug: "zapier", color: "FF4F00" },
  { name: "Make", slug: "make", color: "6D00CC" },
  { name: "GoHighLevel", slug: "", color: "" },
  { name: "Google Workspace", slug: "googleworkspace", color: "4285F4" },
  { name: "HubSpot", slug: "hubspot", color: "FF7A59" },
  { name: "ClickUp", slug: "clickup", color: "7B68EE" },
  { name: "Trello", slug: "trello", color: "0052CC" },
  { name: "Slack", slug: "slack", color: "4A154B" },
  { name: "Notion", slug: "notion", color: "000000" },
  { name: "Airtable", slug: "airtable", color: "18BFFF" },
];

type Project = {
  title: string;
  description: string;
  image: string;
  tools: string[];
  link?: string;
};

const PROJECTS: Project[] = [
  {
    title: "New Lead Workflow Automation",
    description:
      "Designed an end-to-end lead intake flow that captures, enriches, and routes new leads to the right rep in seconds.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    tools: ["Zapier", "GoHighLevel", "Google Workspace"],
  },
  {
    title: "CRM Workflow Optimization",
    description:
      "Restructured pipelines, automated stage transitions, and built reporting dashboards for clearer pipeline visibility.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    tools: ["GoHighLevel", "Make", "ClickUp"],
  },
  {
    title: "Client Onboarding Automation",
    description:
      "Replaced a manual onboarding checklist with an automated sequence covering contracts, intake forms, and kickoff emails.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
    tools: ["Make", "HubSpot", "Slack"],
  },
  {
    title: "Operations Process Documentation",
    description:
      "Built a centralized SOP library with workflow maps and quick-reference guides for new team members.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    tools: ["Notion", "ClickUp", "Google Workspace"],
  },
  {
    title: "Automated Reporting Suite",
    description:
      "Set up scheduled reports that pull live metrics from multiple platforms and deliver weekly summaries to stakeholders.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    tools: ["Zapier", "Google Workspace", "Airtable"],
  },
  {
    title: "AI-Assisted Knowledge Base",
    description:
      "Implemented an AI-powered internal knowledge base for instant answers to recurring team and client questions.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    tools: ["ChatGPT", "Notion", "Make"],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Responsive, organized, and proactive. Jill kept projects moving efficiently and made the entire process feel smooth and well-managed.",
    name: "David Cohen",
    title: "Founder & CEO, Tech Attorney Cohort",
  },
  {
    quote:
      "Proactive, reliable, and detail-oriented. Jill consistently followed through on execution and made collaboration seamless.",
    name: "Kristina Fusco",
    title: "CEO, Kaeda Haus",
  },
  {
    quote:
      "Delivered ahead of schedule, communicated clearly, and resolved even complex issues quickly.",
    name: "Ian Cooper",
    title: "Senior Copywriter, SMC National",
  },
];

const STATS = [
  { value: "3+", label: "Years Operations & Implementation Experience" },
  { value: "60+", label: "Projects Managed & Delivered for B2B & B2C Clients" },
  { value: "Multi", label: "Platforms & Systems Implemented" },
];

const BRAND_GLOW =
  "0 18px 50px -20px rgba(247,123,49,0.35), 0 8px 24px -12px rgba(254,196,56,0.25)";

/* ---------------- COMPONENTS ---------------- */

function Logo({ className = "h-10 md:h-11" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Jill Añonuevo"
      className={`${className} w-auto object-contain`}
    />
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const smooth = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => smooth(e, "#top")}
          className="flex items-center"
          aria-label="Jill Añonuevo home"
        >
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => smooth(e, n.href)}
              className="nav-underline text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => smooth(e, "#contact")}
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-cta hover:-translate-y-0.5 transition-all duration-250"
            style={{ backgroundColor: "var(--brand-orange)" }}
          >
            Let's Connect
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-black/10"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="i-block">
            <span
              className={`block w-5 h-0.5 bg-[var(--ink)] transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--ink)] my-1 transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--ink)] transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 px-5 py-4 flex flex-col gap-3">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => smooth(e, n.href)}
              className="text-base font-medium text-[var(--ink)] py-2"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => smooth(e, "#contact")}
            className="text-center rounded-full px-6 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "var(--brand-orange)" }}
          >
            Let's Connect
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideoAsset.url}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center py-24">
        <h1 className="font-display leading-[1.02] tracking-tight text-[clamp(2.6rem,8vw,6.5rem)]">
          <span className="italic font-bold text-[#0f0c0a]">Hello, </span>
          <span className="font-bold text-[#0f0c0a]">I'm </span>
          <span className="text-gradient-brand font-bold">Jill Añonuevo</span>
        </h1>

        <p className="mt-5 text-base md:text-xl font-medium text-[var(--ink-soft)] tracking-wide text-slate-100">
          Operations, Systems &amp; Workflow Automation Specialist
        </p>

        <div className="mt-8">
          <TypingRoles />
        </div>

        <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-[var(--ink-soft)] leading-relaxed">
          I help businesses spend less time managing processes and more time focusing on growth.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-cta hover:-translate-y-0.5 transition-all duration-250"
            style={{ backgroundColor: "var(--brand-orange)" }}
          >
            View Projects <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white border border-black/5 hover:-translate-y-0.5 transition-all shadow-[0_4px_18px_-10px_rgba(247,123,49,0.4)]"
              style={{ color: "#f77b31" }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-28 bg-[var(--warm-50)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 md:gap-16 items-start">
        {/* LEFT: headshot + name + title + stats */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-full max-w-sm">
            <div
              className="absolute -inset-5 rounded-[36px] opacity-90 blur-[2px]"
              style={{ background: "var(--gradient-brand)" }}
              aria-hidden
            />
            <img
              src={headshotAsset.url}
              alt="Portrait of Jill Añonuevo"
              className="relative w-full rounded-[28px] shadow-card-soft object-cover"
            />
          </div>

          <div className="mt-6 text-center md:text-left w-full max-w-sm">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--ink)]">
              Jill Añonuevo
            </h3>
            <p className="mt-1 text-sm md:text-base text-[var(--ink-soft)] font-medium">
              Operations, Systems &amp; Workflow Automation Specialist
            </p>
          </div>

          <div className="mt-8 w-full max-w-sm">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[var(--ink-soft)] mb-4">
              By the Numbers
            </p>
            <div className="space-y-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-4 rounded-2xl bg-white border border-black/5 px-4 py-3.5 shadow-[0_8px_24px_-18px_rgba(247,123,49,0.35)]"
                >
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-semibold"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-sm text-[var(--ink-soft)] leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: storytelling only */}
        <div className="md:pt-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)] tracking-tight">
            Hi, I'm Jill.
          </h2>
          <div className="mt-6 space-y-5 text-[var(--ink-soft)] leading-relaxed text-base md:text-lg">
            <p>
              Over the past 3 years, I've helped businesses implement systems, coordinate
              projects, and improve the operational processes that keep teams running
              efficiently.
            </p>
            <p>
              Today, I specialize in workflow automation and process improvement—designing
              solutions that reduce manual work, streamline operations, and create more
              scalable systems using tools like Zapier, Make, and GoHighLevel.
            </p>
            <p>
              My approach is simple: understand how your business actually works, then build
              the systems and automations that quietly remove friction so you can focus on
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const firstRow = SERVICES.slice(0, 3);
  const secondRow = SERVICES.slice(3);

  const card = ({ Icon, title, items }: (typeof SERVICES)[number]) => (
    <article
      key={title}
      className="group rounded-3xl bg-white border border-black/[0.06] p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ boxShadow: "0 10px 30px -22px rgba(0,0,0,0.15)" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = BRAND_GLOW)}
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 10px 30px -22px rgba(0,0,0,0.15)")
      }
    >
      <div
        className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center text-white mb-6 group-hover:brightness-110 transition"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Icon size={30} strokeWidth={1.75} />
      </div>
      <h3 className="text-xl md:text-[22px] font-bold text-[var(--ink)] leading-snug">
        {title}
      </h3>
      <ul className="mt-5 space-y-2.5 text-[var(--ink-soft)] text-[15px]">
        {items.map((i) => (
          <li key={i} className="flex gap-2.5">
            <span
              className="mt-2 inline-block w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "var(--brand-orange)" }}
            />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </article>
  );

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)] tracking-tight">
            What I Offer to Clients
          </h2>
          <p className="mt-5 text-[var(--ink-soft)] text-lg">
            Premium automation, systems, and operational support — tailored to how your
            business actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {firstRow.map((s) => card(s))}
        </div>

        {/* Second row: 2 cards centered on desktop */}
        <div className="mt-6 md:mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          <div className="hidden lg:block" aria-hidden />
          {secondRow.map((s) => card(s))}
        </div>
      </div>
    </section>
  );
}

function ToolsMarquee() {
  const row = (
    <>
      {TOOLS.concat(TOOLS).map((tool, i) => (
        <div
          key={`${tool.name}-${i}`}
          className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-white border border-black/[0.06] px-5 py-2.5 shadow-[0_4px_16px_-10px_rgba(247,123,49,0.25)] mx-2"
        >
          {tool.slug ? (
            <img
              src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
              alt=""
              className="w-4 h-4 object-contain"
              loading="lazy"
            />
          ) : (
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--gradient-brand)" }}
            />
          )}
          <span className="text-sm font-medium text-[var(--ink)]">{tool.name}</span>
        </div>
      ))}
    </>
  );

  return (
    <section className="py-10 md:py-14 bg-[var(--warm-50)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 text-center mb-6">
        <p className="text-xs uppercase tracking-[0.22em] font-semibold text-gradient-brand">
          Tools &amp; Platforms
        </p>
        <h3 className="mt-3 text-xl md:text-2xl font-semibold text-[var(--ink)]">
          Trusted systems I work with every day
        </h3>
      </div>

      <div className="relative space-y-4 group">
        <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused]">
          {row}
        </div>
        <div className="flex w-max animate-marquee-right group-hover:[animation-play-state:paused]">
          {row}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--warm-50)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--warm-50)] to-transparent" />
      </div>
    </section>
  );
}

function Projects() {
  const [lightbox, setLightbox] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)] tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-5 text-[var(--ink-soft)] text-lg">
            Real-world automation and integration solutions that drive business efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group rounded-3xl bg-white border border-black/[0.06] overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ boxShadow: "0 10px 30px -22px rgba(0,0,0,0.15)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = BRAND_GLOW)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 10px 30px -22px rgba(0,0,0,0.15)")
              }
            >
              <button
                onClick={() => setLightbox(p)}
                className="relative aspect-[16/10] overflow-hidden bg-[var(--warm-100)]"
                aria-label={`Open ${p.title} image`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
              </button>
              <div className="p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-extrabold leading-snug text-gradient-brand">
                  {p.title}
                </h3>
                <p className="mt-3 text-[var(--ink-soft)] text-[15px] leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full text-white"
                      style={{ background: "#f77b31" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-orange)] hover:gap-2.5 transition-all"
                  >
                    View project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.image} alt={lightbox.title} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[var(--warm-50)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)] tracking-tight">
            What It's Like Working With Me
          </h2>
          <p className="mt-5 text-[var(--ink-soft)] text-lg">
            Building systems is important. Building strong working relationships is just as
            important. Here's what clients and collaborators have shared.
          </p>
        </div>

        <TestimonialsCarousel items={TESTIMONIALS} />
      </div>
    </section>
  );
}

function Contact() {
  const calendlyRef = useRef<HTMLDivElement>(null);

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)] tracking-tight leading-[1.05]">
            Let's Build <span className="text-gradient-brand italic">Better Systems</span>
          </h2>
          <p className="mt-5 text-[var(--ink-soft)] text-lg">
            Whether you're looking to automate repetitive work, improve your processes, or
            implement new systems, I'd love to learn more about your business and explore how
            I can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-3">
            <a
              href="mailto:jillnnv@gmail.com"
              className="flex items-center gap-4 rounded-2xl bg-white border border-black/[0.06] px-5 py-4 hover:-translate-y-0.5 hover:shadow-card-soft transition-all"
            >
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Mail size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-[var(--ink-soft)]">
                  Email
                </span>
                <span className="block font-medium text-[var(--ink)]">jillnnv@gmail.com</span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/jillanonuevo/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white border border-black/[0.06] px-5 py-4 hover:-translate-y-0.5 hover:shadow-card-soft transition-all"
            >
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Linkedin size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-[var(--ink-soft)]">
                  LinkedIn
                </span>
                <span className="block font-medium text-[var(--ink)]">
                  linkedin.com/in/jillanonuevo
                </span>
              </span>
            </a>
            <a
              href="https://wa.me/639984776203"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white border border-black/[0.06] px-5 py-4 hover:-translate-y-0.5 hover:shadow-card-soft transition-all"
            >
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                <MessageCircle size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-[var(--ink-soft)]">
                  WhatsApp
                </span>
                <span className="block font-medium text-[var(--ink)]">+63 998 477 6203</span>
              </span>
            </a>
          </div>

          <div
            ref={calendlyRef}
            className="rounded-3xl overflow-hidden bg-white border border-black/[0.06] shadow-card-soft"
          >
            <div className="p-5 border-b border-black/5">
              <p className="text-lg font-semibold text-[var(--ink)]">Book a Meeting</p>
              <p className="text-sm text-[var(--ink-soft)] mt-1">
                Pick a time that works — I'll confirm by email.
              </p>
            </div>
            <iframe
              src="https://calendly.com/jillnnv"
              title="Book a meeting with Jill"
              className="w-full h-[680px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <span className="text-sm font-medium text-[var(--ink)]">
          Workflow &amp; Automation Specialist
        </span>
        <span className="text-sm text-[var(--ink-soft)]">
          © {new Date().getFullYear()} Jill Añonuevo. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="bg-white text-[var(--ink)] min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <ToolsMarquee />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
