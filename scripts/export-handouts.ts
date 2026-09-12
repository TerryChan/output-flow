import { spawn } from "node:child_process";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { halfDay, packList, takeaways } from "../src/lib/agenda";
import { cases } from "../src/lib/cases";
import { ideaClose, myths, outputLevels, poaSteps } from "../src/lib/idea";
import { pits, voices, whyStart, years } from "../src/lib/journey";
import { closing, mondayPlan, worries } from "../src/lib/practice";
import { site } from "../src/lib/site";
import { blankFields, samplePlan, templateFields } from "../src/lib/template-data";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "downloads");
const tmpDir = join(root, ".tmp-handouts");
const chrome = "/usr/local/bin/google-chrome";

const css = `
  @page { size: A4; margin: 16mm 16mm 18mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: "Noto Sans SC", "PingFang SC", "Source Han Sans SC", sans-serif;
    color: #2b2118;
    font-size: 12.5px;
    line-height: 1.7;
  }
  h1, h2, h3 { font-family: "Noto Serif SC", "Songti SC", serif; font-weight: 700; }
  h1 { font-size: 26px; line-height: 1.25; margin: 0 0 8px; }
  h2 { font-size: 17px; margin: 22px 0 8px; border-bottom: 1px solid #d8cbb8; padding-bottom: 4px; }
  h3 { font-size: 14px; margin: 14px 0 6px; }
  p, li { margin: 0 0 6px; }
  ul, ol { margin: 0 0 8px; padding-left: 1.3em; }
  .kicker { letter-spacing: 0.18em; font-size: 11px; color: #8a3a2a; }
  .muted { color: #6b5b4f; }
  .box { border: 1px solid #d8cbb8; border-radius: 8px; padding: 10px 12px; margin: 8px 0; }
  .lines { min-height: 52px; border: 1px solid #d8cbb8; border-radius: 6px; margin-top: 4px;
    background-image: linear-gradient(#efe6d6 1px, transparent 1px); background-size: 100% 22px; }
  .break { break-before: page; }
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  td, th { border: 1px solid #d8cbb8; padding: 6px 8px; vertical-align: top; text-align: left; }
  th { background: #f4ebe0; }
  .cover { margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #8a3a2a; }
`;

function htmlDoc(title: string, body: string) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@600;700&display=swap" rel="stylesheet" />
  <style>${css}</style>
