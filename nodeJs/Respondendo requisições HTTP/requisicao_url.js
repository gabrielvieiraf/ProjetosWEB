// requisições com base na url requisitada

// require é uma função javascript que permite incorporar outros arquivos no script atual 
var http = require('http')

// Criando um servidor com o método createServer
// Utilizaremos normalmente funções como argumentos
var servidor = http.createServer( function (req,res) {
	
					var categoria = req.url;
					
					switch (categoria){
						
						case '/servidor_01':
							res.end('<html><body>Servidor 01!</body></html>');
							break;
						
						case '/servidor_02':
							res.end('<html><body>Servidor 02!</body></html>');
							break;	
						
						default:
              res.end('<html><body>Servidor Principal!</body></html>');
					}
				   
});

servidor.listen(8080);
