const fs = require('fs')

function read(route, callBack){
    fs.readFile(route, (err, data) =>{
         //   console.log(data);
         callBack(data.toString())
    })
}
function write(route, content, callBack){
    fs.writeFile(route, content, (err)=>{
        if(err)
        console.log('Error writing file: ${err}')
        else
        console.log('Sucess!!')
    })
}
// write(`${__dirname}/MyFile.txt`, 'Hello im the content')
 read(`${__dirname}/MyFile.txt` , console.log)