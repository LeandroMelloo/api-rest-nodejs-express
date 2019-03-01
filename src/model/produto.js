const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate"); 

const produtoSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now,}
});

produtoSchema.plugin(mongoosePaginate);

// código pra registrar um model na nossa aplicação
mongoose.model('Produto', produtoSchema);