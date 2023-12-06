const express = require('express');
const User = require('./models/User')
const router = express.Router();

router.put("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            id: req.body.id,
            email: req.body.email,
            senha: req.body.senha,
            telefoneDDD: req.body.telefoneDDD,
            telefoneNumero: req.body.telefoneNumero
        });
        if (!user) {
            return res.status(404).send("Usuário não encontrado")
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            res.status(404).send("Nenhum registrado até o momento");
        }
        res.send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send("Usuário Não encontrado")
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.post("/", async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
