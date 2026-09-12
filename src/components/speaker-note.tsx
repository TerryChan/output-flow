export function SpeakerNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-chalk/40 bg-accent/40 px-4 py-3 text-sm leading-7 text-accent-foreground">
      <p className="mb-1 text-[11px] font-medium tracking-[0.16em] text-chalk uppercase">
        讲师备注 · 可以说什么
      </p>
      <div>{children}</div>
    </div>
  );
}
