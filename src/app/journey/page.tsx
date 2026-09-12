import type { Metadata } from "next";
import { Callout } from "@/components/callout";
import { PageHero } from "@/components/page-hero";
import { PageWidth } from "@/components/page-width";
import { SpeakerNote } from "@/components/speaker-note";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  journeyAdvice,
  pits,
  shifts,
  voices,
  whyStart,
  years,
} from "@/lib/journey";

export const metadata: Metadata = {
  title: "历程",
};

export default function JourneyPage() {
  return (
    <PageWidth>
      <PageHero
        kicker="第二段 · 主办方点名"
        minutes="35 分钟"
        title="我们接受输出式并走下来的五年"
        lead="不要把这段讲成先进事迹。老师愿意实践，是因为看见别人也怕过、也失败过，并且失败之后有一张单子可以抓。"
      />

      <div className="space-y-12">
        <SpeakerNote>
          用第一人称。点两件具体事：听评课找不到完整 6 句；那堂“介绍中国节日”的失败公开课。比任何数据都管用。若本校有真实学生作品，在这里亮一张五年前和现在的对照。
        </SpeakerNote>

        <section>
          <h2 className="text-2xl">{whyStart.title}</h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-foreground/90">
            {whyStart.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">五年，其实是五种心情</h2>
          <div className="mt-6 space-y-6">
            {years.map((item, index) => (
              <article
                key={item.year}
                className="relative rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-serif text-2xl text-seal">{item.year}</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs">
                    {item.mood}
                  </span>
                  <span className="text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-2 font-serif text-xl">{item.title}</h3>
                <div className="mt-3 space-y-2 text-sm leading-7">
                  {item.story.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <p className="mt-4 border-t border-dashed border-border pt-3 text-sm text-chalk">
                  {item.lesson}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">老师后来怎么说</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {voices.map((item) => (
              <Card key={item.who}>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">{item.who}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7">“{item.say}”</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">认知上，我们搬过这五块</h2>
          <ol className="mt-4 grid gap-2 md:grid-cols-2">
            {shifts.map((line, index) => (
              <li
                key={line}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm leading-7"
              >
                <span className="mr-2 font-serif text-seal">{index + 1}</span>
                {line}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl">踩过的坑，请各位少走</h2>
          <div className="mt-5 space-y-3">
            {pits.map((item) => (
              <div key={item.pit} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="font-medium">{item.pit}</p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.look}</p>
                <p className="mt-1 text-sm leading-7">{item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          {journeyAdvice.map((item) => (
            <Callout key={item.title} tone="paper" title={item.title}>
              {item.text}
            </Callout>
          ))}
        </div>
      </div>
    </PageWidth>
  );
}
