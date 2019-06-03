//Instanciando o express e a rota
const express = require('express');

//Instanciando a rota
usuariosRota = express.Router();

usuariosRota.get ('/', (req, res) =>{
    return res.send ({messagem: 'Cheguei na rota usuários.'});
});

module.exports = usuariosRota;