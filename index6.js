import fs from 'fs/promises';
import log from '@ajar/marker';


console.time('myProcess');
const users = [];
const DIR_PATH = './LEADS'; 

fs.readdir(DIR_PATH)

    .then((files_names)=> {
        const pending = files_names.map((file_name)=> {
            
            return fs.readFile(`${DIR_PATH}/${file_name}`)
                .catch(log.error)
        })
        
        Promise.all(pending)
            .then(content_array => {
                const content = content_array.join('\r\n');
                
                const lines = content.split('\r\n');
                
                for(let line of lines) {
                    
                    let [fb_id,full_name,email] =  line.split(',');
                    // 7.5 -       if this is a new fresh user
                    
                    full_name = full_name.slice(1,-1)
                    
                        const user = {fb_id ,full_name ,email };
                        users.push(user)
                    }

                })  
    })
                        // const jsonData = JSON.stringify(users);

                        // fs.writeFile('data.json', jsonData)
                        // .then(() => {
                        //     console.log('JSON file has been saved!');
                        // })
                        // .catch((err) => {
                        //     console.error('Error writing JSON file:', err);
                        // });
                        
                    // 12 - print the number of user

                            fs.readFile('./data.json', 'utf8')

                            .then((jsonString) => {
                            const jsonData = JSON.parse(jsonString);
                            const usersNum = jsonData.length;
                            
                                    console.log('Number of users collected:', usersNum);
                                })
                                    .catch((err) => {
                                    console.error('Error reading JSON file:', err);
                                });

                                //Number of users collected: 13087

                    // 13 - print the benchmark time
                    console.log(users);
                    console.timeEnd('myProcess'); //Took myProcess: 32.913ms.
















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
