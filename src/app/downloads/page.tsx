import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageWidth } from "@/components/page-width";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { handouts } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "下载",
};

export default function DownloadsPage() {
  return (
    <PageWidth>
      <PageHero
        kicker="发给老师"
        title="下载讲义、备课单和课例"
        lead="三份 PDF 可直接发微信或打印。资料包一次带齐 PDF 和 Markdown。网站还在，适合投影；文件适合会后带走。"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {handouts.map((item) => (
          <Card key={item.href}>
            <CardHeader>
              <p className="text-xs tracking-wide text-seal">{item.kind}</p>
              <CardTitle className="font-serif text-xl">{item.title}</CardTitle>
              <CardDescription className="leading-7">{item.detail}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button nativeButton={false} render={<a href={item.href} download />}>
                下载
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-sm leading-7 text-muted-foreground">
        也可打开讲义页用浏览器「打印 → 存储为 PDF」。课例按人教版撰写，发给外校时请提醒对方替换教材。
      </p>
    </PageWidth>
  );
}
