import fs from 'fs';
import log from '@ajar/marker';

log.magenta('start code...');;


const content = 'Some really fresh new content here...'

fs.writeFileSync('./files/newFile.txt',content);

log.yellow('Some other code...');
