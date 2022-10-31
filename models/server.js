const express = require ('express');


class Server {
    constructor(){
        this.app = express()
        this.routes();

    } 
    routes(){
     
        this.app.get('/precios', (req, res) => res.send('Endpoint para precios'))
     
    }
       

       
        listen(){
            this.app.listen(process.env.PORT,  ()=>
 
            console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT))
        }}
 
module.exports = Server