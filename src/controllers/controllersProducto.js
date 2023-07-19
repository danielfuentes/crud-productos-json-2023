const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req,res)=>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/motos.json')));
        res.render(path.resolve(__dirname,'../views/productos/productos'),{motos});
    },
}
