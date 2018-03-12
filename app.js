var express = require('express')
var bodyParser = require('body-parser')
var Corte = require('./models/user')
var Imagen = require('./models/imagenes')
var methodOverride = require('method-override')
var http = require('http')
var fs = require('fs')
var upload_image = require('express-form-data')
var router = express.Router()
var app = express()
var server = http.Server(app)

app.use(upload_image.parse({keepExtensions:true}))
app.use('/public', express.static('public'))
app.use('/imagenes', express.static('imagenes'))
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
			res.render('app/home',{datos,pro,cor,tot})
			
			})
		})
	})
})

app.get('/new', function(req, res){
	res.render('new')
})
app.get('/mini', function(req, res){
	Imagen.find({}).sort({referencia:1})
    .then(function(ref){
      res.render('app/mini',{ref})
      })
})
app.post('/imagenes', function(req,res){
	var extension=req.files.archivo.name.split('.').pop()
        var data = {
         referencia: req.body.referencia,
        extension: extension,
        cliente: req.body.cliente}
				
        var imagen = new Imagen(data);
        imagen.save().then(function(us){
          fs.rename(req.files.archivo.path, 'imagenes/'+imagen._id+'.'+extension,(err)=>{})
			Imagen.find().sort({referencia:1})
			.then(function(ref){
		  	res.render('app/mini',{ref})
		  })
		})
})
app.get('/ref/:id', function(req, res){
	Imagen.findById(req.params.id).then(function(img){
		console.log(img)
		res.render('app/imgmini',{img})
})
})

app.get('/signup', function(req, res){
		res.render('signup')
	})

app.get('/m3', function(req, res){
	Corte.find({modu:3,entregado:undefined}).sort({extendido:-1}).then(function(m1){
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
	   			res.render('app/m3',{m1,pro,cor,tot})
			})
		})
	})
})

app.get('/m4', function(req, res){
	Corte.find({'modu':4,'entregado':undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined, modu:4}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro =0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined, modu:4}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
				res.render('app/m4',{m1,pro,cor,tot})
			})
		})
	})
})

app.get('/m7', function(req, res){
	Corte.find({'modu':7,'entregado':undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined, modu:7}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro =0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined, modu:7}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
				res.render('app/m7',{m1,pro,cor,tot})
			})
		})
	})
})

app.get('/m10', function(req, res){
	Corte.find({'modu':10,'entregado':undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined, modu:10}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro =0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined, modu:10}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
				res.render('app/m10',{m1,pro,cor,tot})
			})
		})
	})
})

app.get('/m11', function(req, res){
	Corte.find({'modu':11,'entregado':undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined, modu:11}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro =0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined, modu:11}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
				 res.render('app/m11',{m1,pro,cor,tot})
			})
		})
	})
})

app.get('/m13', function(req, res){
	Corte.find({'modu':13,'entregado':undefined}).sort({extendido:-1}).then(function(m1){
		Corte.aggregate([{$match:{entregado:undefined, extendido:undefined, modu:13}},
		{$group:{_id:0, suma:{$sum:'$uds'}}}])
		.then(function(pr){
			if (pr==0){var pro =0}
			else{var pro=pr[0].suma}
			Corte.aggregate([{$match:{entregado:undefined, modu:13}},
			{$group:{_id:0, suma:{$sum:'$uds' } }}])
			.then(function(to){
				if(to==0){var tot=0}
				else{var tot=to[0].suma}
				var cor=tot-pro
				res.render('app/m13',{m1,pro,cor,tot})
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
				res.render('app/est',{m1,pro,cor,tot})
			})
		})
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
	var f = new Date(req.body.f_prog)
	Corte.update({_id: req.params.id}, 
	{ $set: { 'fecha': f.toDateString() } }).exec(),
	res.render('signup')
})

app.post('/f_ext/:id', function(req, res){
	var f = new Date(req.body.f_ext)
	Corte.update({_id: req.params.id}, 
	{ $set: { 'extendido': f.toLocaleString() } }).exec(),
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
	var corte=new Corte({op: req.body.op,
						trazo: req.body.trazo,
						ref: req.body.ref,
						uds: req.body.uds,
						modu: req.body.modu,
						est: req.body.est,
						fecha: req.body.fecha
						})
	corte.save().then(function(us){
	res.render('signup')
	})
})

app.post('/trazo', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.trazo1, trazo:req.body.t_tr}, 
	{ $set: { trazo1: f.toLocaleString() } }).exec(function(err,ok){
		if(ok==null){
			res.render('app/info',{nom:'Aux. de telas'})}
		else{
			res.render('new')}
	})
})

app.post('/extendido', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.extendido, trazo:req.body.t_ex}, 
	{ $set: { extendido: f.toLocaleString() } }).exec(function(err,ok){
		if(ok==null){
			res.render('app/info',{nom:'Extendedor'})}
		else{
			res.render('new')}
	})
})

app.post('/corte', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.corte,trazo:req.body.t_co}, 
		{ $set: { corte: f.toLocaleString() }}).exec(function(err,ok){
			if(ok==null){
				res.render('app/info',{nom:'Cortador'})}
			else{
				res.render('new')}
	})
})

app.post('/tiqueteo', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.tiqueteo, trazo:req.body.t_ti },
		 { $set: { tiqueteo: f.toLocaleString() }}).exec(function(err,ok){
			if(ok==null){
				res.render('app/info',{nom:'Tiqueteador'})}
			else{
				res.render('new')}
		})
})

app.post('/preparacion', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.preparacion, trazo:req.body.t_pr }, 
		{ $set: { preparacion: f.toLocaleString() }}).exec(function(err,ok){
			if(ok==null){
				res.render('app/info',{nom:'Preparador'})}
			else{
				res.render('new')}
		})
})

app.post('/entrega', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.entrega, trazo:req.body.t_in }, 
		{ $set: { entregado: f.toLocaleString() }}).exec(function(err,ok){
			if(ok==null){
				res.render('app/info',{nom:'Integrador'})}
			else{
				res.render('new')}
		})
})

app.post('/estampado', function(req, res){
	var f = new Date()
	Corte.findOneAndUpdate({ op:req.body.estampado, trazo:req.body.t_es }, 
		{ $set: { estampado: f.toLocaleString() }}).exec(function(err,ok){
			if(ok==null){
				res.render('app/info',{nom:'Integrador'})}
			else{
				res.render('new')}
		})
})

server.listen(9000)
console.log('conectado en servidor 9000')
	


