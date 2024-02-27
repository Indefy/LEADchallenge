import log from '@ajar/marker';
import { URL } from 'url'; // in Browser, the URL in native accessible on window

// //absolute path of current working directory
log.magenta('process.cwd()', process.cwd());

const __filename = new URL('', import.meta.url).pathname;

// Will contain trailing slash
const __dirname = new URL('.', import.meta.url).pathname;

log.magenta('__filename',__filename);
log.magenta('__dirname',__dirname);