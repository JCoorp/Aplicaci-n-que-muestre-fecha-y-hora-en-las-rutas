const express = require('express'); // Importa el framework Express.
const router = express.Router(); // Crea una instancia del enrutador de Express.

const customMiddleware = require('../middlewares/customMiddleware'); // Importa el middleware específico desde customMiddleware.js.
const logger = require('../middlewares/logger'); // Importa el middleware de registro desde logger.js.

// Primera ruta que utiliza el middleware logger
router.get('/routeA', logger, (req, res) => { // Define una ruta GET para `/routes1/routeA`.
    res.send('Has accedido a la ruta A'); // Envía "Has accedido a la ruta A" como respuesta cuando se accede a esta ruta.
});

// Segunda ruta que utiliza tanto el logger como el customMiddleware
router.get('/routeB', logger, customMiddleware, (req, res) => { // Define una ruta GET para `/routes1/routeB`.
    res.send('Has accedido a la ruta B con middlewares específicos'); // Envía un mensaje como respuesta después de que los middlewares se ejecuten.
});

module.exports = router; // Exporta el enrutador para que pueda ser utilizado en la configuración principal de la aplicación.
