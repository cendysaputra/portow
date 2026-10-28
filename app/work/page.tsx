import type { Metadata } from "next";
import { projects, site } from "@/content/site";
import { PageFooter } from "@/components/page-footer";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description: site.workIntro.pageNote,
};

export default function WorkPage() {
  return (
    <main className="static-page">
      <header className="page-heading">
        <h1>{site.workIntro.pageTitle}</h1>
        <p>{site.workIntro.pageNote}</p>
      </header>
      <WorkGrid projects={projects} />
      <PageFooter />
    </main>
  );
}
