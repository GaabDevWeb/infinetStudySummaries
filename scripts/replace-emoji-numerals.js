/* eslint-disable no-console */
/**
 * Replaces keycap emoji numerals (1️⃣) with plain numbers (1) in Markdown files.
 *
 * Targets:
 * - content/ (all .md)
 * - resumoAulas/ (all .md)
 *
 * Replacements:
 * - 0️⃣..9️⃣ -> 0..9
 * - 🔟 -> 10
 */

'use strict';

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const TARGET_DIRS = ['content', 'resumoAulas'];

function walk(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const out = [];
  for (const ent of entries) {
    const full = path.join(dirPath, ent.name);
    if (ent.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function isMarkdownFile(p) {
  return p.toLowerCase().endsWith('.md');
}

function replaceEmojiNumerals(text) {
  // Keycap sequence: DIGIT + optional VS16 + combining enclosing keycap
  // e.g. "1️⃣" is "1\uFE0F\u20E3"
  const keycapDigits = /([0-9])\uFE0F?\u20E3/g;
  const ten = /\u{1F51F}/gu; // 🔟

  return text.replace(ten, '10').replace(keycapDigits, '$1');
}

function run() {
  let changedFiles = 0;
  let totalReplacements = 0;

  for (const d of TARGET_DIRS) {
    const absDir = path.join(ROOT, d);
    if (!fs.existsSync(absDir)) continue;

    const files = walk(absDir).filter(isMarkdownFile);
    for (const f of files) {
      const before = fs.readFileSync(f, 'utf8');
      const after = replaceEmojiNumerals(before);
      if (after !== before) {
        const replacements = (before.match(/[0-9]\uFE0F?\u20E3|\u{1F51F}/gu) || []).length;
        totalReplacements += replacements;
        fs.writeFileSync(f, after, 'utf8');
        changedFiles += 1;
        console.log(`Atualizado: ${path.relative(ROOT, f)} (${replacements} substituições)`);
      }
    }
  }

  console.log(`\nConcluído. Arquivos alterados: ${changedFiles}. Substituições: ${totalReplacements}.`);
}

run();

