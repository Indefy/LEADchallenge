
//---------------------------------------------
//           using Promises
//---------------------------------------------

import fs from 'fs/promises';
import log from '@ajar/marker';


// log.magenta('start code...');

// fs.readFile('./files/example.txt', 'utf-8')
//   .then(data => log.cyan('FIle loaded!, Contents:',data))
//   .catch(err=> log.red(err.message))

// log.yellow('Some other tasks code...'); 

//---------------------------------------------
//         using an async function
//---------------------------------------------
 
async function myReadFile(){
    try{
        log.magenta('start code...');
        
        let data = await fs.readFile('./files/example.txt', 'utf-8');
        log.cyan('FIle loaded!, Contents:',data)

    }catch(error){
        log.error(error);
    }
}
//invoking an async function will always return a promise...
 myReadFile() 
    .then(()=> log.yellow('Some other tasks code...'))

//-----------------------------------------------------------
//   self executing anonymous async function
//   top-level await is on its way to future versions...
//-----------------------------------------------------------
 
// (async ()=>{
//     try{
//         log.magenta('start code...');
        
//         let data = await fs.readFile('./files/example.txt', 'utf-8');
//         log.cyan('FIle loaded!, Contents:',data)

//     }catch(error){
//         log.error(error);
//     }
// })();

//--------------------------------------------
//   my favorite composition... shorter...
//--------------------------------------------

// (async ()=> {
//     log.magenta('start code...');
    
//     let data = await fs.readFile('./files/example.txt', 'utf-8');
//     log.cyan('FIle loaded!, Contents:',data);

// })().catch(log.error);
