const mongoose = require("mongoose");

const FuncionarioSchema = mongoose.Schema({
    nome: String,
    idade: Number,
    disciplina: String,
    data: Date
});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);