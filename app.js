
require('dotenv').config()

const Server = require ('./models/server')
const server = new server();
server.listen();






app.get('/', function (req,res){
    res.send('hello world')
})

app.listen(process.env.PORT, function(){
    console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT)
})