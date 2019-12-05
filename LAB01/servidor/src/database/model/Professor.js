const mongoose = require("mongoose");

const ProfessorSchema = mongoose.Schema({
    nome: String,
    idade: Number,
    curso: String,
    escolaridade: String
},{colection:'professor'});

module.exports = mongoose.model('Professor', ProfessorSchema);