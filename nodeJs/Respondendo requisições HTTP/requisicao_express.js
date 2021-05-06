// Importando e Chamando função express
var express = require('express')();

express.get('/', function(req,res) {
	res.send("<html><body>Servidor Principal!</body></html>")
});

express.listen(8080, function () {
	console.log('Servidor com Express');
});
