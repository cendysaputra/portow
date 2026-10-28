"use client";

import { useEffect } from "react";

export function StageTone({ paper, ink }: { paper: string; ink: string }) {
  useEffect(() => {
    const root = document.documentElement;
    const previous = {
      stage: root.style.getPropertyValue("--stage"),
      ink: root.style.getPropertyValue("--ink"),
      background: root.style.background,
    };
    root.style.setProperty("--stage", paper);
    root.style.setProperty("--ink", ink);
    root.style.background = paper;
    return () => {
      root.style.setProperty("--stage", previous.stage);
      root.style.setProperty("--ink", previous.ink);
      root.style.background = previous.background;
    };
  }, [paper, ink]);

  return null;
}
