import { cn } from "@/lib/utils";

const styles = {
  seal: "border-primary/25 bg-primary/6",
  chalk: "border-chalk/25 bg-accent/70",
  paper: "border-border bg-card",
  warn: "border-amber-700/25 bg-amber-50",
};

export function Callout({
  title,
  children,
  tone = "paper",
}: {
  title?: string;
  children: React.ReactNode;
  tone?: keyof typeof styles;
}) {
  return (
    <aside
      className={cn(
        "rounded-xl border px-4 py-4 text-sm leading-7",
        styles[tone],
      )}
    >
      {title ? (
        <p className="mb-1 font-medium text-foreground">{title}</p>
      ) : null}
      <div className="text-foreground/85">{children}</div>
    </aside>
  );
}
