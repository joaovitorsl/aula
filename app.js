//Chamando a biblioteca do ExpressJS
const express = require('express');

//Instanciando o Express
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log('Servidor no ar');
})

app.get('/', function(req, res){
    return res.send(`<h1>Acessei a macaxeira</h1>`);
})

app.get('/usuario', function(req, res){
    return res.send(`<h1>Acessei a Laura Macaxeira</h1>`);
})

app.get('/usuario/listagem', function(req, res){
    return res.send(`<h1>Listagem de Usuários</h1>`);
})

app.get('/usuario/cadastro', function(req, res){
    return res.send(`<h1>Cadastro de Usuários</h1>`);
})

app.get('/usuario/atualizar', function(req, res){
    return res.send(`<h1>Atualizar de Usuários</h1>`);
}) 

app.get('/usuario/excluir', function(req, res){
    return res.send(`<h1>Listagem de Usuários</h1>`);
})

console.log('Maria buchecha')