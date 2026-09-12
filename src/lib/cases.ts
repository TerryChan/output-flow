export type CaseStudy = {
  slug: string;
  grade: string;
  level: string;
  minutes: string;
  textbook: string;
  title: string;
  product: string;
  why: string;
  students: string;
  drive: string;
  gap: string;
  enable: { kind: string; activity: string; into: string }[];
  flow: { t: string; what: string; teacher: string }[];
  frame: string[];
  rubric: string[];
  troubles: { happen: string; do: string }[];
  migrate: string[];
  board: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: "g7-subject",
    grade: "七年级",
    level: "微输出 · 口头",
    minutes: "40 分钟常态课",
    textbook: "人教七上 Unit 9 My favorite subject is science. 第 2 课时",
    title: "向交换生推荐一门学科",
    product:
      "30–40 秒口播。对一名“新来的交换生”推荐自己最喜欢的学科：点名学科 + 两个理由 + 一句邀请。必须出现 favorite / because / I think。后进生用四句句架；优等生加一个课堂里的具体例子。",
    why: "这个单元学生最容易停在 “My favorite subject is …” 单句。我们不要调查表展示，而要一个对真人说的推荐。推荐比“谈谈爱好”更有对象，语言被迫完整。",
    students:
      "已会学科名词和 like / favorite。卡点：because 后接不了完整原因；理由只剩 interesting / fun；不敢看对方说话。班内约 1/4 学生需要句架才能说满四句。",
    drive:
      "教师扮演下周到班的交换生 Mia：“我要选课，谁能现在就推荐一门？给我一个理由就行。”请 3 名学生即兴说。通常只得到 Math. It’s interesting.",
    gap: "有学科，没有两个理由，没有 because 带出的完整句，没有对 Mia 说的称呼和邀请。",
    enable: [
      {
        kind: "内容",
        activity: "两人用 90 秒列出某学科的“能看见的理由”：老师怎样、作业怎样、自己哪次课最有感觉。禁止只写 interesting。",
        into: "口播的两个理由",
      },
      {
        kind: "语言",
        activity: "板书三条原因句：because the teacher … / because we … / because it helps me …。全班口头替换，每人只练自己那门课。",
        into: "第 2、3 句",
      },
      {
        kind: "结构",
        activity: "四格提纲：Hi Mia — 学科 — 理由 1 — 理由 2 — You can sit with me.",
        into: "整段口播顺序",
      },
    ],
    flow: [
      {
        t: "0–5′",
        what: "驱动：Mia 到班，三人即兴推荐，教师板书缺口。",
        teacher: "不纠音。只圈“没有 because、没有第二个理由”。",
      },
      {
        t: "5–14′",
        what: "内容+语言促成。先写理由，再套句。",
        teacher: "巡视时问 Why? 逼学生把 interesting 换成具体动作。",
      },
      {
        t: "14–18′",
        what: "结构促成：填四格提纲，后进生直接拿印好的句架。",
        teacher: "收两份提纲投屏，改顺序不改观点。",
      },
      {
        t: "18–28′",
        what: "个人 rehearsing 2′，对墙说；再对同伴说两轮，同伴只数“有几个 because”。",
        teacher: "计时。提醒看对方眼睛，不看本子的第二轮。",
      },
      {
        t: "28–36′",
        what: "4 人小组轮流口播。每组推一份“理由最具体”的，不是语音最好的。",
        teacher: "记录两处共性问题，不打断学生。",
      },
      {
        t: "36–40′",
        what: "二次输出：每人把一条虚的理由改具体，再对同伴说一遍。作业：回家录音发给“Mia”。",
        teacher: "抽 2 人对比改前改后，让全班听见具体意味着什么。",
      },
    ],
    frame: [
      "Hi Mia, my favorite subject is ______.",
      "I like it because the teacher ______.",
      "And I think it helps me ______.",
      "You can sit with me in the ______ class.",
    ],
    rubric: [
      "对 Mia 打招呼",
      "说出学科名称",
      "两个理由，至少一处 because",
      "有一句邀请或建议",
    ],
    troubles: [
      {
        happen: "学生把课文对话背出来，不像推荐。",
        do: "禁止出现课文原句 I have math on Monday。只允许谈“为什么值得选”。",
      },
      {
        happen: "后进生卡住，中文往外冒。",
        do: "允许想中文，说时必须读句架。先完整，再求顺。",
      },
      {
        happen: "优等生说太长，超时。",
        do: "卡 40 秒。长不是好，完整才是好。",
      },
    ],
    migrate: [
      "同一结构可换成推荐社团、推荐午餐、推荐一本书。",
      "听说课结尾 8 分钟也能做这个微输出，不必单开一节。",
      "评价只数 because 和理由是否具体，新老师最好上手。",
    ],
    board: [
      "成品：30 秒推荐",
      "Hi Mia / favorite / because / because / sit with me",
      "具体 > interesting",
    ],
  },
  {
    slug: "g8-advice",
    grade: "八年级",
    level: "段输出 · 书面",
    minutes: "40 分钟读写课",
    textbook: "人教八上 Unit 4 Why don’t you talk to your parents? 第 3 课时",
    title: "校园烦恼信箱回复",
    product:
      "一封 70–90 词建议信。五块结构：称呼、共情、建议一、建议二、结尾。目标语言 Why don’t you / You should / You could / If I were you。后进生 6 句句架；优等生每条建议后加 because 或 for example。",
    why: "这是我校用得最多的“模板示范课”。建议类语言在教材里是散的，学生会造句不会成篇。信箱比“给朋友建议”更有公共任务感，也方便收集真实学情。",
    students:
      "会单句建议，不会先共情；建议停留在努力学习、别玩手机；书信格式不稳。中等生最大问题不是语法，是空。",
    drive:
      "投影一封匿名信（可用学生上周真心话，隐去姓名）：I argued with my mom because of my phone. She said I don’t study. I feel terrible. What should I do? 全体用 2 分钟口头回两句，教师记下原话。",
    gap: "Don’t be sad. You should study hard. 没有共情，建议不能执行。",
    enable: [
      {
        kind: "内容",
        activity: "小组用 3 分钟把“玩手机吵架”拆成可做的小行动：约定交手机时间、先写作业再刷、请爸爸当翻译、写一封中文短信给妈妈。每组只保留两条能今晚就做的。",
        into: "信的第 3、4 段",
      },
      {
        kind: "语言",
        activity: "三条句型替换，主语都是 you，宾语必须是具体行动，不允许 study hard / don’t play phones。",
        into: "建议句",
      },
      {
        kind: "结构",
        activity: "五格信纸：Dear … / I’m sorry you … / Why don’t you … / You could also … / I hope …。范信一篇，只标注这五处，不全文翻译。",
        into: "全篇顺序",
      },
    ],
    flow: [
      {
        t: "0–5′",
        what: "驱动：读信、口头回、板书空洞建议。",
        teacher: "把 You should study hard 写在黑板一侧，课结束前对照。",
      },
      {
        t: "5–16′",
        what: "三项促成。范信 4′，行动清单 4′，句型 3′。",
        teacher: "删掉原教材歌谣。明确告诉学生：今天所有练习都为这封信。",
      },
      {
        t: "16–24′",
        what: "独立写。教室安静。后进生拿六句条。",
        teacher: "不巡视纠错语法，只看有没有第二条具体建议。",
      },
      {
        t: "24–30′",
        what: "同桌互评，只打一条：建议能否今晚执行。用红笔在空的建议下划线。",
        teacher: "给句式：Can you do it tonight? If not, rewrite.",
      },
      {
        t: "30–36′",
        what: "投屏两份中等生信，全班改其中一句。不先展示最好的。",
        teacher: "问：这句话明天能做吗？能做就过，不能做就改。",
      },
      {
        t: "36–40′",
        what: "二次输出：改被划线的那一句。作业誊清并录音。",
        teacher: "收回原件，下次带两份：一份空、一份具体，贴备课组墙。",
      },
    ],
    frame: [
      "Dear classmate,",
      "I’m sorry you argued with your mom. I understand you feel terrible.",
      "Why don’t you ______ (a small action tonight)?",
      "You could also ______. If I were you, I would ______.",
      "I hope you and your mom can talk soon.",
    ],
    rubric: [
      "有称呼和结尾",
      "第一句是共情，不是立刻建议",
      "两条建议具体到行动",
      "至少两个目标句型",
    ],
    troubles: [
      {
        happen: "学生写成中文思维的长句，英语碎掉。",
        do: "强制五格，一格一句或两句。先结构正确，再求生动。",
      },
      {
        happen: "有人把烦恼写成自己的故事，忘记回信。",
        do: "提醒对象是 you。第一人称只允许出现在 If I were you。",
      },
      {
        happen: "时间不够写完。",
        do: "宁可少写一句祝福，也要两条建议。成品的核心是建议，不是文采。",
      },
    ],
    migrate: [
      "可替换烦恼：朋友矛盾、学业焦虑、不敢发言。保持同一结构。",
      "中考书面表达里的“给朋友建议”几乎可以原结构迁移。",
      "这张备课单建议作为讲座现场发给老师的填好样例。",
    ],
    board: [
      "先共情，后建议",
      "Why don’t you / You could / If I were you",
      "具体 = 今晚能做",
    ],
  },
  {
    slug: "g8-volunteer",
    grade: "八年级",
    level: "篇输出 · 项目",
    minutes: "两课时（本课例写第 2 课时路演）",
    textbook: "人教八下 Unit 2 I’ll help to clean up the city parks. 单元收官",
    title: "班级公益方案路演",
    product:
      "四人一组，2 分钟路演 + 一张 A4 招募海报。路演四句责任：问题、行动、我们需要谁、如何加入。必须使用 volunteer / help (to) / clean up / put off / care for 等单元短语中的 4 个。每人至少开口 3 句。",
    why: "这个单元动词短语很多，传统课会变成短语听写。我们改成“为班里真可能做的一件小事拉人”。项目课最容易空，所以方案必须小到下周能做：擦一次灭火器、给年级准备一次失物招领、去一次社区图书角。",
    students:
      "短语会选会填，不会放进一段连贯的话；小组里常有一人承包；海报喜欢画，不喜欢写完整句。",
    drive:
      "第 1 课时末：学校德育处（真实或拟真）征集“本月班级微公益”。每组 3 分钟内必须报题，报不上来的组会发现自己只会说 help people，没有事件。",
    gap: "有爱心，没有方案；有短语，没有听众；有组长，没有全员开口。",
    enable: [
      {
        kind: "内容",
        activity: "给三张合格方案卡和一张不合格卡（“帮助全世界的人”）。小组判断为什么不合格：太大、不能本周做、没有岗位。",
        into: "路演第一段：我们要解决什么",
      },
      {
        kind: "语言",
        activity: "把单元短语按“行动 / 邀请 / 时间”三栏重排。每组从每栏各取一个写进台词。",
        into: "每人的 3 句台词",
      },
      {
        kind: "结构",
        activity: "路演四拍：Problem 20″ — Action 40″ — We need 30″ — Join us 30″。海报只允许 5 行英文。",
        into: "2 分钟时间分配和海报文案",
      },
    ],
    flow: [
      {
        t: "第 1 课时",
        what: "驱动报题、选小事、完成短语三栏和海报草稿。",
        teacher: "否决假大空题目。允许中文讨论，英文必须落在海报五行里。",
      },
      {
        t: "0–6′",
        what: "第 2 课时：每组按四拍把台词写到人名旁边，禁止一人写完四人读。",
        teacher: "抽查最不爱说话的那位，请他先读自己的三句。",
      },
      {
        t: "6–16′",
        what: "组内排练两轮。一轮看稿，一轮不看稿。计时 2 分钟，超时必须删句。",
        teacher: "在教室走动只做一件事：数每个人开没开口。",
      },
      {
        t: "16–32′",
        what: "4–5 组路演。听众用量表打“能否下周做”和“是否全员开口”。",
        teacher: "不评语音语调第一。先评方案小不小。",
      },
      {
        t: "32–40′",
        what: "全班票选一个真做的方案。落选组把台词改成 8 句书面说明作二次输出。",
        teacher: "真做比表演重要。能推进的方案交给班主任或德育处。",
      },
    ],
    frame: [
      "Our problem is ______ around our school.",
      "We will ______ this Friday. We won’t put it off.",
      "We need three volunteers to ______.",
      "If you care for ______, please write your name here.",
    ],
    rubric: [
      "方案小到本周能做",
      "四人都开口，每人不少于 3 句",
      "至少 4 个单元短语进了台词",
      "海报 5 行，没有只有标题没有句子",
    ],
    troubles: [
      {
        happen: "小组变成美术课。",
        do: "海报先写五行英文，画在最后 3 分钟。没有句子的海报不算成品。",
      },
      {
        happen: "路演超时、背稿。",
        do: "超时即停。提示卡只允许关键词，不允许全文。",
      },
      {
        happen: "选不出真能做的事。",
        do: "教师提供三个必选小事，降低内容负担，把力气留在语言上。",
      },
    ],
    migrate: [
      "同一结构可用于“班级英语节摊位”“运动会后勤招募”。",
      "项目课一学期 2–3 次即可，不要周周项目。",
      "评价“全员开口”能有效防止优等生承包。",
    ],
    board: [
      "小到本周能做",
      "Problem — Action — Need — Join",
      "每人 3 句，短语进台词",
    ],
  },
  {
    slug: "g9-etiquette",
    grade: "九年级",
    level: "段输出 · 思辨口头",
    minutes: "40 分钟综合课",
    textbook: "人教九全 Unit 10 You’re supposed to shake hands. 第 2 课时",
    title: "给外国友人的一页礼仪提醒",
    product:
      "2–3 分钟口头提醒，可配一页 8–10 句指南。对象：下月来访的姊妹校学生。内容：见面、用餐、做客各提 1 条“你应该/不应该”。必须使用 be supposed to / be expected to / it is polite to。优等生加一句“如果对方弄错了，我们怎么友善提醒”。",
    why: "九年级最容易把文化课上成知识点罗列。输出式要的是对真人有用的提醒，不是节日知识竞赛。中考相关话题（习俗、建议、对比）也能被这段结构接住。",
    students:
      "会认 supposed to，不会在真实提醒里用；对比时只会 China is … / America is … 两句标签；怕说错文化，宁愿背课文。",
    drive:
      "给一张来访行程：到达教室、共进午餐、去同学家。请学生立刻选一件事提醒对方。多数人说 Don’t talk loud / Use chopsticks，没有对象感，也没有 supposed to。",
    gap: "有规则，没有场合；有中式标签，没有得体表达；没有替对方着想的语气。",
    enable: [
      {
        kind: "内容",
        activity: "三场合卡片（见面 / 用餐 / 做客），每卡只准保留一条最容易让客人尴尬的点。删除“介绍长城、介绍春节”。",
        into: "提醒的三个要点",
      },
      {
        kind: "语言",
        activity: "把禁止句改写成得体句：Don’t … → You’re not supposed to … / It’s polite to …。对比语气：命令 vs 提醒。",
        into: "每一条提醒的动词部分",
      },
      {
        kind: "结构",
        activity: "演讲三拍：When you … — You’re supposed to … — Because …。最后一句欢迎。",
        into: "2 分钟口播骨架",
      },
    ],
    flow: [
      {
        t: "0–5′",
        what: "驱动：行程单 + 即兴一条提醒，暴露生硬命令句。",
        teacher: "把 Don’t 开头的句子留在黑板，后面要改写。",
      },
      {
        t: "5–17′",
        what: "选三条要点，完成得体改写，填三拍提纲。",
        teacher: "阻止学生堆五个习俗。三条，说透。",
      },
      {
        t: "17–26′",
        what: "个人写提纲，同伴互查：有没有 supposed to，有没有场合 When you。",
        teacher: "优等生加“对方弄错时怎么提醒”一句，示范得体。",
      },
      {
        t: "26–35′",
        what: "6 人小组轮流讲，组内用量表听“像不像对客人说话”。每组推荐 1 人全班分享。",
        teacher: "分享者面对门口，当作客人真的走进来。",
      },
      {
        t: "35–40′",
        what: "二次输出：把黑板上的 Don’t 句改成得体句，写进自己的指南。作业：做成一页纸，留给真来访用。",
        teacher: "若本校暂无外宾，就留给下学期英语节的接待组，成品必须有去处。",
      },
    ],
    frame: [
      "When you arrive at our classroom, you are supposed to ______.",
      "At lunch, it’s polite to ______. You’re not supposed to ______.",
      "If you visit a classmate’s home, you are expected to ______.",
      "If someone gets it wrong, we can smile and say ______.",
      "You’re welcome here. We’ll help you.",
    ],
    rubric: [
      "三条提醒对应三个场合",
      "使用 supposed to / expected to / polite to，而不是一串 Don’t",
      "语气像对客人，不像对小孩下命令",
      "有一句欢迎或帮助",
    ],
    troubles: [
      {
        happen: "文化说得绝对，学生开始争论“中国人都这样吗”。",
        do: "加 many families / in our school。九年级正好练限定词，避免标签化。",
      },
      {
        happen: "背单元阅读，不像提醒。",
        do: "禁止出现课文专有名词堆砌。必须出现 you。",
      },
      {
        happen: "中考临近，老师想改回练习册。",
        do: "收尾 5 分钟把今天三条提醒改成一道书面表达提纲，明示：输出在给应试供货。",
      },
    ],
    migrate: [
      "可换成“给学弟学妹的中考前作息提醒”“给家长的一次家长会英语短说”。",
      "九年级复习课可用“把这道书面表达先口头输出再写”。",
      "得体语气是这课比语法更难的点，评课时请盯语气。",
    ],
    board: [
      "对客人说，不是下命令",
      "When you … you are supposed to …",
      "三条即可，说透",
    ],
  },
];

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}
