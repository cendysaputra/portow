import type { Metadata } from "next";
import Link from "next/link";
import { chapters, getProjectBySlugList, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Story",
  description: site.description,
};

export default function StoryPage() {
  return (
    <main className="reading-main">
      <p className="eyebrow">Story</p>
      <h1>
        {site.name}
        <span>.</span>
      </h1>
      <p>{site.hero.lead}</p>
      <p className="muted">{site.hero.note}</p>
      {chapters.filter((chapter) => chapter.kind !== "hero").map((chapter) => {
        const linked = chapter.projectSlugs
          ? getProjectBySlugList(chapter.projectSlugs)
          : [];
        return (
          <section key={chapter.id} id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
            <p className="eyebrow">{chapter.eyebrow}</p>
            <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
            {chapter.lead ? <p>{chapter.lead}</p> : null}
            {chapter.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {chapter.note ? <p>{chapter.note}</p> : null}
            {linked.length > 0 ? (
              <p className="story-projects">
                {linked.map((project) => (
                  <Link key={project.slug} href={`/work/${project.slug}`}>
                    {project.title}
                  </Link>
                ))}
              </p>
            ) : null}
            {chapter.kind === "end" ? (
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            ) : null}
          </section>
        );
      })}
      <footer>
        <Link href="/work">Selected work</Link>
        <Link href="/cv">CV</Link>
        <a href={`mailto:${site.email}`}>Email</a>
      </footer>
    </main>
  );
}
