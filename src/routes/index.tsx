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
  Quote,
  Briefcase,
  Globe,
  ExternalLink,
} from "lucide-react";

import headshotAsset from "@/assets/headshot.png.asset.json";
import heroVideoAsset from "@/assets/hero-bg.mp4.asset.json";
import { TypingRoles } from "@/components/portfolio/TypingRoles";
import { Lightbox } from "@/components/portfolio/Lightbox";

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

const TOOLS = [
  "Zapier",
  "Make",
  "GoHighLevel",
  "Google Workspace",
  "HubSpot",
  "ClickUp",
  "Trello",
  "Slack",
  "Notion",
  "Airtable",
];

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  link?: string;
};

const PROJECTS: Project[] = [
  {
    title: "New Lead Workflow Automation",
    category: "Workflow Automation",
    description:
      "Designed an end-to-end lead intake flow that captures, enriches, and routes new leads to the right rep in seconds.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    tools: ["Zapier", "GoHighLevel", "Google Workspace"],
  },
  {
    title: "CRM Workflow Optimization",
    category: "CRM Optimization",
    description:
      "Restructured pipelines, automated stage transitions, and built reporting dashboards for clearer pipeline visibility.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    tools: ["GoHighLevel", "Make", "ClickUp"],
  },
  {
    title: "Client Onboarding Automation",
    category: "Process Automation",
    description:
      "Replaced a manual onboarding checklist with an automated sequence covering contracts, intake forms, and kickoff emails.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
    tools: ["Make", "HubSpot", "Slack"],
  },
  {
    title: "Operations Process Documentation",
    category: "Systems Implementation",
    description:
      "Built a centralized SOP library with workflow maps and quick-reference guides for new team members.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    tools: ["Notion", "ClickUp", "Google Workspace"],
  },
  {
    title: "Automated Reporting Suite",
    category: "Reporting Automation",
    description:
      "Set up scheduled reports that pull live metrics from multiple platforms and deliver weekly summaries to stakeholders.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    tools: ["Zapier", "Google Workspace", "Airtable"],
  },
  {
    title: "AI-Assisted Knowledge Base",
    category: "AI Systems",
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
  { value: "60+", label: "Client Implementations Managed & Delivered" },
  { value: "B2B & B2C", label: "Cross-Industry Experience" },
  { value: "Multi", label: "Platforms & Systems Implemented" },
];

/* ---------------- COMPONENTS ---------------- */

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
          ? "bg-white/75 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => smooth(e, "#top")}
          className="flex items-center gap-2 group"
          aria-label="Jill Añonuevo home"
        >
          {/* Logo slot — swap inner span for <img src=... /> later */}
          <span
            className="inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl text-white font-display font-semibold text-lg shadow-cta"
            style={{ background: "var(--gradient-brand)" }}
          >
            JA
          </span>
          <span className="hidden sm:block font-display text-lg md:text-xl tracking-tight text-[var(--ink)]">
            Jill Añonuevo
          </span>
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
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      {/* Video background */}
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
        <p className="inline-block text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-[var(--ink-soft)] mb-6">
          <span className="text-gradient-brand">Workflow & Automation Specialist</span>
        </p>

        <h1 className="font-display font-medium leading-[1.02] tracking-tight text-[clamp(2.6rem,8vw,6.5rem)] text-[var(--ink)]">
          <span className="block md:inline">Hello, I'm </span>
          <span className="text-gradient-brand italic">Jill Añonuevo</span>
        </h1>

        <div className="mt-6">
          <TypingRoles />
        </div>

        <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-[var(--ink-soft)] leading-relaxed">
          I build efficient processes that reduce manual work, improve efficiency, and help
          businesses scale more effectively.
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
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-[var(--ink)] border border-[var(--ink)]/15 bg-white hover:bg-white/70 hover:-translate-y-0.5 transition-all duration-250"
          >
            Let's Connect
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
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white border border-black/5 text-[var(--ink-soft)] hover:text-[var(--brand-orange)] hover:-translate-y-0.5 transition-all shadow-[0_4px_18px_-10px_rgba(0,0,0,0.18)]"
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
    <section id="about" className="py-24 md:py-32 bg-[var(--warm-50)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div className="relative mx-auto md:mx-0 max-w-md w-full">
          <div
            className="absolute -inset-6 rounded-[36px] opacity-90 blur-[2px]"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden
          />
          <img
            src={headshotAsset.url}
            alt="Portrait of Jill Añonuevo"
            className="relative w-full rounded-[28px] shadow-card-soft object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.22em] font-semibold text-gradient-brand mb-4">
            About
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--ink)] tracking-tight">
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
          </div>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[var(--ink-soft)] mb-5">
              By the Numbers
            </p>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white border border-black/5 p-5 shadow-[0_6px_24px_-16px_rgba(0,0,0,0.15)]"
                >
                  <div className="font-display text-3xl text-gradient-brand font-semibold">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-[var(--ink-soft)] leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.22em] font-semibold text-gradient-brand mb-4">
            Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--ink)] tracking-tight">
            What I help teams build
          </h2>
          <p className="mt-5 text-[var(--ink-soft)] text-lg">
            Premium automation, systems, and operational support — tailored to how your
            business actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {SERVICES.map(({ Icon, title, items }) => (
            <article
              key={title}
              className="group rounded-3xl bg-white border border-black/[0.06] p-7 md:p-8 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.18)] hover:shadow-card-soft hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div
                className="w-[72px] h-[72px] rounded-[18px] flex items-center justify-center text-white mb-6 group-hover:brightness-110 transition"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Icon size={32} strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-2xl text-[var(--ink)] leading-snug">{title}</h3>
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
          ))}
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
          key={`${tool}-${i}`}
          className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-white border border-black/[0.06] px-5 py-2.5 shadow-[0_4px_16px_-10px_rgba(0,0,0,0.15)] mx-2"
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "var(--gradient-brand)" }}
          />
          <span className="text-sm font-medium text-[var(--ink)]">{tool}</span>
        </div>
      ))}
    </>
  );

  return (
    <section className="py-20 md:py-24 bg-[var(--warm-50)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 text-center mb-10">
        <p className="text-xs uppercase tracking-[0.22em] font-semibold text-gradient-brand">
          Tools & Platforms
        </p>
        <h3 className="mt-3 font-display text-2xl md:text-3xl text-[var(--ink)]">
          Trusted systems I work with every day
        </h3>
      </div>

      <div className="relative space-y-5 group">
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.22em] font-semibold text-gradient-brand mb-4">
            Featured Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--ink)] tracking-tight">
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
              className="group rounded-3xl bg-white border border-black/[0.06] overflow-hidden shadow-[0_8px_30px_-18px_rgba(0,0,0,0.18)] hover:shadow-card-soft hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col"
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
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gradient-brand">
                  {p.category}
                </span>
                <h3 className="mt-2 font-display text-2xl text-[var(--ink)] leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-[var(--ink-soft)] text-[15px] leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full text-[var(--ink)] border border-black/5"
                      style={{ background: "rgba(254, 196, 56, 0.18)" }}
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.22em] font-semibold text-gradient-brand mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--ink)] tracking-tight">
            What it's like working with me
          </h2>
          <p className="mt-5 text-[var(--ink-soft)] text-lg">
            Building systems is important. Building strong working relationships is just as
            important. Here's what clients and collaborators have shared.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl bg-white border border-black/[0.06] p-7 md:p-8 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:shadow-card-soft transition-all duration-300 flex flex-col"
            >
              <Quote
                size={28}
                className="text-[var(--brand-orange)] mb-4"
                strokeWidth={2}
              />
              <blockquote className="text-[var(--ink)] leading-relaxed text-[17px] font-display italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-black/5">
                <div className="font-semibold text-[var(--ink)]">{t.name}</div>
                <div className="text-sm text-[var(--ink-soft)] mt-0.5">{t.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const calendlyRef = useRef<HTMLDivElement>(null);

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] font-semibold text-gradient-brand mb-4">
              Let's Connect
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--ink)] tracking-tight leading-[1.05]">
              Let's Build <span className="text-gradient-brand italic">Better Systems</span>
            </h2>
            <p className="mt-6 text-[var(--ink-soft)] text-lg leading-relaxed max-w-xl">
              Whether you're looking to automate repetitive work, improve your processes, or
              implement new systems, I'd love to learn more about your business and explore
              how I can help.
            </p>

            <div className="mt-8 space-y-3">
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
          </div>

          <div ref={calendlyRef} className="rounded-3xl overflow-hidden bg-white border border-black/[0.06] shadow-card-soft">
            <div className="p-5 border-b border-black/5">
              <p className="font-display text-xl text-[var(--ink)]">Book a Meeting</p>
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
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-white font-display font-semibold text-sm"
            style={{ background: "var(--gradient-brand)" }}
          >
            JA
          </span>
          <span className="text-sm text-[var(--ink-soft)]">
            © {new Date().getFullYear()} Jill Añonuevo. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="text-[var(--ink-soft)] hover:text-[var(--brand-orange)] transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="bg-white text-[var(--ink)] min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ToolsMarquee />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
