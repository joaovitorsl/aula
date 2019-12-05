const mongoose = require("mongoose");

const SalaSchema = mongoose.Schema({
    nome: String,
    bloco: String,
    disponivel: Boolean
},{colection:'sala'});

module.exports = mongoose.model('Sala', SalaSchema);