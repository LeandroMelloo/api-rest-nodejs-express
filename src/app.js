const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// envie dados no formato Json
app.use(express.json());

// cors disponibiliza acesso a API para ser acessada publicamente
app.use(cors());

// Iniciando DB
mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true });
requireDir("./src/model");

// ROTAS ===============================================
// Incluindo nossas rotas definidas no arquivo routes/index.js
var index = require('./routes/rotas');
// definindo nossas rotas na aplicação
app.use('/', index);

app.listen(3000);