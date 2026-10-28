import { site } from "@/content/site";

export function PageFooter() {
  return (
    <footer className="page-footer">
      <span>{site.name}</span>
      <a href={`mailto:${site.email}`}>{site.email}</a>
    </footer>
  );
}
