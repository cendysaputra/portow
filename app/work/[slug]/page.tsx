import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeviceFrame, LineFigure, PhoneFrame } from "@/components/drawings";
import { IconPlus } from "@/components/icons";
import { StageTone } from "@/components/stage-tone";
import { getProject, projects } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const Frame = project.frame === "phone" ? PhoneFrame : DeviceFrame;

  return (
    <main className="case-page" style={{ background: project.stage, color: project.ink }}>
      <StageTone paper={project.stage} ink={project.ink} />
      <section className="case-hero">
        <div className="case-copy">
          <p className="eyebrow">{project.client}</p>
          <h1>{project.lead}</h1>
          <p>{project.summary}</p>
          <a className="project-link" href="#case-notes">
            Read the notes <IconPlus />
          </a>
        </div>
        <div className="case-poster">
          <p className="eyebrow">Image placeholder</p>
          <Frame title={project.title} />
          <p className="case-poster-label">{project.title}</p>
        </div>
        <LineFigure className="case-figure" />
        <div className="ground" />
        <nav className="case-steps" aria-label="Project sections">
          {project.sections.map((section, sectionIndex) => (
            <a key={section.heading} href={`#note-${sectionIndex}`}>
              <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
              {section.heading}
            </a>
          ))}
          <a href={`/work/${next.slug}`}>
            <span>{String(project.sections.length + 1).padStart(2, "0")}</span>
            Next
          </a>
        </nav>
      </section>
      <section id="case-notes" className="case-notes">
        <dl className="project-facts">
          {project.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="eyebrow">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className="project-narrative">
          {project.sections.map((section, sectionIndex) => (
            <section key={section.heading} id={`note-${sectionIndex}`}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
        <p className="project-next">
          <Link href={`/work/${next.slug}`}>Next — {next.title}</Link>
        </p>
        <p className="project-next">
          <Link href="/work">All projects</Link>
        </p>
      </section>
    </main>
  );
}
