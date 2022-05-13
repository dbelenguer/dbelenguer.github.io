import { createReadStream, createWriteStream } from 'fs';
import markdownpdf from 'markdown-pdf';

const { pathname: index } = new URL('../index.md', import.meta.url)

createReadStream(index)
    .pipe(markdownpdf())
    .pipe(createWriteStream('dbelenguer-cv.pdf'))
