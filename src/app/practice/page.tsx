import type { Metadata } from "next";
import { Callout } from "@/components/callout";
import { PageHero } from "@/components/page-hero";
import { PageWidth } from "@/components/page-width";
import { SpeakerNote } from "@/components/speaker-note";
import { Badge } from "@/components/ui/badge";
import {
  closing,
  donts,
  groupAdvice,
  mondayPlan,
  workshopCards,
  workshopSteps,
  worries,
} from "@/lib/practice";

export const metadata: Metadata = {
  title: "落地",
};

export default function PracticePage() {
  return (
    <PageWidth>
      <PageHero
        kicker="第五段"
        minutes="15 分钟收束，全天则加工作坊"
        title="愿意实践，从最小的一节课开始"
        lead="讲座的输出成品不是“听懂了”，而是每人写下：我准备改哪一课、成品是什么名词。没有这个，等于还停在输入。"
      />

      <div className="space-y-12">
        <SpeakerNote>
          问答不要躲考试。九年级老师会问，备课组长会问。就用烦恼信箱那课回答：应试书面表达可以被当成段输出。
        </SpeakerNote>

        <section>
          <h2 className="text-2xl">未来两周，只做这六步</h2>
          <ol className="mt-5 space-y-3">
            {mondayPlan.map((item, index) => (
              <li key={item.step} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="text-xs text-seal">
                  {index + 1} · {item.step}
                </p>
                <p className="mt-1 text-sm leading-7">{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl">五个不要</h2>
          <ul className="mt-4 space-y-2">
            {donts.map((line) => (
              <li key={line} className="rounded-lg bg-muted px-4 py-2 text-sm leading-7">
                {line}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl">老师真正担心的，当场答</h2>
          <div className="mt-5 space-y-3">
            {worries.map((item) => (
              <div key={item.q} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="font-medium">{item.q}</p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">全天工作坊怎么做</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7">
            {workshopSteps.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {workshopCards.map((card) => (
              <div key={card.id} className="rounded-xl border border-dashed border-border bg-card p-4">
                <div className="flex items-center gap-2">
                  <Badge>{card.id}</Badge>
                  <p className="text-sm font-medium">{card.unit}</p>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{card.hint}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">若对方学校也想推，给教研组长四条</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {groupAdvice.map((item) => (
              <Callout key={item.title} title={item.title}>
                {item.text}
              </Callout>
            ))}
          </div>
        </section>

        <Callout tone="seal" title="结束时请老师带走的成品">
          <ul className="list-disc space-y-1 pl-4">
            {closing.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Callout>
      </div>
    </PageWidth>
  );
}
