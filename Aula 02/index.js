const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send('Hello World');
});

app.get("/cachorros", (req, res) => {
    res.send('Oi eu sou um dog')
});

app.post("/alunos", (req, res) => {
    console.log(req.body);
    res.send('Oi eu sou um aluno')
});

app.put("/professores", (req, res) => {
    console.log(req.body);
    console.log("Atualizar dados de professores");
    res.send('Oi eu sou um aluno')
});

app.listen(3000, () => {
    console.log("Hello World");
});