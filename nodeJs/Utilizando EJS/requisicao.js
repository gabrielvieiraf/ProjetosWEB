// Importando e Chamando função express
var express = require('express')();

// Utilizando ejs 
express.set('view engine', 'ejs');

express.get('/', function(req,res) {
	res.render('secao/servidor_principal')
});

express.listen(8080, function () {
	console.log('Servidor com Express');
});
