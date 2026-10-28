"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projectCountLabel, site } from "@/content/site";
import { IconArrowUpRight } from "@/components/icons";

const count = projectCountLabel();

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link
        href="/#begin"
        className="wordmark"
        aria-label={`${site.initials}. — ${site.name}, beginning`}
      >
        {site.initials}
        <span>.</span>
      </Link>
      <nav aria-label="Main">
        <Link href="/#begin" aria-current={pathname === "/" ? "page" : undefined}>
          Story
        </Link>
        <Link href="/work" aria-current={pathname.startsWith("/work") ? "page" : undefined}>
          Work <sup>{count}</sup>
        </Link>
        <Link href="/cv" aria-current={pathname === "/cv" ? "page" : undefined}>
          CV <IconArrowUpRight />
        </Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
