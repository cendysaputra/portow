import Link from "next/link";
import { DrawingHand } from "@/components/drawings";
import { getProjectBySlugList, site, type Chapter } from "@/content/site";

type ChapterCopyProps = {
  chapter: Chapter;
  active: boolean;
};

export function ChapterCopy({ chapter, active }: ChapterCopyProps) {
  const linked = chapter.projectSlugs ? getProjectBySlugList(chapter.projectSlugs) : [];

  if (chapter.kind === "signature") {
    return (
      <section
        id={chapter.id}
        className={`copy copy-signature${active ? " active" : ""}`}
        style={{ ["--chapter-paper" as string]: chapter.paper, ["--chapter-ink" as string]: chapter.ink }}
        aria-hidden={active ? undefined : true}
      >
        <h1 className="sr-only">{chapter.title}</h1>
        <div className="signature-block">
          <p className="signature-name" aria-hidden="true">
            {chapter.title}
          </p>
          <DrawingHand className="signature-hand" />
        </div>
        <div className="signature-caption">
          {chapter.lead ? <p>{chapter.lead}</p> : null}
          {chapter.note ? <p className="note">{chapter.note}</p> : null}
        </div>
      </section>
    );
  }

  return (
    <section
      id={chapter.id}
      className={`copy copy-${chapter.kind}${active ? " active" : ""}`}
      style={{ ["--chapter-paper" as string]: chapter.paper, ["--chapter-ink" as string]: chapter.ink }}
      aria-hidden={active ? undefined : true}
    >
      <p className="eyebrow">{chapter.eyebrow}</p>
      <h2>{chapter.title}</h2>
      <div className="narration">
        {chapter.lead ? <p>{chapter.lead}</p> : null}
        {chapter.paragraphs?.map((paragraph, index) => (
          <p key={`${chapter.id}-p-${index}`}>{paragraph}</p>
        ))}
        {chapter.note ? <p>{chapter.note}</p> : null}
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
