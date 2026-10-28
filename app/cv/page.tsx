import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "CV",
  description: `${site.name}, ${site.role}. ${site.location}.`,
};

export default function CvPage() {
  return (
    <main className="cv-page">
      <p className="eyebrow">Curriculum vitae</p>
      <h1>{site.name}</h1>
      <p className="role">{site.role}</p>
      <p className="intro">{site.about.body}</p>
      <div className="cv-actions">
        {site.links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <p className="cv-contact">
        {site.location}
        <br />
        {site.availability}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>Experience</h2>
      {site.experience.map((job, jobIndex) => (
        <article key={`${job.org}-${job.dates}-${jobIndex}`}>
          <h3>{job.role}</h3>
          <p className="cv-dates">
            {job.org}
            <span aria-hidden="true"> · </span>
            {job.location}
            <span aria-hidden="true"> · </span>
            {job.dates}
          </p>
          <p>{job.summary}</p>
          <ul>
            {job.points.map((point, pointIndex) => (
              <li key={`${jobIndex}-${pointIndex}`}>{point}</li>
            ))}
          </ul>
        </article>
      ))}

      <h2>Education</h2>
      {site.education.map((item) => (
        <article key={item.school}>
          <h3>{item.program}</h3>
          <p className="cv-dates">
            {item.school}
            <span aria-hidden="true"> · </span>
            {item.dates}
          </p>
        </article>
      ))}

      <h2>Focus</h2>
      <ul className="cv-focus">
        {site.focus.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
