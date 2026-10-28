import { site } from "@/content/site";

export default function Home() {
  return (
    <main id="begin" className="hero-static">
      <p className="eyebrow">{site.hero.eyebrow}</p>
      <h1>
        {site.name}
        <span className="period">.</span>
      </h1>
      <p className="lead">{site.hero.lead}</p>
      <p className="note">{site.hero.note}</p>
    </main>
  );
}
