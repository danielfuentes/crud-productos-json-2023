const path = require('path');
const fs = require('fs');

let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/motos.json')));

module.exports = {
    index: (req,res)=>{
        //res.send(motos);
        res.render(path.resolve(__dirname,'../views/web/index'),{motos});
    }
}