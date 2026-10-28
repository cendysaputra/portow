import type { Metadata } from "next";
import { WorkWalk } from "@/components/work-walk";
import { projects, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: site.workIntro.pageNote,
};

export default function WorkPage() {
  return (
    <main id="top">
      <WorkWalk projects={projects} />
    </main>
  );
}
