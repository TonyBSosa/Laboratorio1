const {Router} = require('express')
//uso {router} para destructurar un objeto y solo obtener lo que ocupa de el
const router =  Router();
//inicializo la funcion router

router.get('/', (req, res) => res.send('GET Endpoint para precios'))
router.post('/', (req, res) => res.send('Post Endpoint para precios'))
router.put('/', (req, res) => res.send('PUT Endpoint para precios'))
router.delete('/', (req, res) => res.send('DELETE Endpoint para precios'))

module.exports=router