</head>
<body>${body}</body>
</html>`;
}

function handbookHtml() {
  return htmlDoc(
    `${site.title} · 讲座讲义`,
    `
    <div class="cover">
      <p class="kicker">${site.audience}</p>
      <h1>${site.title}</h1>
      <p style="font-family:'Noto Serif SC',serif;font-size:18px;margin:0 0 8px">${site.subtitle}</p>
      <p class="muted">发给培训老师的讲义。课例按人教版《Go for it!》撰写，请按本校教材替换。</p>
    </div>
    <h2>带走三样</h2>
    <ol>${takeaways.map((item) => `<li><strong>${item.title}：</strong>${item.text}</li>`).join("")}</ol>
    <h2>半天议程</h2>
    <ol>${halfDay.map((item) => `<li><strong>${item.time} ${item.title}。</strong>${item.detail}</li>`).join("")}</ol>
    <h2>理念要点</h2>
    <p>${ideaClose}</p>
    ${poaSteps.map((step) => `<p><strong>${step.name}（${step.minutes}）：</strong>${step.what}</p>`).join("")}
    <h3>输出三档</h3>
    <ul>${outputLevels.map((item) => `<li><strong>${item.level}</strong>（${item.time}）：${item.use} 例：${item.example}</li>`).join("")}</ul>
    <h3>不是什么</h3>
    <ul>${myths.map((item) => `<li><strong>${item.myth}</strong> ${item.truth}</li>`).join("")}</ul>
    <h2 class="break">五年历程</h2>
    ${whyStart.paragraphs.map((p) => `<p>${p}</p>`).join("")}
    ${years
      .map(
        (item) => `
      <h3>${item.year} · ${item.title}</h3>
      ${item.story.map((p) => `<p>${p}</p>`).join("")}
      <p><strong>${item.lesson}</strong></p>`,
      )
      .join("")}
    <h3>老师后来怎么说</h3>
    ${voices.map((item) => `<p><strong>${item.who}：</strong>「${item.say}」</p>`).join("")}
    <h3>踩过的坑</h3>
    <ul>${pits.map((item) => `<li><strong>${item.pit}：</strong>${item.look} 改法：${item.fix}</li>`).join("")}</ul>
    <h2 class="break">备课单八栏</h2>
    <ol>${templateFields.map((field) => `<li><strong>${field.name}。</strong>${field.why} 样例：${field.example}</li>`).join("")}</ol>
    <h3>${samplePlan.title}</h3>
    <p class="muted">${samplePlan.meta}</p>
    <table><tbody>${samplePlan.rows.map(([k, v]) => `<tr><th style="width:22%">${k}</th><td>${v}</td></tr>`).join("")}</tbody></table>
    <h2>四则课例速记</h2>
    ${cases
      .map(
        (item) => `
      <h3>${item.grade} · ${item.title}</h3>
      <p class="muted">${item.textbook}</p>
      <p><strong>成品：</strong>${item.product}</p>
      <p><strong>驱动缺口：</strong>${item.gap}</p>`,
      )
      .join("")}
    <h2 class="break">回去两周</h2>
    <ol>${mondayPlan.map((item) => `<li><strong>${item.step}：</strong>${item.text}</li>`).join("")}</ol>
    <h3>问答</h3>
    ${worries.map((item) => `<p><strong>${item.q}</strong> ${item.a}</p>`).join("")}
    <h3>结束时请带走</h3>
    <ul>${closing.map((line) => `<li>${line}</li>`).join("")}</ul>
    <h2>物资</h2>
    <ul>${packList.map((item) => `<li>${item}</li>`).join("")}</ul>
    <p>我准备改的单元：______________　成品名词：______________　计划上课日期：______</p>
    `,
  );
}

function templateHtml() {
  return htmlDoc(
    "输出式备课单",
    `
    <div class="cover">
      <p class="kicker">输出式教学</p>
      <h1>输出式备课单</h1>
      <p class="muted">先写成品，再写驱动与促成。一节课只守一个主成品。正面空白，背面是填好样例。</p>
    </div>
    ${blankFields
      .map(
        (field) => `
      <p style="margin-bottom:2px"><strong>${field.label}</strong></p>
      <div class="lines" style="min-height:${Math.max(field.rows, 2) * 24}px"></div>`,
      )
      .join("")}
    <div class="break">
      <div class="cover">
        <p class="kicker">填好样例</p>
        <h1>${samplePlan.title}</h1>
        <p class="muted">${samplePlan.meta}</p>
      </div>
      ${templateFields
        .map(
          (field) => `
        <h3>${field.name}</h3>
        <p class="muted">${field.why}</p>
        <div class="box">${field.example}</div>`,
        )
        .join("")}
      <h2>这一课压缩在一页上</h2>
      <table><tbody>${samplePlan.rows.map(([k, v]) => `<tr><th style="width:22%">${k}</th><td>${v}</td></tr>`).join("")}</tbody></table>
    </div>
    `,
  );
}

function casesHtml() {
  return htmlDoc(
    "四则校本课例",
    `
    <div class="cover">
      <p class="kicker">${site.title}</p>
      <h1>四则校本课例</h1>
      <p class="muted">请改成品与场景，不要模仿热闹。现场精讲前两则，后两则回组用。</p>
    </div>
    ${cases
      .map(
        (item, index) => `
      <section class="${index === 0 ? "" : "break"}">
        <p class="kicker">课例 0${index + 1} · ${item.grade} · ${item.level}</p>
        <h2>${item.title}</h2>
        <p class="muted">${item.textbook} · ${item.minutes}</p>
        <h3>主成品</h3><p>${item.product}</p>
        <h3>为什么这样定</h3><p>${item.why}</p>
        <h3>学情</h3><p>${item.students}</p>
        <h3>驱动</h3><p>${item.drive}</p>
        <p><strong>缺口：</strong>${item.gap}</p>
        <h3>三项促成</h3>
        ${item.enable.map((row) => `<p><strong>${row.kind}：</strong>${row.activity} → ${row.into}</p>`).join("")}
        <h3>分钟流程</h3>
        <table>
          <tr><th style="width:16%">时间</th><th>做什么</th><th>教师</th></tr>
          ${item.flow.map((row) => `<tr><td>${row.t}</td><td>${row.what}</td><td>${row.teacher}</td></tr>`).join("")}
        </table>
        <h3>句架</h3><ol>${item.frame.map((line) => `<li>${line}</li>`).join("")}</ol>
        <h3>量表</h3><ol>${item.rubric.map((line) => `<li>${line}</li>`).join("")}</ol>
        <h3>翻车点</h3>
        ${item.troubles.map((row) => `<p><strong>${row.happen}</strong> ${row.do}</p>`).join("")}
        <h3>可搬走的</h3>
        <ul>${item.migrate.map((line) => `<li>${line}</li>`).join("")}</ul>
        <div class="box"><strong>板书三行：</strong>${item.board.join(" ｜ ")}</div>
      </section>`,
      )
      .join("")}
    `,
  );
}

function handbookMd() {
  return `# ${site.title}

${site.subtitle}

${site.audience}。课例按人教版《Go for it!》撰写，请按本校教材替换。

