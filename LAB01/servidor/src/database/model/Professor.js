const mongoose = require("mongoose");

const ProfessorSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    idade: Number,
    curso: String,
    
    escolaridade: {
        type: String,
        required: true
    },
},{colection:'professor'});

module.exports = mongoose.model('Professor', ProfessorSchema);