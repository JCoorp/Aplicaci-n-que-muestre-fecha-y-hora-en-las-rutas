const express = require('express');
const app = express();

const logger = require('./middlewares/logger');  
const routes1 = require('./routes/routes1');  

app.use(logger);

app.use('/routes1', routes1);

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
