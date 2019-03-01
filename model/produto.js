// contato.js => Define o model contato utilizando a biblioteca mongoose
var mongoose = require('mongoose');
 
// Cria um novo Schema com os campos que iremos utilizar no model Contato
var ContatoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now,},
});
 
//Define o model Contato
mongoose.model('Contato', ContatoSchema);