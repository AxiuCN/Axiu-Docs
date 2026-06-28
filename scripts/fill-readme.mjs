/*
 * 将各插件 README 内容填充到对应文档页面的手写区
 * 用法：cd docs.axiu.uno && node scripts/fill-readme.mjs
 *
 * 手写区 = <!-- cmds-start --> 之前的内容
 * README 标题降一级（页面已有 # 标题），第一篇 # 标题跳过避免重复
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const base = resolve(__dirname, '..').replace(/\\/g, '/');
const pluginsDir = base + '/guide/yunzai/plugins/';
const yunzaiDir = 'F:/Yunzai/app/plugins/';

// 插件目录名 → 文档页文件名
const pluginPages = {
  'Axiu-Plugin': 'Axiu-Plugin.md',
  'GamePush-Plugin': 'GamePush-Plugin.md',
  'Git-Plugin': 'Git-Plugin.md',
  'Guoba-Plugin': 'Guoba-Plugin.md',
  'LinkFlow-Plugin': 'LinkFlow-Plugin.md',
  'Lotus-Plugin': 'Lotus-Plugin.md',
  'ProfileImg-Plugin': 'ProfileImg-Plugin.md',
  'TianRu-plugin': 'TianRu-plugin.md',
  'ZZZ-Plugin': 'ZZZ-Plugin.md',
  'atlas': 'atlas.md',
  'genshin': 'genshin.md',
  'loveMys-plugin': 'loveMys-plugin.md',
  'mcsmanager-plugin': 'mcsmanager-plugin.md',
  'mctool-plugin': 'mctool-plugin.md',
  'miao-plugin': 'miao-plugin.md',
  'xiaoyao-cvs-plugin': 'xiaoyao-cvs-plugin.md',
  'xitian-plugin': 'xitian-plugin.md',
};

/*
 * 将 README 内容插入页面手写区
 * @param {string} pagePath - 文档页面路径
 * @param {string} readmePath - README 文件路径
 */
function fillPage(pagePath, readmePath) {
  if (!existsSync(pagePath)) {
    console.log('  跳过（页面不存在）: ' + pagePath);
    return false;
  }
  if (!existsSync(readmePath)) {
    console.log('  跳过（README 不存在）: ' + readmePath);
    return false;
  }

  const rawReadme = readFileSync(readmePath, 'utf-8');
  const page = readFileSync(pagePath, 'utf-8');

  const cmdsIdx = page.indexOf('<!-- cmds-start -->');
  if (cmdsIdx === -1) {
    console.log('  跳过（无 cmds-start 标记）: ' + pagePath);
    return false;
  }

  // 手写区开头 = 文件头到 <!-- cmds-start -->
  const before = page.slice(0, cmdsIdx);

  // 检查是否已填充过 README（简单判断：手写区行数 > 10 行说明已有内容）
  const beforeLines = before.trim().split('\n').filter(l => l.trim());
  if (beforeLines.length > 10) {
    console.log('  跳过（手写区已有较多内容，可能已填充过）: ' + pagePath);
    return false;
  }

  // 处理 README：标题降一级，去掉第一行 # 标题
  let readmeContent = rawReadme.trim();

  // 去掉 YAML front matter（如果有）
  if (readmeContent.startsWith('---')) {
    const end = readmeContent.indexOf('---', 3);
    if (end !== -1) readmeContent = readmeContent.slice(end + 3).trim();
  }

  // 跳过第一行 # 标题（页面已有 # 标题）
  const lines = readmeContent.split('\n');
  let start = 0;
  if (lines[0] && lines[0].startsWith('# ')) {
    start = 1;
    // 跳过标题后的空行
    while (start < lines.length && lines[start].trim() === '') start++;
  }

  // 对剩余内容降级标题（# → ##, ## → ###, 等等）
  const processed = lines.slice(start).map(line => {
    if (line.startsWith('#')) {
      const match = line.match(/^(#+)/);
      if (match) {
        const level = match[1].length;
        // 最多到 ######
        if (level < 6) return '#'.repeat(level + 1) + line.slice(level);
      }
    }
    return line;
  }).join('\n');

  // 组装：手写区 + 换行 + README + <!-- cmds-start -->
  const after = page.slice(cmdsIdx);
  const newPage = before.trimEnd() + '\n\n---\n\n' + processed.trim() + '\n\n' + after;

  writeFileSync(pagePath, newPage);
  console.log('  已填充: ' + basename(pagePath));
  return true;
}

// 主流程
console.log('填充 README 到手写区...\n');

let filled = 0;
let skipped = 0;

for (const [dir, filename] of Object.entries(pluginPages)) {
  // 查找 README（大小写不敏感）
  const pluginPath = yunzaiDir + dir + '/';
  let readmePath = null;
  for (const name of ['README.md', 'readme.md', 'Readme.md', 'README.MD']) {
    const p = pluginPath + name;
    if (existsSync(p)) { readmePath = p; break; }
  }

  const pagePath = pluginsDir + filename;

  if (!readmePath) {
    console.log(dir + ' → 无 README');
    skipped++;
    continue;
  }

  if (fillPage(pagePath, readmePath)) {
    filled++;
  } else {
    skipped++;
  }
}

console.log('\n完成：填充 ' + filled + ' 个，跳过 ' + skipped + ' 个');
