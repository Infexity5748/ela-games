import fs from 'node:fs';
import path from 'node:path';

const source = '/private/tmp/ela-2048-source';
const destination = path.resolve('games/2048');
fs.mkdirSync(destination, { recursive: true });
for (const name of ['js', 'meta', 'favicon.ico', 'LICENSE.txt']) {
  fs.cpSync(path.join(source, name), path.join(destination, name), { recursive: true });
}
fs.mkdirSync(path.join(destination, 'style'), { recursive: true });
const css = fs.readFileSync(path.join(source, 'style/main.css'), 'utf8')
  .replace(/@import\s+url\([^;]+;/g, '')
  .replace(/"Clear Sans"/g, 'Arial');
fs.writeFileSync(path.join(destination, 'style/main.css'), css);
let html = fs.readFileSync(path.join(source, 'index.html'), 'utf8');
const noticeStart = html.indexOf('    <strong class="important">Note:</strong>');
const noticeEnd = html.indexOf('    </p>', noticeStart);
if (noticeStart < 0 || noticeEnd < 0) throw new Error('Upstream official-site notice changed');
html = html.slice(0, noticeStart) + '    An independently hosted copy of 2048. <a href="LICENSE.txt">MIT licence</a>.' + html.slice(noticeEnd);
fs.writeFileSync(path.join(destination, 'index.html'), html);
