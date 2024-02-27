
// console.time('myMission')//measure time
import fs from 'fs/promises';
import log from '@ajar/marker';


// write_file('./files/newFile.txt',content)
//     .then( ()=>  {
//         log.green('File written successfully!')
//         // console.timeEnd('myMission')//concluding time measuring
//     })
//     .catch( err => log.red('Error writing the file:',err.message))

(async ()=> {
    const content = 'Some really really really fresh new content here...';
    await fs.writeFile('./files/newFile.txt',content)
    log.green('File written successfully!')
})().catch( err => log.red('Error writing the file:',err.message))

//---------------------------------------------
//      the old callback hell way...
//---------------------------------------------
// log.magenta('start code...')

// const content = 'Some really really really fresh new content here...';

// fs.writeFile('./files/newFile.txt',content, (err)=> {
//       if(err){
//           log.red('Error writing the file:',err.message)
//       } else {
//           log.green('File written successfully!')
//       }
// })

// log.yellow('Some other code...')
