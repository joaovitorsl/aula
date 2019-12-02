const mongoose = require("mongoose");

const AlunoSchema = mongoose.Schema({
    nome: String,
    idade: Number,
    serie: Number
},{colection:'aluno'});

module.exports = mongoose.model('Aluno', AlunoSchema);