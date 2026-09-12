import Link from "next/link";
import { Callout } from "@/components/callout";
import { PageWidth } from "@/components/page-width";
import { SpeakerNote } from "@/components/speaker-note";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  driveTask,
  fullDayExtra,
  halfDay,
  openingScript,
  packList,
  takeaways,
} from "@/lib/agenda";
import { handouts } from "@/lib/downloads";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="paper-grid pointer-events-none absolute inset-0 opacity-70" />
        <PageWidth className="relative">
          <Badge variant="secondary" className="mb-4">
            {site.audience} · {site.teachers} 人
          </Badge>
          <p className="text-sm tracking-[0.2em] text-seal">讲座手册</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
            {site.title}
            <span className="mt-2 block text-2xl text-chalk sm:text-3xl">
              {site.subtitle}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            给初中英语老师的半日培训。不贩卖理念，带走一张能填的备课单、四则可改的课例，以及我们学校五年里真正发生过的犹豫、失败和改法。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button render={<Link href="/idea" />} size="lg">
              从理念开始
            </Button>
            <Button render={<Link href="/template" />} variant="outline" size="lg">
              先看备课单
            </Button>
            <Button render={<Link href="/handbook" />} variant="outline" size="lg">
              打印讲义
            </Button>
            <Button render={<Link href="/downloads" />} variant="outline" size="lg">
              下载 PDF
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            建议时长 {site.duration}。课例按人教版《Go for it!》写，请按本校教材替换。
          </p>
        </PageWidth>
      </section>

      <PageWidth className="space-y-12">
        <section>
          <h2 className="text-2xl">今天结束，老师手里要有三样东西</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {takeaways.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="font-serif text-lg">{item.title}</CardTitle>
                  <CardDescription className="leading-7">{item.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl">这场讲座本身也按输出式来</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              最怕的培训是：台上讲“不要满堂灌”，台下被灌了三小时。所以开场不讲理论，先让老师交出一个成品——一节课的成品描述。讲不清，才有后面听下去的饥饿。
            </p>
            <SpeakerNote>
              开场四句可以照着说，但请用自己的学校细节替换。不要先报“我们走在前沿”，先报“我们被学生不会说话逼的”。
            </SpeakerNote>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7">
              {openingScript.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </div>
          <Callout tone="seal" title="开场驱动（8 分钟，必须动笔）">
            <p className="font-medium">{driveTask.unit}</p>
            <p className="mt-2">{driveTask.prompt}</p>
            <p className="mt-3 text-xs tracking-wide text-muted-foreground">
              收 3 张纸条。先读空的，再投屏下面这一条。
            </p>
          </Callout>
        </section>

        <section>
          <h2 className="text-2xl">什么叫写空了</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>现场常见的三种空</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-7">
                {driveTask.weak.map((line) => (
                  <p key={line} className="rounded-md bg-muted px-3 py-2">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>可以当众投屏的一条</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7">{driveTask.strong}</CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl">半天议程（180 分钟）</h2>
            <span className="text-xs text-muted-foreground">投影本页即可控时</span>
          </div>
          <div className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {halfDay.map((item) => (
              <div
                key={item.time}
                className="grid gap-2 px-4 py-4 sm:grid-cols-[140px_1fr] sm:gap-6"
              >
                <p className="font-mono text-xs tracking-wide text-seal">{item.time}</p>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">若主办方给全天，下午这样加</h2>
          <div className="mt-5 grid gap-3">
            {fullDayExtra.map((item) => (
              <div key={item.time} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="text-xs text-seal">{item.time}</p>
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">出发前请备好的东西</h2>
          <ul className="mt-4 grid gap-2 text-sm leading-7 md:grid-cols-2">
            {packList.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-dashed border-border bg-card px-3 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl">发给老师的文件</h2>
            <Link href="/downloads" className="text-sm text-seal hover:underline">
              全部下载
            </Link>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {handouts.map((item) => (
              <a
                key={item.href}
                href={item.href}
                download
                className="rounded-xl border border-border bg-card px-4 py-3 hover:border-primary/40"
              >
                <p className="text-xs tracking-wide text-seal">{item.kind}</p>
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.detail}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-3">
          {[
            ["/journey", "五年历程", "主办方点名要听的部分"],
            ["/template", "备课模板", "讲完必须让老师填一栏"],
            ["/cases", "四则课例", "现场精讲两则，其余自读"],
          ].map(([href, title, desc]) => (
            <Link key={href} href={href} className="rounded-xl border border-border bg-card p-4 hover:border-primary/40">
              <p className="font-serif text-lg">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </Link>
          ))}
        </section>
      </PageWidth>
    </div>
  );
}
