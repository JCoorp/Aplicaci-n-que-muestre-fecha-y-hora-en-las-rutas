const logger = (req, res, next) => { // Define un middleware que registra la fecha, hora y URL de cada solicitud.
    const currentDate = new Date(); // Obtiene la fecha y hora actuales.
    console.log(`Acceso a ${req.originalUrl} en: ${currentDate.toLocaleString()}`); // Muestra la URL solicitada y la fecha y hora en la consola.
    console.log('Este es un mensaje desde el middleware logger.'); // Muestra un mensaje adicional en la consola.
    next(); // Llama a la siguiente función en la cadena de middlewares.
};

module.exports = logger; // Exporta el middleware para que pueda ser utilizado en otras partes de la aplicación.
