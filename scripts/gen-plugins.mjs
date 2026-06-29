/*
 * docs.axiu.uno 插件页面生成器
 * 读取 F:/Yunzai/app/plugins/example/commands.json，生成插件指令文档
 * 用法：cd docs.axiu.uno && node scripts/gen-plugins.mjs
 *
 * 页面结构：
 *   手写区（标记前的内容，生成器不修改）
 *   <!-- cmds-start -->
 *   自动生成区（指令表格，每次运行覆盖）
 *   <!-- cmds-end -->
 *   手写区（标记后的内容，生成器不修改）
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const base = resolve(__dirname, '..').replace(/\\/g, '/');
const outDir = base + '/guide/yunzai/plugins/';
const raw = JSON.parse(readFileSync('F:/Yunzai/app/plugins/example/commands.json', 'utf-8'));

/* ======== 按 path 聚合 ======== */
const pathMap = new Map();
for (const e of raw) {
  const p = e.path;
  if (!pathMap.has(p)) pathMap.set(p, []);
  const cmds = (e.commands || []).map(c => ({
    reg: typeof c.reg === 'string' ? c.reg : '',
    fnc: c.fnc,
  }));
  pathMap.get(p).push({
    name: e.name || '',
    dsc: e.dsc || '',
    event: e.event || '',
    priority: e.priority,
    cmds,
  });
}

/* ======== 去重 ======== */
for (const [p, mods] of pathMap) {
  const merged = [];
  for (const m of mods) {
    const exist = merged.find(x => x.name === m.name && x.dsc === m.dsc);
    if (exist) {
      if (!exist.events) exist.events = [exist.event];
      if (!exist.events.includes(m.event)) exist.events.push(m.event);
      const cmap = new Map();
      for (const c of [...exist.cmds, ...m.cmds]) {
        if (!cmap.has(c.fnc) || (c.reg && !cmap.get(c.fnc).reg)) cmap.set(c.fnc, c);
      }
      exist.cmds = [...cmap.values()];
    } else {
      merged.push({ ...m });
    }
  }
  pathMap.set(p, merged);
}

/* ======== 分类 ======== */
const singleDirPrefixes = ['system/', 'other/', 'example/'];
const dirPages = {};
const regular = [];

for (const [p, mods] of pathMap) {
  const dir = singleDirPrefixes.find(d => p.startsWith(d))?.slice(0, -1);
  if (dir) {
    if (!dirPages[dir]) {
      dirPages[dir] = {
        label: { system: '系统插件', other: '工具插件', example: '示例插件' }[dir],
        items: [],
      };
    }
    dirPages[dir].items.push({ file: p, mods });
  } else {
    regular.push({ path: p, mods });
  }
}

for (const d of Object.keys(dirPages)) {
  dirPages[d].items.sort((a, b) => a.file.localeCompare(b.file));
}
regular.sort((a, b) => a.path.toLowerCase().localeCompare(b.path.toLowerCase()));

