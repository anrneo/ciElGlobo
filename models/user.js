var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/globo')
var Schema = mongoose.Schema
var modu_pos_val=['M3', 'M4', 'M7', 'SP', 'M10']
//var email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'ingresa un email valido']
/*var password_validation={
  validator: function(p){
    return this.password_confirmation==p
  },
  message:'Las contraseñas no son iguales'
}*/

var user_schema = new Schema({
  op: {type:String},
  trazo: {type:String},
  ref: {type:String},
  uds: {type:Number},
  modu: {type:Number},
  fecha: {type: Date,  },
  trazo1:{type:String},
  extendido: {type:String},
  corte: {type:String},
  tiqueteo: {type:String},
  preparacion: {type:String},
  entregado: {type:String},
  date: {type:Date, default: Date.now}
})
/*user_schema.virtual('password_confirmation').get(function(){
  return this.p_c
}).set(function(password){
  this.p_c = password
})*/
var Corte = mongoose.model('Corte', user_schema)

module.exports = Corte
