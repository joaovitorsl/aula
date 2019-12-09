const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const alunosRouter = require("./src/alunos/alunosRouter");
const professoresRouter = require("./src/professores/professoresRouter");
const funcionariosRouter = require("./src/funcionarios/funcionariosRouter");
const salasDeAulaRouter = require("./src/salasdeaula/salasDeAulaRouter");
const database = require('./src/database/main')

app.use(bodyParser.json());
app.use("/alunos", alunosRouter);
app.use("/professores", professoresRouter);
app.use("/funcionarios", funcionariosRouter);
app.use("/salasdeaula", salasDeAulaRouter);

app.get("/", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.listen("3000", () => {
    console.log("Seja bem-vindo ao NodeJS")
});