/* ======== 辅助函数 ======== */
function toFile(p) { return p.replace(/[\/\\]/g, '-') + '.md'; }
function esc(s) { return (s || '').replace(/[|\\`*_{}[\]<>]/g, '\\$&'); }

function renderMod(m) {
  let o = '### ' + (m.name || '（未命名）') + '\n\n';
  if (m.dsc) o += '- **描述**：' + m.dsc + '\n';
  const events = m.events ? m.events.join('、') : m.event;
  if (events) o += '- **事件**：`' + events + '`\n';
  if (m.priority != null) o += '- **优先级**：' + m.priority + '\n';
  const valid = m.cmds.filter(c => c.reg);
  if (valid.length > 0) {
    o += '\n| 正则表达式 | 处理函数 |\n';
    o += '|-----------|---------|\n';
    for (const c of valid) o += '| `' + esc(c.reg) + '` | ' + esc(c.fnc) + ' |\n';
  }
  o += '\n';
  return o;
}

function totalCmds(mods) { return mods.reduce((s, m) => s + m.cmds.filter(c => c.reg).length, 0); }

/* ======== 写入页面（保留手写区） ======== */
function writePage(filename, autoContent, header) {
  const filePath = outDir + filename;
  let before = header || '';
  let after = '\n---\n\n← [返回插件列表](./)\n';

  if (existsSync(filePath)) {
    const old = readFileSync(filePath, 'utf-8');
    const startIdx = old.indexOf('<!-- cmds-start -->');
    const endIdx = old.indexOf('<!-- cmds-end -->');
    if (startIdx !== -1 && endIdx !== -1) {
      before = old.slice(0, startIdx);
      after = old.slice(endIdx + '<!-- cmds-end -->'.length);
    }
  }

  const result = before + '<!-- cmds-start -->\n\n' + autoContent + '\n<!-- cmds-end -->' + after;
  writeFileSync(filePath, result);
}

/* ======== 生成单插件目录页面 ======== */
console.log('生成插件页面...');
for (const [dir, data] of Object.entries(dirPages)) {
  let auto = '';
  for (const item of data.items) {
    auto += '## ' + item.file + '\n\n';
    for (const m of item.mods) auto += renderMod(m);
  }
  const header = '# ' + data.label + '\n\n> 路径：`' + dir + '/` · 本目录下每个文件即为一个独立插件\n\n---\n\n## 指令列表\n\n';
  writePage(dir + '.md', auto, header);
  console.log('  ' + dir + '.md');
}

/* ======== 生成常规插件页面 ======== */
for (const p of regular) {
  const fn = toFile(p.path);
  let auto = '';
  for (const m of p.mods) auto += renderMod(m);
  const header = '# ' + p.path + '\n\n> 源码仓库：\n\n\n---\n\n## 指令列表\n\n';
  writePage(fn, auto, header);
  console.log('  ' + fn);
}

/* ======== 索引页 ======== */
let idxAuto = '';
for (const [dir, data] of Object.entries(dirPages)) {
  idxAuto += '## ' + data.label + '\n\n';
  idxAuto += '- [' + data.label + '](' + dir + ')（' + data.items.length + ' 个文件，' +
    data.items.reduce((s, i) => s + totalCmds(i.mods), 0) + ' 条指令）\n\n';
}
idxAuto += '## 功能插件\n\n';
for (const p of regular) {
  const link = toFile(p.path).replace(/\.md$/, '');
  idxAuto += '- [' + p.path + '](' + link + ')（' + p.mods.length + ' 个模块，' + totalCmds(p.mods) + ' 条指令）\n';
}

const idxHeader = '# 插件列表\n\n本页汇总 TRSS-Yunzai 所有已安装插件。\n\n> 来源：`F:/Yunzai/app/plugins/`\n\n';
writePage('index.md', idxAuto, idxHeader);
console.log('  index.md');

/* ======== 更新 config.ts 侧边栏 ======== */
let cfg = readFileSync(base + '/.vitepress/config.ts', 'utf-8');
const dirSide = Object.entries(dirPages).map(([d, data]) =>
  '              { text: \'' + data.label + '\', link: \'/guide/yunzai/plugins/' + d + '\' },');
const regSide = regular.map(r =>
  '              { text: \'' + r.path + '\', link: \'/guide/yunzai/plugins/' + toFile(r.path).replace(/\.md$/, '') + '\' },');
const block = '            { text: \'插件列表\', collapsed: true, items: [\n' +
  '              { text: \'概览\', link: \'/guide/yunzai/plugins/\' },\n' +
  [...dirSide, ...regSide].join('\n') + '\n            ], },';
cfg = cfg.replace(/{ text: '插件列表', collapsed: true, items: \[[\s\S]*?\], },/, block);
writeFileSync(base + '/.vitepress/config.ts', cfg);
console.log('  config.ts 侧边栏已更新');
console.log('完成');
