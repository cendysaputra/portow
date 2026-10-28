"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { DeviceFrame, LineFigure, PhoneFrame } from "@/components/drawings";
import { IconArrowRight, IconPlus } from "@/components/icons";
import { projectCountLabel, type Project } from "@/content/site";

export function WorkWalk({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const project = projects[index];
  const count = projectCountLabel();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--stage", project.stage);
    root.style.setProperty("--ink", project.ink);
    root.style.background = project.stage;
    return () => {
      root.style.removeProperty("--stage");
      root.style.removeProperty("--ink");
      root.style.background = "";
    };
  }, [project.stage, project.ink]);

  const scrollToProject = useCallback(
    (next: number, behavior: ScrollBehavior) => {
      const clamped = Math.min(projects.length - 1, Math.max(0, next));
      if (reduced) {
        document.getElementById(`stop-${projects[clamped].slug}`)?.scrollIntoView({ behavior: "auto" });
        setIndex(clamped);
        return;
      }
      const track = trackRef.current;
      if (!track) return;
      const scrollable = Math.max(track.offsetHeight - window.innerHeight, 1);
      const top = track.offsetTop + ((clamped + 0.12) / projects.length) * scrollable;
      window.scrollTo({ top, behavior });
    },
    [projects, reduced],
  );

  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const scrollable = Math.max(track.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-track.getBoundingClientRect().top, 0), scrollable);
      const next = Math.min(projects.length - 1, Math.floor((scrolled / scrollable) * projects.length));
      setIndex(next);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [projects.length, reduced]);

  const scene = project.frame === "phone" ? (
    <PhoneFrame className="walk-device-art" title={project.title} />
  ) : (
    <DeviceFrame className="walk-device-art" title={project.title} />
  );

  return (
    <>
      <div className={reduced ? "walk-track is-reduced" : "walk-track"} ref={trackRef}>
        <section className="walk-stage" style={{ background: project.stage, color: project.ink }} aria-label="Selected work">
          <div className="walk-spacer" />
          <div className="walk-copy" key={project.slug}>
            <div>
              <p className="walk-kicker">
                <span>
                  Selected work <span className="walk-count">{String(index + 1).padStart(2, "0")} / {count}</span>
                </span>
                <a href="#work-reading">
                  <span className="wide-label">All projects</span>
                  <span className="narrow-label">Index</span>
                </a>
              </p>
              <h1>
                {project.title}
                <span>.</span>
              </h1>
            </div>
            <div className="walk-description">
              <p className="walk-discipline">{project.discipline}</p>
              <p>{project.summary}</p>
              <Link className="project-link" href={`/work/${project.slug}`}>
                Explore the project <IconArrowRight />
              </Link>
            </div>
          </div>
          <div className="walk-scene">
            <LineFigure className="walk-figure" />
            <div className="walk-device">
              {scene}
              <Link className="object-cue" href={`/work/${project.slug}`} aria-label={`Explore ${project.title}`}>
                <IconPlus />
              </Link>
            </div>
            <div className="ground" />
          </div>
          <div className="walk-controls">
            <div className="walk-directions">
              <button type="button" aria-label="Previous project" onClick={() => scrollToProject(index - 1, "smooth")} disabled={index === 0}>
                <IconArrowRight className="line-icon flip" />
              </button>
              <p>Scroll to follow the line. Select an object to explore.</p>
              <button type="button" aria-label="Next project" onClick={() => scrollToProject(index + 1, "smooth")} disabled={index === projects.length - 1}>
                <IconArrowRight />
              </button>
            </div>
            <nav className="project-index" aria-label="Choose a project">
              {projects.map((item, itemIndex) => (
                <button
                  key={item.slug}
                  type="button"
                  aria-current={itemIndex === index ? "true" : undefined}
                  onClick={() => scrollToProject(itemIndex, "smooth")}
                >
                  <span className="stop-number">{String(itemIndex + 1).padStart(2, "0")}</span>
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </section>
      </div>

      <section id="work-reading" className="work-reading" style={{ background: project.stage, color: project.ink }}>
        <header>
          <p className="eyebrow">The complete index</p>
          <h2>Choose your next stop.</h2>
          <a href="#top">Back to the walk</a>
        </header>
        <div className="reading-projects">
          {projects.map((item, itemIndex) => (
            <article key={item.slug} id={`stop-${item.slug}`}>
              <Link className="reading-project" href={`/work/${item.slug}`}>
                <span className="reading-number">{String(itemIndex + 1).padStart(2, "0")}</span>
                <span className="reading-drawing" aria-hidden="true">
                  {item.frame === "phone" ? <PhoneFrame title={item.title} /> : <DeviceFrame title={item.title} />}
                </span>
                <h2>{item.title}</h2>
                <span className="reading-category">{item.discipline}</span>
                <IconArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
