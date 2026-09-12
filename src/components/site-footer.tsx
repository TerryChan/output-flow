import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/80 bg-card/60 no-print">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.title} · {site.subtitle}
        </p>
        <p>给 30 位初中英语老师的半日讲座手册，课例按人教版《Go for it!》撰写，请按本校教材替换。</p>
      </div>
    </footer>
  );
}
