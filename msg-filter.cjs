const input = require('fs').readFileSync(0, 'utf8');
const cleaned = input
  .split('\n')
  .filter(line => {
    const trimmed = line.trim().toLowerCase();
    if (trimmed.startsWith('co-authored-by:') && trimmed.includes('cursor')) return false;
    if (trimmed.startsWith('made-with:') && trimmed.includes('cursor')) return false;
    return true;
  })
  .join('\n')
  .replace(/\n{3,}/g, '\n\n')
  .trimEnd() + '\n';
process.stdout.write(cleaned);
