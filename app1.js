var express = require('express')
var bodyParser = require('body-parser')
var Corte = require('./models/user')
var methodOverride = require('method-override')
var http = require('http')
var app = express()
var server = http.Server(app)

app.use('/public', express.static('public'))
app.use(bodyParser.json()) //para peticiones application json
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.set('view engine', 'jade')

app.get('/', function(req, res){
	Corte.find({entregado: undefined}).sort({extendido:-1}).then(function(datos){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro=0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
				res.render('app1/home1',{datos,pro,cor,tot})
		  
			})
		})
	})
})
app.get('/m3', function(req, res){
	Corte.find({'modu':3,'entregado':undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined, modu:3}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro=0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined, modu:3}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
	   			res.render('app1/m3',{m1,pro,cor,tot})
			})
		})
	})
})
app.get('/m4', function(req, res){
	Corte.find({'modu':4,'entregado':undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined, modu:4}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro=0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined, modu:4}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
	   			res.render('app1/m4',{m1,pro,cor,tot})
			})
		})
	})
})
app.get('/m7', function(req, res){
	Corte.find({'modu':7,'entregado':undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined, modu:7}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro=0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined, modu:7}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
			   res.render('app1/m7',{m1,pro,cor,tot})
			})
		})
	})
})
app.get('/m10', function(req, res){
	Corte.find({'modu':10,'entregado':undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined, modu:10}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro=0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined, modu:10}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
				res.render('app1/m10',{m1,pro,cor,tot})
			})
		})
		})
})
app.get('/m11', function(req, res){
	Corte.find({'modu':11,'entregado':undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined, modu:11}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro=0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined, modu:11}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
				res.render('app1/m11',{m1,pro,cor,tot})
			})
		})
		})
})
app.get('/m13', function(req, res){
	Corte.find({'modu':13,'entregado':undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined, modu:13}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro=0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined, modu:13}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
				res.render('app1/m13',{m1,pro,cor,tot})
			})
		})
	})
})

app.get('/est', function(req, res){
	Corte.find({est:1,estampado:undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{est:1, extendido:undefined, estampado:undefined}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro =0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{est:1,estampado:undefined}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
				res.render('app1/est1',{m1,pro,cor,tot})
			})
		})
	})
})


app.post('/buscar', function(req, res){
	Corte.find({'op':req.body.buscar}).sort({fecha:-1})
	.exec((err,busq)=>{
		if(err) console.log(err);
		res.render('app1/buscar1',{busq:busq})
	})
})


server.listen(9019)
console.log('conectado en servidor 9019')
