let i = 0,result = 0;

for (argument of process.argv) {
    if(i>1){
        result += parseInt(argument);
    }
    i++;
}

console.log(result);