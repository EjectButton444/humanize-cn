# deai —— AI文字特征去除器

一个遵循 [Agent Skills](https://github.com/agentskills/agentskills) 规范的技能（SKILL.md 格式）：把带 AI 痕迹的中文文本改写成自然、像真人写的内容。兼容 DeepSeek Harness（DSH）、Claude Code、OpenAI Agent 等支持 Agent Skills 的工具。

## 它能做什么

- 去掉 AI 高频词、成语套话、空洞修辞和"开场白/结尾总结腔"
- 打破总分总、机械罗列、排比堆砌等模板结构
- 按使用场景（社交动态、读后感、公众号、工作文档……）调节审查力度
- 注入主观性与真实感；需要真实细节时会先向你要，**绝不虚构**
- 内置语言/结构/内容三套审查标准、挑刺轮自审机制和打分制（≥85 分才输出）

## 安装

### 方式一：npx（安装到 DeepSeek Harness）

```bash
npx deai-skill-cn             # 安装到全局（~/.dsh/skills/deai）
npx deai-skill-cn --project   # 安装到当前项目（./.dsh/skills/deai）
```

### 方式二：手动安装（任意支持 Agent Skills 的工具）

把 `SKILL.md` 和 `example.md` 复制到对应工具的技能目录：

| 工具 | 全局目录 | 项目目录 |
|---|---|---|
| DeepSeek Harness | `~/.dsh/skills/deai/` | `<项目>/.dsh/skills/deai/` |
| Claude Code | `~/.claude/skills/deai/` | `<项目>/.claude/skills/deai/` |
| OpenAI Agent / Codex | `~/.agents/skills/deai/` | `<项目>/.agents/skills/deai/` |

## 使用

- **自动触发**：技能的 `description` 已写明触发条件（"润色 / 改写 / 去AI味 / 写得像人写的 / 自然一点"等），支持 Agent Skills 的工具会在任务匹配时自动调用；
- **手动调用**：DSH 中 `/deai`，或直接说"用 deai 技能润色这段文字"；其他工具按各自的技能调用方式。

## 效果示例

> 改写前：在阅读这本书的过程中，我深刻地认识到了群众心理的复杂性。
> 改写后：书翻到一半我就放下来缓了缓——有些话说得太直白，像冲着脸讲的。

（示例仅示意，可替换成你自己的真实案例。）

## 目录结构

| 文件 | 作用 |
|---|---|
| `SKILL.md` | 技能主体：触发条件、规则与场景表、三套审查标准、质量评价、纠错学习 |
| `example.md` | 问题诊断例库：典型问题句 + 诊断 + 改进 |
| `install.js` | npx 安装脚本（零依赖，把上述两个文件复制进 DSH 技能目录） |

## 许可证

[MIT](./LICENSE)
