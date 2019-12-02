const mongoose = require("mongoose");

const ProfessorSchema = mongoose.Schema({
    nome: String,
    idade: Number,
    disciplina: String,
    data: Date
});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);