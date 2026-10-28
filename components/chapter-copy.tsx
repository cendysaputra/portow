import Link from "next/link";
import {
  getProjectBySlugList,
  site,
  type Chapter,
} from "@/content/site";

type ChapterCopyProps = {
  chapter: Chapter;
  active: boolean;
};

export function ChapterCopy({ chapter, active }: ChapterCopyProps) {
  const linked = chapter.projectSlugs
    ? getProjectBySlugList(chapter.projectSlugs)
    : [];

  return (
    <section
      id={chapter.id}
      className={`copy copy-${chapter.kind}${active ? " active" : ""}`}
      aria-hidden={active ? undefined : true}
    >
      <p className="eyebrow">{chapter.eyebrow}</p>
      {chapter.kind === "hero" ? (
        <h1>
          {chapter.title}
          <span className="period">.</span>
        </h1>
      ) : (
        <h2>
          {chapter.title}
        </h2>
      )}
      <div className="narration">
        {chapter.lead ? <p>{chapter.lead}</p> : null}
        {chapter.paragraphs?.map((paragraph, index) =>
          index === 0 ? (
            <p key={`${chapter.id}-p-${index}`}>{paragraph}</p>
          ) : (
            <p key={`${chapter.id}-p-${index}`} className="note">
              {paragraph}
            </p>
          ),
        )}
        {chapter.note ? <p className="note">{chapter.note}</p> : null}
        {chapter.kind === "end" ? (
          <a className="contact-large" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        ) : null}
      </div>
      {linked.length > 0 ? (
        <div className="inline-projects">
          {linked.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          ))}
        </div>
      ) : null}
      {chapter.kind === "end" ? (
        <div className="contact-links">
          {site.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </section>
  );
}
