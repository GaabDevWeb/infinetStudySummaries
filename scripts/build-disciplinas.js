
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content');
const DISCIPLINAS_JS = path.join(ROOT, 'src', 'js', 'disciplinas.js');

function listAulas(disciplinaId) {
  const dir = path.join(CONTENT_DIR, disciplinaId);
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    return [];
  }
  const files = fs.readdirSync(dir);
  const aulas = files
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((f) => f.slice(0, -3))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return aulas;
}

function main() {
  const src = fs.readFileSync(DISCIPLINAS_JS, 'utf8');

  const blockRegex = /\{\s*id:\s*'([^']+)',\s*nome:\s*'([^']+)',\s*aulas:\s*\[[^\]]*\]\s*\}/g;
  let match;
  let newContent = src;

  while ((match = blockRegex.exec(src)) !== null) {
    const fullBlock = match[0];
    const id = match[1];
    const nome = match[2];
    const aulas = listAulas(id);
    const aulasStr = aulas.map((a) => "'" + a + "'").join(', ');
    const newBlock = fullBlock.replace(
      /aulas:\s*\[[^\]]*\]/,
      'aulas: [' + aulasStr + ']'
    );
    newContent = newContent.replace(fullBlock, newBlock);
  }

  fs.writeFileSync(DISCIPLINAS_JS, newContent, 'utf8');
  console.log('disciplinas.js atualizado com as aulas encontradas em content/');
}

main();

//node scripts/build-disciplinas.js