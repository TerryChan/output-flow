import type { Metadata } from "next";
import { PageWidth } from "@/components/page-width";
import { PrintButton } from "@/components/print-button";
import { halfDay, packList, takeaways } from "@/lib/agenda";
import { cases } from "@/lib/cases";
import { ideaClose, myths, poaSteps } from "@/lib/idea";
import { pits, years } from "@/lib/journey";
import { mondayPlan, worries } from "@/lib/practice";
import { site } from "@/lib/site";
import { samplePlan, templateFields } from "@/lib/template-data";

export const metadata: Metadata = {
  title: "讲义",
};

export default function HandbookPage() {
  return (
    <PageWidth className="max-w-3xl">
      <div className="no-print mb-8 flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">打印本页，即是发给 30 位老师的纸质手册。</p>
        <PrintButton label="打印讲义" />
      </div>

      <header className="border-b border-foreground/20 pb-6">
        <p className="text-xs tracking-[0.2em]">{site.audience}</p>
        <h1 className="mt-2 text-4xl">
          {site.title}
          <span className="mt-2 block text-2xl">{site.subtitle}</span>
        </h1>
        <p className="mt-4 text-sm leading-7">
          半天讲座讲义。课例按人教版《Go for it!》撰写，请按本校教材替换校名、学情与单元。
        </p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl">带走三样</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7">
          {takeaways.map((item) => (
            <li key={item.title}>
              <span className="font-medium">{item.title}：</span>
              {item.text}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">议程</h2>
        <ol className="mt-3 space-y-2 text-sm leading-7">
          {halfDay.map((item) => (
            <li key={item.time}>
              <span className="font-medium">
                {item.time} {item.title}。
              </span>
              {item.detail}
            </li>
          ))}
        </ol>
      </section>

      <section className="print-break mt-8">
        <h2 className="text-2xl">理念要点</h2>
        <p className="mt-3 text-sm leading-7">{ideaClose}</p>
        <div className="mt-4 space-y-3">
          {poaSteps.map((step) => (
            <p key={step.name} className="text-sm leading-7">
              <span className="font-medium">
                {step.name}（{step.minutes}）：
              </span>
              {step.what}
            </p>
          ))}
        </div>
        <h3 className="mt-6 text-xl">不是什么</h3>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7">
          {myths.map((item) => (
            <li key={item.myth}>
              {item.myth} {item.truth}
            </li>
          ))}
        </ul>
      </section>

      <section className="print-break mt-8">
        <h2 className="text-2xl">五年历程（口述提纲）</h2>
        {years.map((item) => (
          <div key={item.year} className="mt-4">
            <h3 className="text-lg">
              {item.year} {item.title}
            </h3>
            <p className="mt-1 text-sm leading-7">{item.story.join("")}</p>
            <p className="mt-1 text-sm leading-7 font-medium">{item.lesson}</p>
          </div>
        ))}
        <h3 className="mt-6 text-xl">坑</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7">
          {pits.map((item) => (
            <li key={item.pit}>
              {item.pit}：{item.fix}
            </li>
          ))}
        </ul>
      </section>

      <section className="print-break mt-8">
        <h2 className="text-2xl">备课单八栏</h2>
        <ol className="mt-3 space-y-2 text-sm leading-7">
          {templateFields.map((field) => (
            <li key={field.id}>
              <span className="font-medium">{field.name}。</span>
              {field.why} 样例：{field.example}
            </li>
          ))}
        </ol>
        <h3 className="mt-6 text-xl">{samplePlan.title}</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7">
          {samplePlan.rows.map(([k, v]) => (
            <li key={k}>
              {k}：{v}
            </li>
          ))}
        </ul>
      </section>

      <section className="print-break mt-8">
        <h2 className="text-2xl">四则课例速记</h2>
        {cases.map((item) => (
          <div key={item.slug} className="mt-5">
            <h3 className="text-lg">
              {item.grade} · {item.title}
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">{item.textbook}</p>
            <p className="mt-1 text-sm leading-7">
              <span className="font-medium">成品：</span>
              {item.product}
            </p>
            <p className="text-sm leading-7">
              <span className="font-medium">驱动缺口：</span>
              {item.gap}
            </p>
          </div>
        ))}
      </section>

      <section className="print-break mt-8">
        <h2 className="text-2xl">回去两周</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7">
          {mondayPlan.map((item) => (
            <li key={item.step}>
              {item.step}：{item.text}
            </li>
          ))}
        </ol>
        <h3 className="mt-6 text-xl">问答</h3>
        {worries.map((item) => (
          <p key={item.q} className="mt-2 text-sm leading-7">
            <span className="font-medium">{item.q}</span> {item.a}
          </p>
        ))}
      </section>

      <section className="mt-8 border-t border-foreground/20 pt-6">
        <h2 className="text-2xl">物资</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
          {packList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-7">
          我准备改的单元：______________　成品名词：______________　计划上课日期：______
        </p>
      </section>
    </PageWidth>
  );
}
