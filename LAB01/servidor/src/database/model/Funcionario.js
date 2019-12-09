const mongoose = require("mongoose");

const FuncionarioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    setor: String,
    idade: Number,
    data: Date
},{colection:'funcionario'});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);