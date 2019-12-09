const mongoose = require("mongoose");

const AlunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    idade: Number,

    matricula:{
        type: String,
        required: true,
        unique: true
    },
    
    curso: String,
    serie: Number
},{colection:'aluno'});

module.exports = mongoose.model('Aluno', AlunoSchema);