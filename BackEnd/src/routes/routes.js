const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

const { 
    GetAllUsers,
    SaveData,
    InformationReceived,
    CheckIfTheUserExists,
    GetUser,
    UpdateUser,
    DeleteUser
} = require('./DataBase/DBmethods');

const API_Key = process.env.API_Key;

router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', async (req, res) => {
    const allUsers = await GetAllUsers()
    res.status(200).json(allUsers);
});


router.post('/SingUp', async (req, res) => {
    const { name, email, password } = req.body;
    
    if (InformationReceived(name, email, password)) {
        if (await CheckIfTheUserExists(name, email, password)) {
                await SaveData(name, email, password);
                res.send("Cadastrado com sucesso!");
            } else {
                res.send("Usuario ja existente!")
            }
    } else {
        return res.send("Envie os dados!");
    }
    
});

router.post('/SingIn', async (req, res) => {
    const { email, password } = req.body;

    if (CheckIfTheUserExists("", email, password)) {
        const user = await GetUser(email);
        res.json(user);
    } else {
        res.send("Crie esse usuario");
    }
});

router.put('/UpdateUser/:user_id', async (req, res) => {
    const userId = req.params.user_id;

    const newNameUser = req.body.newName;
    const newEmailUser = req.body.newEmail;
    const newPasswordUser = req.body.newPassword;

    const newinfo = {
        name: newNameUser,
        email: newEmailUser,
        password: newPasswordUser
    }
    if (await GetUser(userId, "") != {}) {
        await UpdateUser(userId, newinfo);
        res.send("Usuario atualizado");
    } else {
        res.send("Usuario inexistente");
    }
});

router.delete('/DeleteUser/:user_id', async (req, res) => {
    const userId = req.params.user_id;
    const user = await GetUser(userId, "");
    if (user) {
        await DeleteUser(userId);
        res.send(`Usuario deletado`);
    } else {
        res.send("Usuario inexistente");
    }
});

module.exports = router;
