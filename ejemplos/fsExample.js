const fs = require('fs')

function read(route, callback){
    fs.readFile(route, (err, data)=>{
        console.log(data);
        //callback(data.)
    })
}

function write(route, content, callback){
    fs.writeFile(route, content,(err)=>{
        if(err)
            console.error(`Error writing file: ${err}`)
        else
            console.log('success!!!')
    })
}
//write(`${__dirname}/myFile.txt`,'hi, im content')
read(`${__dirname}/myFile.txt`, console.log)