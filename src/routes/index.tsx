import { useEffect, useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  FileText,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import portrait from "@/assets/gbenga-k-portrait.png.asset.json";
import storyMark from "@/assets/gbenga-mark.svg";
import {
  filterProjects,
  portfolioCategories,
  portfolioProjects,
  processSteps,
  profile,
  services,
  type PortfolioCategory,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gbenga K. | YouTube Scriptwriter & Documentary Storyteller" },
      { name: "description", content: "Explore illustrative documentary script samples and connect with Gbenga K. about research-backed scripts for your YouTube channel." },
      { property: "og:title", content: "Gbenga K. | YouTube Scriptwriter & Documentary Storyteller" },
      { property: "og:description", content: "Research-backed scripts, strong hooks, and natural narration for YouTube creators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioHome,
});

const navItems = [
  ["Home", "home"],
  ["Selected Work", "work"],
  ["Services", "services"],
  ["About", "about"],
  ["Contact", "contact"],
] as const;

function PortfolioHome() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = useMemo(() => filterProjects(activeCategory), [activeCategory]);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell min-h-screen bg-background text-foreground">
      <header className="site-header fixed inset-x-0 top-0 z-50 border-b quiet-rule">
        <div className="site-container flex h-[76px] items-center justify-between gap-4">
          <a href="#home" aria-label="Gbenga K. home" className="flex shrink-0 items-center gap-3">
            <img src={storyMark} alt="" className="h-9 w-9" />
            <span className="text-sm font-bold tracking-[0.06em]">GBENGA K.</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, id]) => (
              <a className="text-link text-[0.76rem] text-muted-foreground" href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild className="hidden h-10 px-4 text-xs font-bold sm:inline-flex">
              <a href="#contact">Let’s talk <ArrowUpRight aria-hidden="true" /></a>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t quiet-rule bg-background px-4 py-3 lg:hidden">
            <div className="site-container flex flex-wrap gap-x-6 gap-y-3">
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground">
                  {label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-primary">Let’s talk ↗</a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden border-b quiet-rule pt-24 sm:min-h-[800px]">
          <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="site-container relative grid items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-24">
            <div data-reveal className="reveal-item max-w-[700px]">
              <p className="eyebrow mb-7 flex items-center gap-3"><span className="h-px w-8 bg-primary" /> YouTube scriptwriter <span className="text-muted-foreground">·</span> Research <span className="text-muted-foreground">·</span> Storytelling</p>
              <h1 className="display-title text-[clamp(3.5rem,7vw,6.35rem)]">Stories that hook.<br /><span className="text-primary">Scripts that hold attention.</span></h1>
              <p className="mt-7 max-w-[580px] text-[1rem] leading-8 text-muted-foreground sm:text-[1.05rem]">I turn complex topics and compelling ideas into research-backed YouTube scripts—with strong openings, natural narration, and a clear reason to keep watching.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 px-5 text-sm font-bold">
                  <a href="#work">Explore my scripts <ArrowDownRight aria-hidden="true" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 border-border px-5 text-sm">
                  <a href="#contact">Discuss your channel <ArrowUpRight aria-hidden="true" /></a>
                </Button>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-3 gap-y-2 text-xs text-muted-foreground">
                <span className="text-foreground">Documentaries</span><span>·</span><span>Automotive History</span><span>·</span><span>Business</span><span>·</span><span>Science</span><span>·</span><span>Sports</span>
              </div>
            </div>

            <div data-reveal className="reveal-item relative mx-auto w-full max-w-[520px] lg:ml-auto">
              <div className="absolute -inset-7 rounded-[50%] bg-primary/5 blur-3xl" aria-hidden="true" />
              <div className="script-paper relative rotate-[1deg] border border-border bg-card p-5 sm:p-7">
                <div className="flex items-start justify-between gap-3 border-b quiet-rule pb-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-sm bg-primary text-primary-foreground"><FileText aria-hidden="true" size={17} /></span>
                    <div><p className="text-xs font-bold">FIELD NOTES / 001</p><p className="mt-1 text-[0.67rem] text-muted-foreground">STORY DEVELOPMENT</p></div>
                  </div>
                  <span className="border border-border px-2 py-1 text-[0.6rem] uppercase tracking-[0.09em] text-muted-foreground">Sample opening</span>
                </div>
                <div className="py-8 sm:py-10">
                  <p className="section-kicker mb-4">The question behind the story</p>
                  <p className="max-w-[420px] text-[1.3rem] font-semibold leading-[1.55] sm:text-[1.65rem]">“What if the secret to changing an industry wasn’t a faster car—but a better way to think about the journey?”</p>
                </div>
                <div className="grid gap-4 border-t quiet-rule pt-5 sm:grid-cols-2">
                  <div className="border-l-2 border-primary pl-3"><p className="text-[0.62rem] font-bold tracking-[0.1em] text-primary">HOOK</p><p className="mt-1.5 text-[0.7rem] leading-5 text-muted-foreground">Start with the question. Reveal the context next.</p></div>
                  <div className="border-l-2 border-border pl-3"><p className="text-[0.62rem] font-bold tracking-[0.1em] text-muted-foreground">EDITOR CUE</p><p className="mt-1.5 text-[0.7rem] leading-5 text-muted-foreground">Open on archival road footage. Let the image breathe.</p></div>
                </div>
                <div className="mt-7 flex items-center justify-between border-t quiet-rule pt-4 text-[0.62rem] uppercase tracking-[0.11em] text-muted-foreground"><span>Curiosity → Context → Clarity</span><span>01 / 04</span></div>
              </div>
              <div className="absolute -bottom-6 -left-5 hidden items-center gap-2 border border-border bg-background px-3 py-2 text-[0.65rem] text-muted-foreground sm:flex"><span className="size-1.5 rounded-full bg-primary" /> Research-led. Viewer-first.</div>
            </div>
          </div>
        </section>

        <section id="work" className="site-container scroll-mt-24 py-24 sm:py-32">
          <div data-reveal className="reveal-item flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div><p className="section-kicker">Selected work / 01—06</p><h2 className="display-title mt-5 max-w-3xl text-5xl sm:text-6xl">Good stories<br className="hidden sm:block" /> start here.</h2></div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">A few directions a strong script can take. Each piece is an illustrative sample, ready to be replaced with commissioned work.</p>
          </div>
          <div role="group" aria-label="Filter work by category" className="mt-10 flex gap-2 overflow-x-auto border-b quiet-rule pb-4">
            {portfolioCategories.map((category) => (
              <Button
                type="button"
                key={category}
                size="sm"
                variant={activeCategory === category ? "default" : "ghost"}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className="h-9 shrink-0 px-3 text-[0.68rem]"
              >
                {category}
              </Button>
            ))}
          </div>
          <div aria-live="polite" className="mt-8 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
            {visibleProjects.map((project, index) => (
              <article className={`story-card group ${index === 0 && activeCategory === "All" ? "lg:col-span-7" : index === 1 && activeCategory === "All" ? "lg:col-span-5" : "lg:col-span-4"}`} key={project.slug}>
                <Link to="/work/$slug" params={{ slug: project.slug }} className="block focus-visible:outline-none">
                  <div className="relative aspect-[16/10] overflow-hidden bg-card">
                    <img src={project.image} alt={project.alt} width={1536} height={1024} loading="lazy" className="story-image size-full object-cover" />
                    <span className="absolute left-3 top-3 border border-primary/60 bg-background/90 px-2.5 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.09em] text-primary">Illustrative sample</span>
                    <span className="absolute bottom-3 right-3 grid size-10 place-items-center bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><ArrowUpRight aria-hidden="true" size={18} /></span>
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="eyebrow text-[0.62rem]">{project.category}</span>
                    <span className="text-[0.62rem] text-muted-foreground">SCRIPT SAMPLE / 0{index + 1}</span>
                  </div>
                  <h3 className="mt-3 max-w-[620px] text-xl font-bold leading-snug sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 max-w-[600px] text-sm leading-6 text-muted-foreground">{project.synopsis}</p>
                  <span className="text-link mt-4 inline-flex items-center gap-2 text-xs font-semibold">Read script <ArrowRight aria-hidden="true" size={15} /></span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="scroll-mt-24 border-y quiet-rule bg-card/35 py-24 sm:py-28">
          <div className="site-container grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-20">
            <div data-reveal className="reveal-item lg:sticky lg:top-32 lg:self-start">
              <p className="section-kicker">How I can help / 02</p>
              <h2 className="display-title mt-5 text-4xl sm:text-5xl">From the first hook to the final line.</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">One thoughtful script can make a complicated subject easier to follow—and more rewarding to finish.</p>
              <a href="#contact" className="text-link mt-7 inline-flex items-center gap-2 text-sm font-semibold">Discuss your channel <ArrowUpRight aria-hidden="true" size={16} /></a>
            </div>
            <div className="divide-y divide-border border-y quiet-rule">
              {services.map((service) => (
                <article data-reveal key={service.number} className="reveal-item grid gap-3 py-7 sm:grid-cols-[62px_1fr] sm:gap-5">
                  <span className="eyebrow pt-1">{service.number}</span>
                  <div><h3 className="text-lg font-bold">{service.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{service.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div data-reveal className="reveal-item"><p className="section-kicker">My approach / 03</p><h2 className="display-title mt-5 text-4xl sm:text-5xl">Every paragraph needs a purpose.</h2></div>
            <div className="grid gap-0 sm:grid-cols-2">
              {["Open with a reason to care.", "Build curiosity throughout the story.", "Research the details that matter.", "Write for the voice, the visuals, and the viewer."].map((principle, index) => (
                <div data-reveal key={principle} className={`reveal-item border-t quiet-rule py-6 ${index % 2 === 0 ? "sm:mr-7" : "sm:ml-7"}`}><span className="section-kicker">0{index + 1}</span><p className="mt-3 max-w-[300px] text-xl font-semibold leading-8">{principle}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y quiet-rule bg-card/35 py-24 sm:py-28">
          <div className="site-container">
            <div data-reveal className="reveal-item mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div><p className="section-kicker">A clear process / 04</p><h2 className="display-title mt-5 text-4xl sm:text-5xl">Thought through.<br />Then written.</h2></div>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">Good work starts with a shared picture of what the story needs to do.</p>
            </div>
            <div className="grid border-t quiet-rule md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map(([number, title, description]) => (
                <article data-reveal key={number} className="reveal-item border-b quiet-rule py-7 md:pr-7 lg:border-b-0 lg:border-r lg:py-8 lg:pr-6 lg:pl-6 first:lg:pl-0 last:lg:border-r-0">
                  <span className="eyebrow">{number}</span><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 max-w-[270px] text-sm leading-6 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="site-container scroll-mt-24 py-24 sm:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <div data-reveal className="reveal-item relative mx-auto w-full max-w-[430px]">
              <div className="portrait-frame absolute inset-4 translate-x-3 translate-y-3" aria-hidden="true" />
              <img src={portrait.url} alt="Gbenga K., YouTube scriptwriter and documentary storyteller" width={1086} height={1448} loading="lazy" className="relative aspect-[4/5] w-full object-cover object-[center_32%]" />
              <span className="absolute bottom-7 left-7 bg-background/90 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.12em]">Gbenga K. / Writer</span>
            </div>
            <div data-reveal className="reveal-item">
              <p className="section-kicker">A little about me / 05</p>
              <h2 className="display-title mt-5 max-w-[760px] text-4xl sm:text-6xl">I enjoy finding the story inside a subject.</h2>
              <p className="mt-7 max-w-2xl text-[0.96rem] leading-8 text-muted-foreground">{profile.bio}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t quiet-rule pt-5 text-xs text-muted-foreground"><span className="flex items-center gap-2"><Check aria-hidden="true" size={14} className="text-primary" /> Research-driven storytelling</span><span className="flex items-center gap-2"><Check aria-hidden="true" size={14} className="text-primary" /> Clear, natural narration</span></div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="border-t quiet-rule">
        <div className="site-container grid gap-8 py-9 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <a href="#home" className="flex items-center gap-3"><img src={storyMark} alt="" className="h-8 w-8" /><span><span className="block text-xs font-bold tracking-[0.08em]">{profile.name}</span><span className="mt-1 block text-[0.62rem] text-muted-foreground">{profile.title}</span></span></a>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-[0.68rem] text-muted-foreground">
            {navItems.slice(1).map(([label, id]) => <a key={id} href={`#${id}`} className="text-link">{label}</a>)}
          </nav>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:justify-end">
            <a href={profile.upworkUrl} target="_blank" rel="noreferrer" className="text-link text-[0.68rem] text-muted-foreground">Upwork profile <ArrowUpRight aria-hidden="true" className="ml-1 inline" size={12} /></a>
            <span className="text-[0.62rem] text-muted-foreground">© {new Date().getFullYear()} Gbenga K.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactSection() {
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const brief = String(formData.get("brief") ?? "").trim();
    const errors: Record<string, string> = {};
    if (!name) errors["name"] = "Please enter your name.";
    if (!email) errors["email"] = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors["email"] = "Enter an email address in a valid format.";
    if (!projectType) errors["projectType"] = "Choose a project type.";
    if (!brief) errors["brief"] = "Add a few details about your project.";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setFormMessage("Review the highlighted fields. Nothing has been sent.");
      form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }
    setFormMessage("This form isn’t connected yet, so nothing was sent. Please use email or WhatsApp to send your inquiry.");
  }

  function clearError(field: string) {
    setFieldErrors((previous) => {
      if (!(field in previous)) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
    setFormMessage("");
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t quiet-rule py-24 sm:py-32">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="site-container relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div data-reveal className="reveal-item lg:sticky lg:top-32 lg:self-start">
          <p className="section-kicker">Let’s start a conversation / 06</p>
          <h2 className="display-title mt-5 text-5xl sm:text-6xl">Your next video starts with a conversation.</h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">Tell me about your channel, your topic, and the kind of story you want to tell.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild className="h-12 px-5 font-semibold"><a href={`mailto:${profile.email}`}><span className="sr-only">Email Gbenga at </span>{profile.email} <ArrowUpRight aria-hidden="true" /></a></Button>
            <Button asChild variant="outline" className="h-12 px-5"><a href={profile.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight aria-hidden="true" /></a></Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Prefer a direct message? Both contact links are ready to use.</p>
        </div>

        <div data-reveal className="reveal-item border-t quiet-rule pt-6">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h3 className="text-lg font-bold">Project inquiry</h3>
            <span className="border border-border px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.09em] text-muted-foreground">Form integration pending</span>
          </div>
          <form noValidate onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" error={fieldErrors.name} onChange={() => clearError("name")} autoComplete="name" />
              <Field label="Email" name="email" type="email" error={fieldErrors.email} onChange={() => clearError("email")} autoComplete="email" />
            </div>
            <Field label="Channel link (optional)" name="channel" type="url" placeholder="https://youtube.com/@yourchannel" onChange={() => setFormMessage("")} />
            <div>
              <label className="field-label" htmlFor="projectType">Project type <span aria-hidden="true" className="text-primary">*</span></label>
              <div className="relative">
                <select id="projectType" name="projectType" className="field-control appearance-none pr-10" aria-invalid={Boolean(fieldErrors.projectType)} aria-describedby={fieldErrors.projectType ? "projectType-error" : undefined} onChange={() => clearError("projectType")} defaultValue="">
                  <option value="" disabled>Select a project</option>
                  <option>YouTube scriptwriting</option><option>Documentary research</option><option>Script rewrite</option><option>Footage-led script</option><option>Other</option>
                </select>
                <ChevronDown aria-hidden="true" size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
              {fieldErrors.projectType && <p id="projectType-error" className="mt-2 text-xs text-destructive">{fieldErrors.projectType}</p>}
            </div>
            <div>
              <label className="field-label" htmlFor="brief">Tell me about your project <span aria-hidden="true" className="text-primary">*</span></label>
              <textarea id="brief" name="brief" rows={5} className="field-control min-h-36 resize-y leading-6" placeholder="What’s the topic, audience, and story you have in mind?" aria-invalid={Boolean(fieldErrors.brief)} aria-describedby={fieldErrors.brief ? "brief-error" : undefined} onChange={() => clearError("brief")} />
              {fieldErrors.brief && <p id="brief-error" className="mt-2 text-xs text-destructive">{fieldErrors.brief}</p>}
            </div>
            {formMessage && <p role="status" aria-live="polite" className="text-sm leading-6 text-muted-foreground">{formMessage}</p>}
            <Button type="submit" className="h-12 px-5 font-semibold">Send project inquiry <ArrowRight aria-hidden="true" /></Button>
            <p className="text-xs leading-5 text-muted-foreground">This form is not connected to a submission service yet. Submitting it will not send your message.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
  placeholder?: string;
  autoComplete?: string;
  onChange?: () => void;
};

function Field({ label, name, type = "text", error, placeholder, autoComplete, onChange }: FieldProps) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label className="field-label" htmlFor={name}>{label}{["name", "email"].includes(name) && <span aria-hidden="true" className="ml-1 text-primary">*</span>}</label>
      <input id={name} name={name} type={type} autoComplete={autoComplete} placeholder={placeholder} className="field-control" aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} onChange={onChange} />
      {error && <p id={errorId} className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
