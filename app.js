var express = require('express')
var bodyParser = require('body-parser')
var Corte = require('./models/user')
//var session = require('express-session')
var cookieSession = require('cookie-session')
var methodOverride = require('method-override')
var http = require('http')
var router = express.Router()
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
	Corte.find({'entregado': undefined}).sort({'extendido':-1}).exec(function(err,datos){
	  if(err) console.log(err);
	  res.render('app/home',{
		  datos:datos})
	})
})


app.get('/new', function(req, res){
	res.render('new')
})
app.get('/signup', function(req, res){
		res.render('signup')
	})

app.get('/m3', function(req, res){
		Corte.find({'modu':3,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app/m3',{m1:m1})
		})
	})
app.get('/m4', function(req, res){
		Corte.find({'modu':4,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app/m4',{m1:m1})
		})
	})
app.get('/m7', function(req, res){
		Corte.find({'modu':7,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app/m7',{m1:m1})
		})
	})
	app.get('/m10', function(req, res){
		Corte.find({'modu':10,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app/m10',{m1:m1})
		})
	})
app.get('/m11', function(req, res){
		Corte.find({'modu':11,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app/m11',{m1:m1})
		})
	})
app.get('/m13', function(req, res){
		Corte.find({'modu':13,'entregado':undefined}).sort({fecha:1})
		.exec(function(err,m1){
		  if(err) console.log(err);
		   res.render('app/m13',{m1:m1})
		})
	})

	

app.post('/buscar', function(req, res){
	Corte.find({'op':req.body.buscar}).sort({fecha:-1})
	.exec((err,busq)=>{
		if(err) console.log(err);
		res.render('app/buscar',{busq:busq})
	})
})
app.post('/borrar', function(req, res){
	Corte.find({'op':req.body.borrar}).sort({fecha:-1})
	.exec((err,dat)=>{
		if(err) console.log(err);
		res.render('app/borrar',{dat:dat})
	})
})
app.post('/f_prog/:id', function(req, res){
	Corte.update({_id: req.params.id}, 
	{ $set: { 'fecha': req.body.f_prog } }).exec(),
	res.render('signup')
		})
app.post('/f_ext/:id', function(req, res){
			Corte.update({_id: req.params.id}, 
			{ $set: { 'extendido': req.body.f_ext } }).exec(),
			res.render('signup')
				})

app.get('/del/:id', (req, res)=>{
	Corte.findOneAndRemove({_id: req.params.id},function(err){
		  if(!err){
			res.render('signup')
		  }else{
			console.log(err)
		  }
		})
	  })

app.post('/users', function(req, res){
	/*Corte.find({op:req.body.op,trazo:req.body.trazo}).exec(), function(err){
	if(err ){
		res.send('Hubo un error al guardar el usuario')}
	else{*/
	var corte=new Corte({op: req.body.op,
						trazo: req.body.trazo,
						ref: req.body.ref,
						uds: req.body.uds,
						modu: req.body.modu,
						fecha: req.body.fecha
						})
corte.save().then(function(us){
	console.log(corte)
	res.render('signup')
	}
)
})

app.post('/trazo', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.trazo1, trazo:req.body.t_tr}, 
	{ $set: { trazo1: f.toLocaleString() } }).exec(function(err,ok){
		if(ok==null){
			res.render('app/info',{nom:'Aux. de telas'})}
		else{
			res.render('new')}
	})})
app.post('/extendido', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.extendido, trazo:req.body.t_ex}, 
	{ $set: { extendido: f.toLocaleString() } }).exec(function(err,ok){
		if(ok==null){
			res.render('app/info',{nom:'Extendedor'})}
		else{
			res.render('new')}
	})})
app.post('/corte', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.corte,trazo:req.body.t_co}, 
		{ $set: { corte: f.toLocaleString() }}).exec(function(err,ok){
			if(ok==null){
				res.render('app/info',{nom:'Cortador'})}
			else{
				res.render('new')}
		})})
app.post('/tiqueteo', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.tiqueteo, trazo:req.body.t_ti },
		 { $set: { tiqueteo: f.toLocaleString() }}).exec(function(err,ok){
			if(ok==null){
				res.render('app/info',{nom:'Tiqueteador'})}
			else{
				res.render('new')}
		})})
app.post('/preparacion', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.preparacion, trazo:req.body.t_pr }, 
		{ $set: { preparacion: f.toLocaleString() }}).exec(function(err,ok){
			if(ok==null){
				res.render('app/info',{nom:'Preparador'})}
			else{
				res.render('new')}
		})})
app.post('/entrega', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.entrega, trazo:req.body.t_in }, 
		{ $set: { entregado: f.toLocaleString() }}).exec(function(err,ok){
			if(ok==null){
				res.render('app/info',{nom:'Integrador'})}
			else{
				res.render('new')}
		})})
		
//app.use('/app', session_middleware)
server.listen(9000)
console.log('conectado en servidor 9000')
