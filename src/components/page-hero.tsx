import { Badge } from "@/components/ui/badge";

export function PageHero({
  kicker,
  title,
  lead,
  minutes,
}: {
  kicker: string;
  title: string;
  lead: string;
  minutes?: string;
}) {
  return (
    <div className="mb-10 border-b border-dashed border-border pb-8">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{kicker}</Badge>
        {minutes ? (
          <span className="text-xs tracking-wide text-muted-foreground">
            建议时长 {minutes}
          </span>
        ) : null}
      </div>
      <h1 className="mt-4 max-w-3xl text-3xl leading-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
        {lead}
      </p>
    </div>
  );
}
