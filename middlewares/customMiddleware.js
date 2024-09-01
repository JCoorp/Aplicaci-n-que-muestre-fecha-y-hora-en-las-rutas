const customMiddleware = (req, res, next) => { // Define un middleware personalizado que ejecuta una acción específica.
    console.log('Middleware específico ejecutado en la nueva ruta'); // Muestra un mensaje en la consola cada vez que se accede a la ruta que utiliza este middleware.
    next(); // Llama a la siguiente función en la cadena de middlewares.
};

module.exports = customMiddleware; // Exporta el middleware para que pueda ser utilizado en otras partes de la aplicación.
