//Instanciando o express e a rota
const express = require ('express');

//Iniciando a rota
indexRotas = express.rotas();

indexRotas.get ('/' , (req,res) => {
    return res.send ({mensagem: 'CHEGUEI NA ROTA'});
});

module.exports = indexRotas;