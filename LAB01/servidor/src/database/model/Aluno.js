const mongoose = require("mongoose");

const AlunoSchema = mongoose.Schema({
    nome: String,
    matricula: Number,
    idade: Number,
    curso: String,
    serie: Number
},{colection:'aluno'});

module.exports = mongoose.model('Aluno', AlunoSchema);