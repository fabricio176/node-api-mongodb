// src/server.js
const app = require('./app');
const port = 3000;

app.listen(port, () => {
    console.log('Sevidor rodando na porta 3000');
})