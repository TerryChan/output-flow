import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md no-print">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="min-w-0">
          <p className="font-serif text-base leading-none text-ink">
            {site.title}
          </p>
          <p className="mt-1 truncate text-[11px] tracking-wide text-muted-foreground">
            {site.subtitle}
          </p>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/handbook"
          className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground md:hidden"
        >
          讲义
        </Link>
      </div>
      <div className="flex gap-1 overflow-x-auto border-t border-border/60 px-3 py-1.5 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
