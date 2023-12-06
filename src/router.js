const express = require('express');
const User = require('./models/User')
const router = express.Router();

router.put("/:id", async(req, res)=> {
    const user = await User.findByIdAndUpdate(req.params.id, {
        id: req.body.id,
        email: req.body.email,
        senha: req.body.senha,
        telefoneDDD: req.body.telefoneDDD,
        telefoneNumero: req.body.telefoneNumero,
        dataCriacao: req.body.dataCriacao,
        dataAtualizacao: req.body.dataAtualizacao,
        ultimoLogin: req.body.ultimoLogin
    })
    return res.send(user);
})

router.get('/', async (req,res) =>{
    const users = await User.find();
    res.send(users);
});

router.delete('/:id', async(req, res) =>{
    const user = await User.findByIdAndRemove(req.params.id);
    res.send(user);
})

router.post("/", async (req, res) => {
    const user = new User({
        id: req.body.id,
        email: req.body.email,
        senha: req.body.senha,
        telefoneDDD: req.body.telefoneDDD,
        telefoneNumero: req.body.telefoneNumero,
        dataCriacao: req.body.dataCriacao,
        dataAtualizacao: req.body.dataAtualizacao,
        ultimoLogin: req.body.ultimoLogin
    })

    await user.save();
    res.send(user);
});

module.exports = router;
