import asteroidImage from "@/assets/asteroid-bennu.jpg";
import automotiveImage from "@/assets/automotive-history.jpg";
import brandImage from "@/assets/household-brand.jpg";
import raceImage from "@/assets/comeback-race.jpg";
import cityImage from "@/assets/desert-engineering.jpg";
import tradeImage from "@/assets/global-trade.jpg";

export const portfolioCategories = [
  "All",
  "Documentary & History",
  "Automotive",
  "Business & Finance",
  "Science & Space",
  "Sports",
  "Geography & Megaprojects",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export const profile = {
  name: "Gbenga K.",
  title: "YouTube Scriptwriter & Documentary Storyteller",
  studio: "YouTube Content Studio",
  tagline: "Make the click. Keep the attention.",
  email: "azeezfaruk405@gmail.com",
  whatsapp: "+2348082181051",
  whatsappUrl: "https://wa.me/2348082181051",
  upworkUrl: "https://www.upwork.com/freelancers/~01888ccdc9d3d85bcb?mp_source=share",
  bio: "I’m Gbenga K., a YouTube scriptwriter and content production specialist. I help faceless channel owners and media teams connect the story, the edit, and the thumbnail so every part of an upload works toward the same idea. My foundation is research-driven documentary and true crime storytelling, with conversational narration, clear pacing, and useful editor cues. I also offer video editing and thumbnail design for creators who want coordinated support across their production process.",
} as const;

export const portfolioProjects = [
  {
    slug: "toyota-automotive-giant",
    title: "Toyota: The Decisions That Built an Automotive Giant",
    category: "Automotive",
    image: automotiveImage,
    alt: "A classic compact car on a mountain road at dawn",
    synopsis: "A documentary-style look at the choices and ideas behind a carmaker’s growth.",
    overview: "An illustrative documentary treatment about the decisions, design thinking, and production ideas that can make a company’s history feel human.",
    audience: "Viewers drawn to automotive history, design, and how businesses grow.",
    tone: "Curious, grounded, and story-led.",
    excerpt: "A company’s history is easy to tell as a timeline. The more interesting story is the series of choices hidden inside it: what to build, what to improve, and what to do when the familiar answer stops working. This sample opens on one of those turning points, then follows the idea back to the people and pressures that shaped it.",
    editorNotes: "Illustrative sample only. Research, archival imagery, and any dates should be verified before production.",
  },
  {
    slug: "city-in-the-desert",
    title: "The Engineering Behind a City in the Desert",
    category: "Geography & Megaprojects",
    image: cityImage,
    alt: "A modern transit station and city skyline at the edge of desert terrain",
    synopsis: "A visual-first story about the infrastructure that makes a fast-growing city work.",
    overview: "An illustrative megaproject treatment that connects the scale of a city to the infrastructure and planning people encounter every day.",
    audience: "Viewers interested in architecture, infrastructure, and ambitious places.",
    tone: "Visual, explanatory, and measured.",
    excerpt: "From above, a city can look like a finished picture. At street level, it is a set of connected problems: moving people, supplying water, and linking one neighborhood to another. The story begins with the systems underneath the skyline—and asks which of them makes the biggest difference to daily life.",
    editorNotes: "Illustrative sample only. Location-specific details and project imagery require research and verification.",
  },
  {
    slug: "household-brand-lost-advantage",
    title: "How a Household Brand Lost Its Advantage",
    category: "Business & Finance",
    image: brandImage,
    alt: "Two plain household cleaning bottles on a bright kitchen counter",
    synopsis: "A business-history framework for tracing how customer habits and competition can change.",
    overview: "An illustrative business story about the gap between what a company believes customers want and what people actually choose.",
    audience: "Viewers who enjoy approachable business strategy and brand histories.",
    tone: "Analytical, accessible, and free of jargon.",
    excerpt: "A familiar product can feel impossible to dislodge—until a customer reaches for something else. To understand that moment, this story looks beyond one package or one campaign. It follows how expectations shift, how rivals respond, and why yesterday’s advantage may no longer answer today’s question.",
    editorNotes: "Illustrative sample only. No specific brand, client, or business result is represented.",
  },
  {
    slug: "asteroid-bennu-life-ingredients",
    title: "Asteroid Bennu and the Search for Life’s Ingredients",
    category: "Science & Space",
    image: asteroidImage,
    alt: "A robotic spacecraft above a rocky asteroid against a view of Earth",
    synopsis: "An accessible science story about what ancient space rocks may help us understand.",
    overview: "An illustrative science treatment built around the questions a sample-return mission can help researchers investigate.",
    audience: "Viewers curious about planetary science, space exploration, and origins.",
    tone: "Wonder-filled, precise, and clear about what is still unknown.",
    excerpt: "A rock can carry a question far older than Earth’s first oceans. If we can study the material an asteroid preserved, what might it tell us about the ingredients that were available when planets were young? This sample follows the question—not a claim of discovery—and makes room for what scientists still need to learn.",
    editorNotes: "Illustrative sample only. NASA’s OSIRIS-REx mission is a starting point for a properly sourced script.",
  },
  {
    slug: "comeback-that-changed-a-career",
    title: "The Comeback That Changed a Career",
    category: "Sports",
    image: raceImage,
    alt: "A runner approaching the finish on a stadium track at sunset",
    synopsis: "A character-led sports story about the work and turning points behind a return.",
    overview: "An illustrative sports-documentary structure centered on a comeback, the setbacks around it, and the personal stakes beyond a result.",
    audience: "Sports viewers and documentary audiences who connect with personal journeys.",
    tone: "Reflective, energetic, and respectful.",
    excerpt: "A comeback is often remembered as a finish line. The harder story lives in the days before it: the uncertainty, the repetition, and the decision to keep showing up when the outcome is still unclear. This sample begins there, with a person rebuilding a routine before the crowd has a reason to notice.",
    editorNotes: "Illustrative sample only. No real athlete, competition, or outcome is depicted.",
  },
  {
    slug: "geography-shapes-global-trade",
    title: "Why Geography Shapes Global Trade",
    category: "Documentary & History",
    image: tradeImage,
    alt: "A container ship navigating a narrow coastal passage",
    synopsis: "A clear visual explanation of how routes and physical bottlenecks shape exchange.",
    overview: "An illustrative geography-led explainer that uses routes and chokepoints to make a complex global system easier to picture.",
    audience: "Viewers interested in maps, history, economics, and the movement of goods.",
    tone: "Explanatory, visual, and globally minded.",
    excerpt: "A line on a map can look like the shortest path between two ports. But every route runs through real places: a narrow passage, a weather system, a coastline, or a crossing that changes the calculation. To understand trade, start with the shape of the world—and then follow what people build around it.",
    editorNotes: "Illustrative sample only. Route data and current shipping examples require verification before use.",
  },
] as const;

export type PortfolioProject = (typeof portfolioProjects)[number];

export function filterProjects(category: PortfolioCategory) {
  if (category === "All") return portfolioProjects;
  return portfolioProjects.filter((project) => project.category === category);
}

export const services = [
  {
    number: "01",
    title: "YouTube Scriptwriting",
    description: "Conversational scripts shaped around your topic, audience, and channel voice.",
  },
  {
    number: "02",
    title: "Documentary Research & Storytelling",
    description: "Research, narrative structure, and clear explanations that make complex subjects engaging.",
  },
  {
    number: "03",
    title: "Script Rewrites & Retention Editing",
    description: "Sharper openings, tighter pacing, stronger transitions, and more purposeful storytelling.",
  },
  {
    number: "04",
    title: "Footage-Led Scripts & Editor Notes",
    description: "Narration built around supplied footage, with scene suggestions and verified timestamps when footage is available.",
  },
] as const;

export const processSteps = [
  ["01", "Understand the Channel", "Review the audience, references, tone, and project brief."],
  ["02", "Find the Story", "Research the topic and develop the central angle and structure."],
  ["03", "Write the Script", "Build the hook, narration, transitions, and relevant editor cues."],
  ["04", "Refine Together", "Use feedback to improve clarity, pacing, and channel fit."],
] as const;