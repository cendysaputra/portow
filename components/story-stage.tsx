"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { chapters } from "@/content/site";
import { ChapterCopy } from "@/components/chapter-copy";
import { DrawingHand, LineFigure } from "@/components/drawings";
import { IconArrowDown, IconClose, IconPlus } from "@/components/icons";

export function StoryStage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const frame = useRef(0);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);

  const chapter = chapters[index];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    const frameId = requestAnimationFrame(() => setReady(true));
    return () => {
      media.removeEventListener("change", apply);
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    const root = document.documentElement;
    root.style.setProperty("--stage", chapter.paper);
    root.style.setProperty("--ink", chapter.ink);
    root.style.background = chapter.paper;
    return () => {
      root.style.removeProperty("--stage");
      root.style.removeProperty("--ink");
      root.style.background = "";
    };
  }, [chapter.paper, chapter.ink, reduced]);

  const scrollToChapter = useCallback(
    (next: number, behavior: ScrollBehavior) => {
      const clamped = Math.min(chapters.length - 1, Math.max(0, next));
      if (reduced) {
        document.getElementById(chapters[clamped].id)?.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
      const track = trackRef.current;
      if (!track) return;
      const scrollable = Math.max(track.offsetHeight - window.innerHeight, 1);
      const top = track.offsetTop + ((clamped + 0.08) / chapters.length) * scrollable;
      window.scrollTo({ top, behavior });
    },
    [reduced],
  );

  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const scrollable = Math.max(track.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-track.getBoundingClientRect().top, 0), scrollable);
      const nextProgress = scrolled / scrollable;
      const nextIndex = Math.min(
        chapters.length - 1,
        Math.floor(nextProgress * chapters.length),
      );
      setProgress(nextProgress);
      setIndex(nextIndex);
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
  }, [reduced]);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#contact") scrollToChapter(chapters.length - 1, "auto");
      if (window.location.hash === "#begin") scrollToChapter(0, "auto");
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [scrollToChapter]);

  const openChapters = () => dialogRef.current?.showModal();
  const closeChapters = () => dialogRef.current?.close();
  const chooseChapter = (next: number) => {
    closeChapters();
    scrollToChapter(next, reduced ? "auto" : "smooth");
  };

  const showWorld = chapter.kind !== "signature";

  return (
    <>
      <div className={reduced ? "story-track is-reduced" : "story-track"} ref={trackRef}>
        <div
          className={ready || reduced ? "stage is-ready" : "stage"}
          style={{ background: chapter.paper, color: chapter.ink }}
        >
          <div className="copies">
            {chapters.map((item, itemIndex) => (
              <ChapterCopy key={item.id} chapter={item} active={reduced || itemIndex === index} />
            ))}
          </div>
          <div className={showWorld ? "world is-visible" : "world"} aria-hidden="true">
            <div className="ground" />
            <LineFigure className="world-figure" />
            <DrawingHand className="world-hand" />
          </div>
          <p className="sr-only" aria-live="polite">
            {`Chapter ${index + 1} of ${chapters.length}. ${chapter.label}. ${chapter.title}`}
          </p>
          <footer className="stage-footer">
            <button type="button" className="chapter-button" onClick={openChapters}>
              <span className="chapter-number">{String(index).padStart(2, "0")}</span>
              <span className="chapter-label">{chapter.label}</span>
              <span className="plus">
                <IconPlus />
              </span>
            </button>
            <button
              type="button"
              className="next-scene"
              onClick={() =>
                scrollToChapter(index === chapters.length - 1 ? 0 : index + 1, reduced ? "auto" : "smooth")
              }
            >
              {index === 0 ? "Scroll to begin" : index === chapters.length - 1 ? "Back to the start" : "Keep going"}
              <IconArrowDown />
            </button>
            <span className="reading-links">
              <Link href="/story" className="reading-link">
                Read story
              </Link>
              <Link href="/work" className="reading-link">
                Work
              </Link>
            </span>
          </footer>
          <div className="progress-track" aria-hidden="true">
            <div className="progress" style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>
      </div>

      <dialog ref={dialogRef} className="chapter-dialog" aria-labelledby="chapter-dialog-title">
        <div className="panel-top">
          <p className="wordmark" aria-hidden="true">
            Chapters
          </p>
          <button type="button" className="close-panel" onClick={closeChapters}>
            Close <IconClose />
          </button>
        </div>
        <div className="panel-body">
          <h2 id="chapter-dialog-title">Story</h2>
          <ol className="chapter-list">
            {chapters.map((item, itemIndex) => (
              <li key={item.id}>
                <button type="button" onClick={() => chooseChapter(itemIndex)}>
                  <span className="index">{String(itemIndex).padStart(2, "0")}</span>
                  <span className="name">{item.label}</span>
                  <span className="time">{item.eyebrow}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </dialog>
    </>
  );
}
