const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");

// Iniciando o App
const app = express();

// envie dados no formato Json
app.use(express.json());

// cors disponibiliza acesso a API para ser acessada publicamente.
app.use(cors());

// Iniciando DB
mongoose.connect("mongodb://localhost:27017/produto", {  useNewUrlParser: true , 
useCreateIndex: true });
require("./model/produto");

// DEFININDO A APLICAÇÃO ==============================
// definindo local de arquivos públicos
app.use(express.static(__dirname + '/public'));
// logando todas as requisições no console
app.use(logger('dev'));
// parse application/x-www-form-urlencoded                                    
app.use(bodyParser.urlencoded({'extended':'true'}));
// parse application/json          
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// ROTAS ===============================================
// Incluindo nossas rotas definidas no arquivo routes/index.js
var index = require('./index');
// definindo nossas rotas na aplicação
app.use('/', index);

app.listen(3000);