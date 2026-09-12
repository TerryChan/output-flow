import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PageWidth } from "@/components/page-width";
import { SpeakerNote } from "@/components/speaker-note";
import { Badge } from "@/components/ui/badge";
import { cases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "课例",
};

export default function CasesPage() {
  return (
    <PageWidth>
      <PageHero
        kicker="第四段 · 主办方点名"
        minutes="35–50 分钟"
        title="四则校本课例，请改，不要模仿热闹"
        lead="现场精讲前两则：七年级推荐学科、八年级烦恼信箱。后两则是项目课和九年级思辨课，留给回组后用。每则都按同一张备课单写。"
      />

      <SpeakerNote>
        课例不要 recap 全过程。每则只挖三处：成品为什么这样定、驱动怎样让缺口露出来、促成怎样删掉无关活动。把学生可能说的“空句子”读出来，比放课件有用。
      </SpeakerNote>

      <div className="mt-8 grid gap-4">
        {cases.map((item, index) => (
          <Link
            key={item.slug}
            href={`/cases/${item.slug}`}
            className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-serif text-seal">0{index + 1}</span>
              <Badge variant="secondary">{item.grade}</Badge>
              <Badge variant="outline">{item.level}</Badge>
              <span className="text-xs text-muted-foreground">{item.minutes}</span>
            </div>
            <h2 className="mt-3 font-serif text-2xl group-hover:text-primary">
              {item.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{item.textbook}</p>
            <p className="mt-3 text-sm leading-7">{item.product}</p>
          </Link>
        ))}
      </div>
    </PageWidth>
  );
}
