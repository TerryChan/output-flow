import type { Metadata } from "next";
import { Callout } from "@/components/callout";
import { PageHero } from "@/components/page-hero";
import { PageWidth } from "@/components/page-width";
import { SpeakerNote } from "@/components/speaker-note";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  classroomTypes,
  contrasts,
  ideaClose,
  myths,
  outputLevels,
  poaSteps,
  swainPoints,
} from "@/lib/idea";

export const metadata: Metadata = {
  title: "理念",
};

export default function IdeaPage() {
  return (
    <PageWidth>
      <PageHero
        kicker="第一段"
        minutes="30 分钟"
        title="从听懂到说出：输出式到底改的是什么"
        lead="不是多加几个口语活动。是备课顺序反过来：先问学生走出教室时手里有什么，再问教材哪一段能帮他做成这个东西。"
      />

      <div className="space-y-12">
        <SpeakerNote>
          先回放开场纸条。指着那些“能够谈论……”说：这是目标，不是成品。成品能拍照、能互评、能带回家改。
        </SpeakerNote>

        <section>
          <h2 className="text-2xl">教室里最常见的三种课</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            请老师对号入座，不要审判。三种课都有贡献，只是都可能停在输入或热闹，到不了成品。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {classroomTypes.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <CardTitle className="font-serif">{item.name}</CardTitle>
                  <CardDescription>{item.look}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-seal">
                  {item.risk}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">备课的第一问，换一下</h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid grid-cols-2 bg-muted px-4 py-2 text-xs tracking-wide text-muted-foreground">
              <span>输入式习惯问</span>
              <span>输出式改问</span>
            </div>
            {contrasts.map((row) => (
              <div
                key={row.input}
                className="grid grid-cols-1 gap-1 border-t border-border px-4 py-3 text-sm leading-7 sm:grid-cols-2 sm:gap-6"
              >
                <p className="text-muted-foreground">{row.input}</p>
                <p className="font-medium">{row.output}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">理论只留两块，能用就够</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Swain 的输出假设解释“为什么必须让学生说/写”。文秋芳的产出导向法给我们初中能落地的流程。我们不做大学课堂的生搬，只转译成三步。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {swainPoints.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="leading-7">{item.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">校本三步：驱动 — 促成 — 评价</h2>
          <div className="mt-5 space-y-4">
            {poaSteps.map((step) => (
              <Card key={step.name}>
                <CardHeader>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <CardTitle className="font-serif text-xl">{step.name}</CardTitle>
                    <span className="text-xs text-seal">{step.minutes}</span>
                  </div>
                  <CardDescription className="leading-7">{step.what}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs tracking-wide text-chalk">要做</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-7">
                      {step.do.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-seal">别做</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-7">
                      {step.dont.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">输出有三档，常态课先做小的</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {outputLevels.map((item) => (
              <Card key={item.level}>
                <CardHeader>
                  <CardTitle>{item.level}</CardTitle>
                  <CardDescription>{item.time}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm leading-7">
                  <p>{item.use}</p>
                  <p className="text-muted-foreground">{item.example}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">先把五个误会拿掉</h2>
          <div className="mt-5 space-y-3">
            {myths.map((item) => (
              <div key={item.myth} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="text-sm font-medium">“{item.myth}”</p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.truth}</p>
              </div>
            ))}
          </div>
        </section>

        <Callout tone="chalk" title="这一段收束，写在白板正中">
          {ideaClose}
        </Callout>
      </div>
    </PageWidth>
  );
}
