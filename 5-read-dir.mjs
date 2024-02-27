
import fs from 'fs/promises';
import log from '@ajar/marker';


//---------------------------------------------
//      my favorite way...
//---------------------------------------------  
console.time('myProcess') ;
(async ()=>{

    log.magenta('start code...');
    
    let data = await fs.readdir('./files');
    // log.cyan('FIle loaded!, Contents:',data);
    console.log(data);
    console.timeEnd('myProcess');
    
})().catch(log.error);

//---------------------------------------------
//      the old callback hell way...
//---------------------------------------------
// import fs from 'fs';
// import log from '@ajar/marker';

// fs.readdir('./files',(err,files)=>{
//     if(err){
//         log.red('Error:',err.message);
//     } else {
//         log.obj(files,'file names:');
//     }
// });

// log.magenta('do some other stuff meanwhile...');
