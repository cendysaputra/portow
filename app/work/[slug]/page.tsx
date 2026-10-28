import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cover } from "@/components/cover";
import { PageFooter } from "@/components/page-footer";
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

  return (
    <main className="static-page project-page">
      <Link href="/work" className="back-button">
        All work
      </Link>
      <header className="project-header">
        <p className="eyebrow">{project.client}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.lead}</p>
        <dl className="project-facts">
          {project.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="eyebrow">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </header>
      <figure className="project-figure">
        <Cover motif={project.motif} title={project.title} />
        <figcaption>Image placeholder. Swap this cover for a project still.</figcaption>
      </figure>
      <div className="project-narrative">
        {project.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
      <p className="project-next">
        <Link href={`/work/${next.slug}`}>Next — {next.title}</Link>
      </p>
      <PageFooter />
    </main>
  );
}
