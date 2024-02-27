
import fs from 'fs';
import log from '@ajar/marker';


log.magenta('start code...');

try{
    //read a text file synchronously
    let data = fs.readFileSync('./files/config.json','utf-8');
    data = JSON.parse(data);
    log.green('config file loaded!, Contents:',data);
    // log.cyan('data: ');
    console.dir(data)
    log.cyan('typeof data: ',typeof data);
    log.cyan('api: ',data.api);

}catch(err){
    log.red('Error reading the file:',err.message );
}

log.yellow('Some other tasks code...');
