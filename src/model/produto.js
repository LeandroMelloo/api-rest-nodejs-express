const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate"); 

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

produtoSchema.plugin(mongoosePaginate);

// código pra registrar um model na nossa aplicação
mongoose.model('Produto', produtoSchema);