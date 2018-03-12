var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/globo')
var Schema = mongoose.Schema

var user_schema = new Schema({
  op: {type:String},
  trazo: {type:String},
  ref: {type:String},
  uds: {type:Number},
  modu: {type:Number},
  est:{type:Number},
  fecha: {type: Date },
  fecha1:{type:Number},
  trazo1:{type:String},
  extendido: {type: String},
  corte: {type:String},
  tiqueteo: {type:String},
  preparacion: {type:String},
  entregado: {type:String},
  estampado:{type:String},
  date: {type:Date, default: Date.now}
})

var Corte = mongoose.model('Corte', user_schema)

module.exports = Corte
