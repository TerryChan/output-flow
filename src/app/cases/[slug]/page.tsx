import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Callout } from "@/components/callout";
import { PageWidth } from "@/components/page-width";
import { Badge } from "@/components/ui/badge";
import { cases, getCase } from "@/lib/cases";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  return { title: item ? item.title : "课例" };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const index = cases.findIndex((c) => c.slug === item.slug);
  const prev = cases[index - 1];
  const next = cases[index + 1];

  return (
    <PageWidth>
      <Link href="/cases" className="text-sm text-muted-foreground hover:text-foreground">
        ← 全部课例
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="secondary">{item.grade}</Badge>
        <Badge variant="outline">{item.level}</Badge>
        <span className="text-xs text-muted-foreground">{item.minutes}</span>
      </div>
      <h1 className="mt-4 text-3xl leading-tight sm:text-4xl">{item.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{item.textbook}</p>

      <div className="mt-8 space-y-10">
        <section>
          <h2 className="text-xl">主成品</h2>
          <p className="mt-2 text-sm leading-7">{item.product}</p>
        </section>
        <section>
          <h2 className="text-xl">为什么这样定成品</h2>
          <p className="mt-2 text-sm leading-7">{item.why}</p>
        </section>
        <section className="grid gap-4 md:grid-cols-2">
          <Callout title="学情（输出视角）">{item.students}</Callout>
          <Callout tone="seal" title="驱动与缺口">
            <p>{item.drive}</p>
            <p className="mt-2">缺口：{item.gap}</p>
          </Callout>
        </section>
        <section>
          <h2 className="text-xl">三项促成</h2>
          <div className="mt-4 grid gap-3">
            {item.enable.map((row) => (
              <div key={row.kind} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="text-xs tracking-wide text-seal">{row.kind}促成</p>
                <p className="mt-1 text-sm leading-7">{row.activity}</p>
                <p className="mt-1 text-sm text-chalk">进入成品：{row.into}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl">分钟流程</h2>
          <div className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {item.flow.map((row) => (
              <div key={row.t} className="grid gap-2 px-4 py-3 sm:grid-cols-[100px_1fr]">
                <p className="font-mono text-xs text-seal">{row.t}</p>
                <div className="text-sm leading-7">
                  <p>{row.what}</p>
                  <p className="text-muted-foreground">教师：{row.teacher}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-4">
            <h2 className="text-xl">句架</h2>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7">
              {item.frame.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4">
            <h2 className="text-xl">量表</h2>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7">
              {item.rubric.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </div>
        </section>
        <section>
          <h2 className="text-xl">课堂上会翻车的地方</h2>
          <div className="mt-3 space-y-2">
            {item.troubles.map((row) => (
              <div key={row.happen} className="rounded-xl bg-muted px-4 py-3 text-sm leading-7">
                <p className="font-medium">{row.happen}</p>
                <p className="text-muted-foreground">{row.do}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl">板书只留三行</h2>
          <div className="mt-3 rounded-2xl bg-chalk px-5 py-6 text-paper">
            {item.board.map((line) => (
              <p key={line} className="font-serif text-lg leading-8">
                {line}
              </p>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl">可以搬走的</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
            {item.migrate.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
        <nav className="flex justify-between gap-4 border-t border-border pt-6 text-sm no-print">
          {prev ? (
            <Link href={`/cases/${prev.slug}`} className="hover:text-primary">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/cases/${next.slug}`} className="hover:text-primary">
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </PageWidth>
  );
}
