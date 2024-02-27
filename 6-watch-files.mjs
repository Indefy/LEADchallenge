
import fs from 'fs';
import log from '@ajar/marker';


let data = fs.readFileSync('./files/config.json','utf-8');
data = JSON.parse(data);
log.cyan('config file loaded!, version:',data.version);


fs.watchFile('./files/config.json',(current, previous)=>{
    log.magenta('the config file has updated');
    let fileData = fs.readFileSync('./files/config.json')
    let conf = JSON.parse(fileData);
    log.yellow('new version is:', conf.version);
    log.obj(current,'current:')
    log.obj(previous,'previous:')
});
