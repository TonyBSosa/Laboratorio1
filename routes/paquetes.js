const {Router} = require('express')
//uso {router} para destructurar un objeto y solo obtener lo que ocupa de el
const router =  Router();
//inicializo la funcion router

router.get('/', (req, res) => res.send('GET Endpoint para paquetes'))
router.post('/', (req, res) => res.send('Post Endpoint para enpaquetesvio'))
router.put('/', (req, res) => res.send('PUT Endpoint para paquetes'))
router.delete('/', (req, res) => res.send('DELETE Endpoint para paquetes'))

module.exports=router