"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { blankFields } from "@/lib/template-data";

const storageKey = "output-lesson-plan";

type Draft = Record<string, string>;

const empty: Draft = Object.fromEntries(blankFields.map((field) => [field.key, ""]));

export function TemplateForm() {
  const [draft, setDraft] = useState<Draft>(empty);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return;
    try {
      setDraft({ ...empty, ...JSON.parse(raw) });
    } catch {
      /* ignore broken drafts */
    }
  }, []);

  function persist() {
    window.localStorage.setItem(storageKey, JSON.stringify(draft));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1600);
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 no-print">
        <p className="text-sm text-muted-foreground">
          写在这张单子上。内容存在本机浏览器，可打印带走。
        </p>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={() => setDraft(empty)}>
            清空
          </Button>
          <Button type="button" variant="outline" onClick={persist}>
            {saved ? "已保存" : "保存"}
          </Button>
          <Button type="button" onClick={() => window.print()}>
            打印备课单
          </Button>
        </div>
      </div>
      <div className="mb-4 border-b border-dashed border-border pb-3 text-center">
        <p className="font-serif text-xl">输出式备课单</p>
        <p className="mt-1 text-xs text-muted-foreground">
          先写成品，再写驱动与促成。一节课只守一个主成品。
        </p>
      </div>
      <div className="space-y-4">
        {blankFields.map((field) => (
          <label key={field.key} className="block">
            <span className="mb-1.5 block text-sm font-medium">{field.label}</span>
            <Textarea
              value={draft[field.key]}
              rows={field.rows}
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  [field.key]: event.target.value,
                }))
              }
              className="min-h-[4.5rem] resize-y bg-paper/60"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
