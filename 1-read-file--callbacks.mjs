import fs from 'fs';
import log from '@ajar/marker';

log.yellow('first line of code...');

fs.readFile('./files/example.txt', 'utf-8', (err,data) => {
    if(err) {
        log.red(err.message)
    } else {
        log.cyan('FIle loaded!, Contents:',data)
    }
});

log.yellow('last line of code...');



/* 
fs.readFile('./files/config.json', 'utf-8', (err,data) => {
    if(err) {
        log.red(err.message)
    } else {
        let obj = JSON.parse(data);
        log.cyan('config loaded!, version:' + obj.version)
    }
}); 
*/

