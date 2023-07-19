const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req,res)=>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/motos.json')));
        res.render(path.resolve(__dirname,'../views/admin/administrar'),{motos});
    },
    create: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/admin/create'));
    },
    save : (req,res)=>{
        //Leer JSON - y lo parseamos 

        //Construir mi nuevo moto

        //Validar si el nuevo registro exise o no en mi JSON

        //Enviar mensaje al usuario por si existe el registro

        //Debemos determinar cual es el último registro y luego e incrememtamos 1

        //El nuevo ID se lo asigmamos al nuevo elemento

        //Agregar el nuevo elemento al archivo y recordar que debemos convertir a stringify (fswriter)

        //return res.redirect('/administrar');
    }

}