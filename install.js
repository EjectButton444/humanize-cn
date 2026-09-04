#!/usr/bin/env node
// deai 技能安装器：把 SKILL.md / example.md 复制进 DSH 技能目录（零依赖）
// 用法：
//   npx dsh-skill-deai             安装到全局（~/.dsh/skills/deai）
//   npx dsh-skill-deai --project   安装到当前项目（./.dsh/skills/deai）
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const SKILL_NAME = "deai";
const FILES = ["SKILL.md", "example.md"];
const mode = process.argv[2];

let root;
if (mode === "--project") {
  root = path.join(process.cwd(), ".dsh", "skills");
} else if (mode && mode !== "--global") {
  console.error("未知参数：" + mode + "（支持 --global 或 --project）");
  process.exit(1);
} else {
  root = path.join(
    process.env.DSH_HOME || path.join(os.homedir(), ".dsh"),
    "skills"
  );
}

const dest = path.join(root, SKILL_NAME);
fs.mkdirSync(dest, { recursive: true });
for (const f of FILES) {
  fs.copyFileSync(path.join(__dirname, f), path.join(dest, f));
  console.log("已安装 " + path.join(dest, f));
}
console.log("");
console.log("deai 安装完成：新开 DSH 会话即可自动触发，或手动调用 /deai。");
