const fs = require('fs');
const path = require('path');

const diretorio = process.argv[2];
const extencao = '.' + process.argv[3];

fs.readdir(diretorio, function (err, lista) {
    if (!err) {
        for (arquivo of lista) {
            if (path.extname(arquivo) === extencao) {
                console.log(arquivo);
            }
        }
    }
});