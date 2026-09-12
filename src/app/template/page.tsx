import type { Metadata } from "next";
import { Callout } from "@/components/callout";
import { PageHero } from "@/components/page-hero";
import { PageWidth } from "@/components/page-width";
import { SpeakerNote } from "@/components/speaker-note";
import { TemplateForm } from "@/components/template-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  rubricBank,
  samplePlan,
  templateFields,
  templateWhy,
  writingTips,
} from "@/lib/template-data";

export const metadata: Metadata = {
  title: "备课模板",
};

export default function TemplatePage() {
  return (
    <PageWidth>
      <PageHero
        kicker="第三段 · 主办方点名"
        minutes="40 分钟"
        title="输出式备课单：一页纸把顺序拧过来"
        lead="模板不是统一教案格式，是统一提问。评说课、听常态课，我们都先看这张单子：成品在不在，促成有没有为它服务。"
      />

      <div className="space-y-12">
        <SpeakerNote>
          休息回来先发空白页。逐栏讲时，打开本页的填好样例。讲到“成品”栏，请两位老师现场改自己开场写的那张纸条。
        </SpeakerNote>

        <section className="space-y-3 text-sm leading-7">
          {templateWhy.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>

        <section>
          <h2 className="text-2xl">八栏怎么写</h2>
          <div className="mt-5 space-y-4">
            {templateFields.map((field) => (
              <article key={field.id} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-serif text-xl">{field.name}</h3>
                <p className="mt-2 text-sm leading-7 text-chalk">{field.why}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
                  {field.how.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="mt-3 rounded-lg bg-muted px-3 py-2 text-sm leading-7">
                  <span className="text-xs tracking-wide text-muted-foreground">样例 · </span>
                  {field.example}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">三种最容易写空的句子</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {writingTips.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm leading-7">
                  <p className="text-muted-foreground">空：{item.bad}</p>
                  <p>实：{item.good}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl">{samplePlan.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{samplePlan.meta}</p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
            {samplePlan.rows.map(([k, v]) => (
              <div
                key={k}
                className="grid gap-1 border-t border-border px-4 py-3 first:border-t-0 sm:grid-cols-[120px_1fr]"
              >
                <p className="text-xs tracking-wide text-seal">{k}</p>
                <p className="text-sm leading-7">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">量表不要多，要能看见</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {rubricBank.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  <CardDescription>给学生用，不给评委用</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal space-y-1 pl-4 text-sm leading-7">
                    {item.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Callout tone="seal" title="现场练习（6 分钟）">
          请老师把自己开场写的成品，按“形态 + 长度 + 必用语言 + 分层”重写一遍。同桌交换，只问一句：这东西下课能收上来吗？
        </Callout>

        <section>
          <h2 className="text-2xl">空白备课单</h2>
          <p className="mt-2 mb-5 text-sm text-muted-foreground">
            投影填写，或打印给 30 位老师。工作坊也用这一张。
          </p>
          <TemplateForm />
        </section>
      </div>
    </PageWidth>
  );
}
