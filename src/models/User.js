const mongoose = require('mongoose');
require('dotenv').config();

DBPASSWORD = process.env.DBPASSWORD;

mongoose.connect(`mongodb+srv://fabricio176:${DBPASSWORD}@auth-api.gjlauri.mongodb.net/?retryWrites=true&w=majority`);

const User = mongoose.model('User', {
    id: String,
    email: String,
    senha: String,
    telefoneDDD: String,
    telefoneNumero: String,
    dataCriacao: {type: Date, default:Date.now},
    dataAtualizacao:{type: Date, default:Date.now},
    ultimoLogin: Date
})

module.exports = User;
