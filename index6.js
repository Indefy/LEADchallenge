import fs from 'fs/promises';
import log from '@ajar/marker';
// import pkg from 'bluebird';
// import { resolve } from 'path';

console.time('benchmark');
const DIR_PATH = './LEADS';  
const users = [];
const usersIds = {};

(async () => {
// 1 - read the directory --> [fileNames...]
    const files_names = await fs.readdir(DIR_PATH);
// 2 - loop over file names array
    for(let file_name of files_names) {
        // 3 -    read the text file
        const content = await fs.readFile(`${DIR_PATH}/${file_name}`,'utf-8'); 
        // 4 -    optional concat all files content into a global variable
        // 5 -    split file content into lines
        const lines = content.split('\r\n');
        // 6 -    loop over line
            for(let line of lines) {
                // 7 -         split each line on , into array
                let [fb_id,full_name,email] = line.split(',');
                // 7.5 -       if this is a new fresh user
                if (!(fb_id in usersIds)) {
                    // 8 -             remove " charachters from full name
                    full_name = full_name.slice(1, -1);
                    // 9 -             build a user object
                    const user = {fb_id,full_name,email};
                    // 10 -            push user object to global users array
                    users.push(user);
                    usersIds[fb_id] = "ezmeralda"
                }
        }
    }

    // 11 - write users array into a json file
    await fs.writeFile('./users.json',  JSON.stringify(users, null, 2));
    // 12 - print the number of user
    log.info('number of users: ',users.length);
    // 13 - print the benchmark time : myProcess: 32.913ms;
    console.time('benchmark');
})().catch(log.error);




         //============================================================================================================================================================//                   
      


// async ()=> {
// const { reject } = pkg;

//     console.time('myProcess');
//     const users = [];
//     const DIR_PATH = './LEADS'; 

//     (async ()=>{
//         log.magenta('start code...');
        
//         let data = await fs.readdir(DIR_PATH);
//         log.cyan('FIle loaded!, Contents:',data);
//     })().catch(log.error);
     
//      ((files_names)=> {
//         const pending = files_names.map((file_name)=> {
            
//             return new Promise((resolve, reject) => {
//                 fs.readFile(`${DIR_PATH}/${file_name}`), (err, data) => {
//                     if (err) reject(err);
//                      return resolve(data);
//                 }
//                 console.log(files_names);
//             })
//         })
//     })
//             Promise.all(pending)
//                 promsie.then(content_array => {
//                     const content = content_array.join('\r\n');
//                                     const lines = content.split('\r\n');
                                    
//                                     for(let line of lines) {
                                        
//                                         let [fb_id,full_name,email] =  line.split(',');
//                                         // 7.5 -       if this is a new fresh user
                                        
//                                         full_name = full_name.slice(1,-1)
                                        
//                                             const user = {fb_id ,full_name ,email };
//                                             users.push(user)
//                                         }
//                                     })
                
// }



            //                         // const jsonData = JSON.stringify(users);
            
            //                         // fs.writeFile('data.json', jsonData)
            //                         // .then(() => {
                //                         //     console.log('JSON file has been saved!');
                //                         // })
                //                         // .catch((err) => {
                    //                         //     console.error('Error writing JSON file:', err);
                    //                         // });
                    
                    //                     // 12 - print the number of user
                    
                    //                             fs.readFile('./data.json', 'utf8')
                    
                    //                             .then((jsonString) => {
                        //                             const jsonData = JSON.parse(jsonString);
                        //                             const usersNum = jsonData.length;
                        
                        //                                     console.log('Number of users collected:', usersNum);
                        //                                 })
                        //                                     .catch((err) => {
                            //                                     console.error('Error reading JSON file:', err);
                            //                                 });
                            
                            //                                 //Number of users collected: 13087
                            
                            //                     // 13 - print the benchmark time
                            //                     console.log(users);
                            //                     console.timeEnd('myProcess'); //Took myProcess: 32.913ms.
                            
                            
         //============================================================================================================================================================//                   
      
// function readDir() {
//     console.time('myProcess');
//     (async ()=>{
//         log.magenta('start code...');
//         const fromDb = undefined;
//         let file_names = fromDb || [];
//         let data = await fs.readdir('..//LEADS');


        //Promise.each - Promise.map 
        // const data_split = item.split( ',' | data);
        // let content_arry = Array [''];
        // log.cyan('FIle loaded!, Contents:',data);


        // const array_files = file_names.push(...data)


        // const pending = data.map((data)=>{
        //     return fs.readFile('../LEADSchallenge/LEADS/${DIR_PATH}/${file_name}');
        // });
            // Promise.all(pending)
                // content_arry()=>{ const content = content_arry.join(file_names);
            // };
        // console.log(array_files);

        
//     })().catch(log.error);
// }



    
// console.time('myProcess');
// const users = [];
// const DIR_PATH = './LEADS'; 

// fs.readdir(DIR_PATH)

//     .then((files_names)=> {
//         const pending = files_names.map((file_name)=> {
            
//             return fs.readFile(`${DIR_PATH}/${file_name}`)
//                 .catch(log.error)
//         })
        
//         Promise.all(pending)
//             .then(content_array => {
//                 const content = content_array.join('\r\n');
                
//                 const lines = content.split('\r\n');
                
//                 for(let line of lines) {
                    
//                     let [fb_id,full_name,email] =  line.split(',');

//                     // const isDuplicate = users.some(user => user.full_name === full_name);
    
//                     // if (!isDuplicate) {
//                     //     const user = { fb_id, full_name, email };
//                     //     users.push(user);
//                     // }
//                     function dedupProperty(arr, PropName){
//                     const unique;
//                         [
//                          unique = new Map(arr.map(item => [item[PropName], item]));
//                          return Array.from(unique.values());
//                         ]
//                     }

//                     full_name = full_name.slice(1,-1)
                    
//                         const user = {fb_id ,full_name ,email };
//                         // users.push(user)
//                     }

//                 })  
//     })
                        // const jsonData = JSON.stringify(users);

                        // fs.writeFile('data.json', jsonData)
                        // .then(() => {
                        //     console.log('JSON file has been saved!');
                        // })
                        // .catch((err) => {
                        //     console.error('Error writing JSON file:', err);
                        // });
                        
                    // 12 - print the number of user

                            // fs.readFile('./users.json', 'utf8')

                            // .then((jsonString) => {
                            // const jsonData = JSON.parse(jsonString);
                            // const usersNum = users.length;
                            
                            //         console.log('Number of users collected:', usersNum);
                            //     })
                            //         .catch((err) => {
                            //         console.error('Error reading JSON file:', err);
                            //     });

                                //Number of users collected: 13087

                    // 13 - print the benchmark time
                    // console.log(users);
                    // console.timeEnd('myProcess'); //Took myProcess: 32.913ms.