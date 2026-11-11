import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { portfolioProjects, profile } from "@/data/portfolio";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = portfolioProjects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.project.title} | Gbenga K.` : "Script sample | Gbenga K." },
      { name: "description", content: loaderData ? `${loaderData.project.synopsis} An illustrative script sample by Gbenga K.` : "An illustrative YouTube script sample from Gbenga K." },
      { property: "og:title", content: loaderData ? `${loaderData.project.title} | Gbenga K.` : "Script sample | Gbenga K." },
      { property: "og:description", content: loaderData ? loaderData.project.synopsis : "An illustrative YouTube script sample from Gbenga K." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b quiet-rule">
        <div className="site-container flex h-[76px] items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 text-sm font-bold"><span className="grid size-9 place-items-center bg-primary text-primary-foreground"><BookOpen aria-hidden="true" size={18} /></span>GBENGA K.</Link>
          <Button asChild size="sm" className="h-10 px-4 text-xs font-bold"><Link to="/" hash="contact">Let’s talk <ArrowUpRight aria-hidden="true" /></Link></Button>
        </div>
      </header>
      <article>
        <div className="site-container pb-16 pt-12 sm:pb-20 sm:pt-16">
          <Link to="/" hash="work" className="text-link inline-flex items-center gap-2 text-sm text-muted-foreground"><ArrowLeft aria-hidden="true" size={16} /> Back to selected work</Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl"><p className="eyebrow">{project.category} <span className="mx-2 text-muted-foreground">/</span> Illustrative sample</p><h1 className="display-title mt-5 text-4xl sm:text-6xl">{project.title}</h1></div>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">Sample script / 01</span>
          </div>
          <figure className="relative mt-10 aspect-[16/8] overflow-hidden bg-card sm:mt-14">
            <img src={project.image} alt={project.alt} width={1536} height={1024} className="size-full object-cover" />
            <figcaption className="absolute bottom-4 left-4 bg-background/90 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-primary">Concept image / illustrative</figcaption>
          </figure>
        </div>

        <div className="site-container grid gap-14 border-t quiet-rule py-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20 lg:py-20">
          <div className="max-w-[760px]">
            <section><p className="section-kicker">01 / The idea</p><p className="mt-5 text-lg leading-8 text-foreground">{project.overview}</p></section>
            <section className="mt-12 border-t quiet-rule pt-10"><p className="section-kicker">02 / Script excerpt</p><p className="mt-6 text-[1.08rem] leading-[2] text-foreground/90">{project.excerpt}</p><p className="mt-6 border-l-2 border-primary pl-4 text-sm leading-6 text-muted-foreground">{project.editorNotes}</p></section>
            <section className="mt-12 border-t quiet-rule pt-8"><p className="section-kicker">Research sources</p><p className="mt-4 text-sm leading-6 text-muted-foreground">This illustrative excerpt is not a finished research commission. Topic-specific sources and fact checks should be attached during project research before publication.</p></section>
          </div>
          <aside className="h-fit border-t quiet-rule pt-5 lg:sticky lg:top-8">
            <p className="section-kicker">Story notes</p>
            <dl className="mt-5 divide-y divide-border">
              <div className="py-4"><dt className="text-[0.65rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">Intended audience</dt><dd className="mt-2 text-sm leading-6">{project.audience}</dd></div>
              <div className="py-4"><dt className="text-[0.65rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">Tone</dt><dd className="mt-2 text-sm leading-6">{project.tone}</dd></div>
              <div className="py-4"><dt className="text-[0.65rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">Format</dt><dd className="mt-2 text-sm leading-6">YouTube documentary / explainer</dd></div>
            </dl>
          </aside>
        </div>
        <section className="border-t quiet-rule bg-card/35 py-14 sm:py-20">
          <div className="site-container flex flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><p className="section-kicker">Have a related idea?</p><h2 className="display-title mt-4 text-3xl sm:text-4xl">Let’s find the story in it.</h2></div><Button asChild size="lg" className="h-12 px-5 font-semibold"><Link to="/" hash="contact">Discuss a similar project <ArrowRight aria-hidden="true" /></Link></Button></div>
        </section>
      </article>
      <footer className="border-t quiet-rule py-7"><div className="site-container flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground"><Link to="/" className="font-semibold text-foreground">{profile.name}</Link><Link to="/" hash="work" className="text-link inline-flex items-center gap-2">All selected work <ArrowRight aria-hidden="true" size={14} /></Link></div></footer>
    </main>
  );
}