import Link from "next/link";
import type { Project } from "@/content/site";
import { Cover } from "@/components/cover";
import { IconArrowUpRight } from "@/components/icons";

export function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="work-grid">
      {projects.map((project) => (
        <Link key={project.slug} href={`/work/${project.slug}`} className="work-card">
          <div className="image-wrap">
            <Cover motif={project.motif} title={project.title} />
          </div>
          <div className="card-title">
            <span>{project.title}</span>
            <IconArrowUpRight />
          </div>
          <p className="card-meta">
            {project.role}
            <span aria-hidden="true"> · </span>
            {project.year}
          </p>
          <p className="card-copy">{project.summary}</p>
        </Link>
      ))}
    </div>
  );
}
