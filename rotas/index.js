const express = require ('express');
indexRotas = express.rotas ();

indexRotas.get ('/' , (req,res) => {

    return res.send ({mensagem: 'CHEGUEI NA ROTA'});
});

module.exports = indexRotas;