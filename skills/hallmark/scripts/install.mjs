#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
if (args.includes('--help')) {
  console.log('node scripts/install.mjs [--project | --global] [--dry-run]\nDefaults to a project-local .agents/skills/hallmark. Existing installations are never overwritten.');
  process.exit(0);
}
if (args.some(a => !['--project','--global','--dry-run'].includes(a)) || (args.includes('--project') && args.includes('--global'))) {
  console.error('Invalid arguments. Use --help.'); process.exit(2);
}
const target = path.join(args.includes('--global') ? homedir() : process.cwd(), '.agents', 'skills', 'hallmark');
if (target === root || fs.existsSync(target)) {
  console.error(`Destination already exists; nothing changed: ${target}`); process.exit(1);
}
execFileSync(process.execPath, [path.join(root,'scripts/refcheck.mjs'),'--errors'], {stdio:'inherit'});
const themes = path.join(root,'references/themes');
execFileSync(process.execPath, [path.join(root,'scripts/theme.mjs'),'validate', ...fs.readdirSync(themes).filter(n=>n.endsWith('.md')).map(n=>path.join(themes,n))], {stdio:'inherit'});
if (args.includes('--dry-run')) {
  console.log(`Would install into ${target}`); process.exit(0);
}
fs.mkdirSync(path.dirname(target), {recursive:true});
fs.cpSync(root,target,{recursive:true,errorOnExist:true,force:false,filter:src=>!['node_modules','.hallmark','.DS_Store'].includes(path.basename(src))});
console.log(`Installed: ${target}\nInvoke: $hallmark <prompt>`);