## 带走三样

${takeaways.map((item) => `- **${item.title}：** ${item.text}`).join("\n")}

## 议程

${halfDay.map((item) => `- **${item.time} ${item.title}。** ${item.detail}`).join("\n")}

## 理念

${ideaClose}

${poaSteps.map((step) => `- **${step.name}（${step.minutes}）：** ${step.what}`).join("\n")}

## 五年历程

${whyStart.paragraphs.join("\n\n")}

${years.map((item) => `### ${item.year} ${item.title}\n\n${item.story.join("\n\n")}\n\n**${item.lesson}**`).join("\n\n")}

## 备课单要点

${templateFields.map((field) => `### ${field.name}\n\n${field.why}\n\n样例：${field.example}`).join("\n\n")}

## 课例速记

${cases.map((item) => `### ${item.grade} · ${item.title}\n\n${item.textbook}\n\n成品：${item.product}\n\n缺口：${item.gap}`).join("\n\n")}

## 回去两周

${mondayPlan.map((item) => `- **${item.step}：** ${item.text}`).join("\n")}

## 问答

${worries.map((item) => `**${item.q}**\n\n${item.a}`).join("\n\n")}
`;
}

function casesMd() {
  return `# 四则校本课例

${cases
    .map((item) => {
      return `## ${item.grade} · ${item.title}

${item.textbook} · ${item.minutes}

**成品：** ${item.product}

**为什么：** ${item.why}

**驱动：** ${item.drive}

**缺口：** ${item.gap}

### 促成
${item.enable.map((row) => `- **${row.kind}：** ${row.activity} → ${row.into}`).join("\n")}

### 流程
${item.flow.map((row) => `- **${row.t}** ${row.what}（${row.teacher}）`).join("\n")}

### 句架
${item.frame.map((line) => `- ${line}`).join("\n")}

### 量表
${item.rubric.map((line) => `- ${line}`).join("\n")}
`;
    })
    .join("\n")}`;
}

function waitForPdf(pdfPath: string, child: ReturnType<typeof spawn>) {
  return new Promise<void>((resolve, reject) => {
    const started = Date.now();
    let lastSize = -1;
    let stable = 0;
    const timer = setInterval(() => {
      if (existsSync(pdfPath)) {
        const size = statSync(pdfPath).size;
        if (size > 1000 && size === lastSize) {
          stable += 1;
          if (stable >= 3) {
            clearInterval(timer);
            child.kill("SIGTERM");
            resolve();
            return;
          }
        } else {
          stable = 0;
          lastSize = size;
        }
      }
      if (Date.now() - started > 40000) {
        clearInterval(timer);
        child.kill("SIGKILL");
        if (existsSync(pdfPath) && statSync(pdfPath).size > 1000) resolve();
        else reject(new Error(`PDF not written: ${pdfPath}`));
      }
    }, 400);
  });
}

async function printPdf(htmlPath: string, pdfPath: string) {
  if (existsSync(pdfPath) && statSync(pdfPath).size > 1000) {
    console.log("skip existing", pdfPath);
    return;
  }
  const profile = join(tmpDir, `chrome-${Date.now()}`);
  mkdirSync(profile, { recursive: true });
  const child = spawn(
    chrome,
    [
      "--headless",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--hide-scrollbars",
      "--no-pdf-header-footer",
      "--remote-debugging-port=0",
      `--user-data-dir=${profile}`,
      "--virtual-time-budget=8000",
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: "inherit" },
  );
  await waitForPdf(pdfPath, child);
}

async function main() {
  mkdirSync(outDir, { recursive: true });
  mkdirSync(tmpDir, { recursive: true });

  const files = [
    { html: handbookHtml(), stem: "从听懂到说出-讲座讲义", md: handbookMd() },
    { html: templateHtml(), stem: "输出式备课单" },
    { html: casesHtml(), stem: "四则校本课例", md: casesMd() },
  ];

  for (const file of files) {
    const htmlPath = join(tmpDir, `${file.stem}.html`);
    writeFileSync(htmlPath, file.html);
    await printPdf(htmlPath, join(outDir, `${file.stem}.pdf`));
    if (file.md) writeFileSync(join(outDir, `${file.stem}.md`), file.md);
  }

  execFileSync(
    "zip",
    [
      "-j",
      join(outDir, "从听懂到说出-资料包.zip"),
      join(outDir, "从听懂到说出-讲座讲义.pdf"),
      join(outDir, "输出式备课单.pdf"),
      join(outDir, "四则校本课例.pdf"),
      join(outDir, "从听懂到说出-讲座讲义.md"),
      join(outDir, "四则校本课例.md"),
    ],
    { stdio: "inherit" },
  );

  console.log("Wrote handouts to", outDir);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
