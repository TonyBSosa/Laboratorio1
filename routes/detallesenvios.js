const {Router} = require('express');
const { GetdetallesEnvios } = require('../Controllers/detallesEnvios');
//uso {router} para destructurar un objeto y solo obtener lo que ocupa de el
const router =  Router();
//inicializo la funcion router

router.get('/', GetdetallesEnvios)
router.post('/', PostdetallesEnvios)
router.put('/', PutdetallesEnvios)
router.delete('/', DeletedetallesEnvios)

module.exports=router