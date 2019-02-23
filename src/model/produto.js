const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    // guarda a data de criação de cada produto
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// código pra registrar um model na nossa aplicação
mongoose.model('Produto', produtoSchema);