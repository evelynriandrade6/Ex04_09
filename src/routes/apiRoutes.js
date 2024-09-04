// Importa o módulo Router do express
// Router será utilizado para definir notas específicas da aplicação
const router = require('express').Router();
const controllerNumbers = require('../controllers/controllerNumbers');

// Rota POST 
router.post('/par/', controllerNumbers.checkPar);
router.post('/primo/', controllerNumbers.checkPrimo);

module.exports = router