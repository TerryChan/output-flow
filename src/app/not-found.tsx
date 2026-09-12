import Link from "next/link";
import { PageWidth } from "@/components/page-width";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageWidth className="text-center">
      <h1 className="text-3xl">这一页还没有</h1>
      <p className="mt-3 text-sm text-muted-foreground">回到讲座目录继续。</p>
      <Button render={<Link href="/" />} className="mt-6">
        回开场
      </Button>
    </PageWidth>
  );
}
