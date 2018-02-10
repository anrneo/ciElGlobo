var express = require('express')
var bodyParser = require('body-parser')
var Corte = require('./models/user')
//var session = require('express-session')
var cookieSession = require('cookie-session')
var methodOverride = require('method-override')
var http = require('http')

var app = express()
var server = http.Server(app)

app.use('/public', express.static('public'))
app.use(bodyParser.json()) //para peticiones application json
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
//app.use(session({
	//secret:'1225sdffgfcvbffsd',
	//resave: false,
	//saveUninitialized: false
//}))

app.use(cookieSession({
	name: 'session',
	keys: ['llave-1','llave-2']
}))
app.set('view engine', 'jade')
app.get('/', function(req, res){
	Corte.find({'entregado': undefined}).sort({fecha:1})
    .exec(function(err,datos){
	  if(err) console.log(err);
	  res.render('app1/home1',{datos:datos})
	})
})
app.get('/m3', function(req, res){
		Corte.find({'modu':3,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app1/m3',{m1:m1})
		})
	})
app.get('/m4', function(req, res){
		Corte.find({'modu':4,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app1/m4',{m1:m1})
		})
	})
app.get('/m7', function(req, res){
		Corte.find({'modu':7,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app1/m7',{m1:m1})
		})
	})
	app.get('/m10', function(req, res){
		Corte.find({'modu':10,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app1/m10',{m1:m1})
		})
	})
	app.get('/m11', function(req, res){
		Corte.find({'modu':11,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app1/m11',{m1:m1})
		})
	})
app.get('/m13', function(req, res){
		Corte.find({'modu':13,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app1/m13',{m1:m1})
		})
	})
app.post('/buscar', function(req, res){
	Corte.find({'op':req.body.buscar}).sort({fecha:-1})
	.exec((err,busq)=>{
		if(err) console.log(err);
		res.render('app1/buscar1',{busq:busq})
	})
})


//app.use('/app', session_middleware)
server.listen(9019)
console.log('conectado en servidor 9019')
