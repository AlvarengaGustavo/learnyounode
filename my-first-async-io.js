const fs = require('fs');

fs.readFile(process.argv[2],(err,data)=>{
    if(!err){
        let subs = data.toString();
        let array = subs.split('\n');
        console.log(array.length -1);
    }
});