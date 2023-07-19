const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));

//Debemos indicar cual es el motor de plantillas que estamos usando EJS
app.set('view engine','ejs');

//Debemos indicar donde se encuentran nuestras vistas
app.set('views','./views')

//Tags que usamos en EJS
/* 
Incluir un partials
<%- include()%>
Logica de la programación
<% for(let i = 0; i < productos.length; i++){
}   
 %>
Como hacemos para imprimir algo en nuestro ejs
<%= productos.nombre %>
*/

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios como PUT - DELETE
app.use(methodOverride('_method'));

//Requerir las rutas
const webRoutes = require('./routes/web');
const productoRoutes = require('./routes/producto');
const adminRoutes = require('./routes/admin');

//Para usar las rutas
app.use(webRoutes);
app.use(productoRoutes);
app.use(adminRoutes);
//Levantar servidor
app.listen(3001, 'localhost', ()=> console.log('Servidor corriendo en el puerto 3001'));
