const mongoose = require("mongoose");

const SalaSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    bloco: String,

    disponivel: {   
        type: Boolean,
        required: true
    },
},{colection:'sala'});

module.exports = mongoose.model('SalaDeAula', SalaSchema);