/**
 * Portfolio content for Cendy Saputra.
 *
 * Edit this file to change the name treatment, role, bio, chapters,
 * projects, experience, and contact details. Strings that say
 * "placeholder" are sample copy meant to be replaced.
 */

export type Motif = "frames" | "orbit" | "dots" | "band" | "bars" | "bracket";

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  client: string;
  summary: string;
  lead: string;
  motif: Motif;
  facts: { label: string; value: string }[];
  sections: { heading: string; body: string }[];
};

export type Chapter = {
  id: string;
  label: string;
  kind: "hero" | "split" | "end";
  eyebrow: string;
  title: string;
  lead?: string;
  note?: string;
  paragraphs?: string[];
  projectSlugs?: string[];
};

export const site = {
  name: "Cendy Saputra",
  initials: "CS",
  role: "Role placeholder",
  location: "Location placeholder",
  email: "hello@example.com",
  availability: "Availability placeholder",
  description:
    "Portfolio placeholder for Cendy Saputra. Replace this description in content/site.ts.",
  hero: {
    eyebrow: "Portfolio",
    lead: "Role placeholder.",
    note: "Bio placeholder. A short line about the work goes here.",
  },
  about: {
    title: "About title placeholder.",
    body: "About body placeholder. Replace this with a short introduction to the practice, the kind of problems you take on, and how you like to work.",
    note: "About note placeholder. A second, quieter sentence can live here.",
  },
  workIntro: {
    title: "Selected work placeholder.",
    body: "Work intro placeholder. One sentence on how to read the projects that follow.",
    pageTitle: "Work",
    pageNote:
      "Work page note placeholder. A line about the range of the selected projects.",
  },
  contact: {
    title: "Let’s talk.",
    lead: "Contact lead placeholder.",
    note: "Contact note placeholder. Say how a conversation usually starts.",
  },
  links: [
    { label: "Email", href: "mailto:hello@example.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/cendysaputra" },
  ],
  focus: [
    "Focus placeholder 01",
    "Focus placeholder 02",
    "Focus placeholder 03",
    "Focus placeholder 04",
  ],
  experience: [
    {
      org: "Company placeholder",
      role: "Role placeholder",
      dates: "Year — Year",
      location: "Location placeholder",
      summary: "Experience summary placeholder. What this role was responsible for.",
      points: [
        "Responsibility placeholder.",
        "Responsibility placeholder.",
        "Responsibility placeholder.",
      ],
    },
    {
      org: "Company placeholder",
      role: "Role placeholder",
      dates: "Year — Year",
      location: "Location placeholder",
      summary: "Earlier role summary placeholder.",
      points: [
        "Responsibility placeholder.",
        "Responsibility placeholder.",
      ],
    },
  ],
  education: [
    {
      school: "School placeholder",
      program: "Program placeholder",
      dates: "Year — Year",
    },
  ],
} as const;

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    year: "Year",
    role: "Role placeholder",
    client: "Client placeholder",
    summary:
      "Project summary placeholder. A sentence on the problem and what changed.",
    lead: "Project lead placeholder. A slightly longer opening for the case page.",
    motif: "frames",
    facts: [
      { label: "Role", value: "Role placeholder" },
      { label: "Year", value: "Year placeholder" },
      { label: "Focus", value: "Focus placeholder" },
    ],
    sections: [
      {
        heading: "Context placeholder",
        body: "Context body placeholder. Describe the starting point, the constraint, and who the work was for.",
      },
      {
        heading: "Outcome placeholder",
        body: "Outcome body placeholder. Describe what shipped and what it made easier.",
      },
    ],
  },
  {
    slug: "project-two",
    title: "Project Two",
    year: "Year",
    role: "Role placeholder",
    client: "Client placeholder",
    summary:
      "Project summary placeholder. A sentence on the interface and the system behind it.",
    lead: "Project lead placeholder. Replace with the one-line story of this project.",
    motif: "orbit",
    facts: [
      { label: "Role", value: "Role placeholder" },
      { label: "Year", value: "Year placeholder" },
      { label: "Focus", value: "Focus placeholder" },
    ],
    sections: [
      {
        heading: "Context placeholder",
        body: "Context body placeholder. What was unclear before the work began.",
      },
      {
        heading: "Outcome placeholder",
        body: "Outcome body placeholder. What the final shape of the product became.",
      },
    ],
  },
  {
    slug: "project-three",
    title: "Project Three",
    year: "Year",
    role: "Role placeholder",
    client: "Client placeholder",
    summary:
      "Project summary placeholder. A sentence on the product, the audience, and the result.",
    lead: "Project lead placeholder. Keep it concrete and short.",
    motif: "dots",
    facts: [
      { label: "Role", value: "Role placeholder" },
      { label: "Year", value: "Year placeholder" },
      { label: "Focus", value: "Focus placeholder" },
    ],
    sections: [
      {
        heading: "Context placeholder",
        body: "Context body placeholder. The brief, in plain language.",
      },
      {
        heading: "Outcome placeholder",
        body: "Outcome body placeholder. The decision the work made visible.",
      },
    ],
  },
  {
    slug: "project-four",
    title: "Project Four",
    year: "Year",
    role: "Role placeholder",
    client: "Client placeholder",
    summary:
      "Project summary placeholder. A sentence on structure, navigation, and tone.",
    lead: "Project lead placeholder. What this piece of work had to hold together.",
    motif: "band",
    facts: [
      { label: "Role", value: "Role placeholder" },
      { label: "Year", value: "Year placeholder" },
      { label: "Focus", value: "Focus placeholder" },
    ],
    sections: [
      {
        heading: "Context placeholder",
        body: "Context body placeholder. Where the existing experience was getting in the way.",
      },
      {
        heading: "Outcome placeholder",
        body: "Outcome body placeholder. The simpler path that replaced it.",
      },
    ],
  },
  {
    slug: "project-five",
    title: "Project Five",
    year: "Year",
    role: "Role placeholder",
    client: "Client placeholder",
    summary:
      "Project summary placeholder. A sentence on a tool, a flow, or a system.",
    lead: "Project lead placeholder. The job this interface was hired to do.",
    motif: "bars",
    facts: [
      { label: "Role", value: "Role placeholder" },
      { label: "Year", value: "Year placeholder" },
      { label: "Focus", value: "Focus placeholder" },
    ],
    sections: [
      {
        heading: "Context placeholder",
        body: "Context body placeholder. Who used it, and how often.",
      },
      {
        heading: "Outcome placeholder",
        body: "Outcome body placeholder. What became faster or clearer.",
      },
    ],
  },
  {
    slug: "project-six",
    title: "Project Six",
    year: "Year",
    role: "Role placeholder",
    client: "Client placeholder",
    summary:
      "Project summary placeholder. A sentence on a launch, a redesign, or a prototype.",
    lead: "Project lead placeholder. The last thing a visitor should remember.",
    motif: "bracket",
    facts: [
      { label: "Role", value: "Role placeholder" },
      { label: "Year", value: "Year placeholder" },
      { label: "Focus", value: "Focus placeholder" },
    ],
    sections: [
      {
        heading: "Context placeholder",
        body: "Context body placeholder. The constraint that shaped the work.",
      },
      {
        heading: "Outcome placeholder",
        body: "Outcome body placeholder. What you would keep if you did it again.",
      },
    ],
  },
];

export const chapters: Chapter[] = [
  {
    id: "begin",
    label: "The beginning",
    kind: "hero",
    eyebrow: site.hero.eyebrow,
    title: site.name,
    lead: site.hero.lead,
    note: site.hero.note,
  },
  {
    id: "practice",
    label: "The practice",
    kind: "split",
    eyebrow: "01  —  About",
    title: site.about.title,
    paragraphs: [site.about.body, site.about.note],
  },
  {
    id: "work",
    label: "Selected work",
    kind: "split",
    eyebrow: "02  —  Work",
    title: site.workIntro.title,
    paragraphs: [site.workIntro.body],
    projectSlugs: ["project-one", "project-two", "project-three"],
  },
  {
    id: "contact",
    label: "Contact",
    kind: "end",
    eyebrow: "03  —  Contact",
    title: site.contact.title,
    lead: site.contact.lead,
    note: site.contact.note,
  },
];

export function projectCountLabel() {
  return String(projects.length).padStart(2, "0");
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectBySlugList(slugs: string[]) {
  return slugs
    .map((slug) => getProject(slug))
    .filter((project): project is Project => Boolean(project));
}
