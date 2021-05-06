// require é uma função javascript que permite incorporar outros arquivos no script atual 
var http = require('http')

// Criando um servidor com o método createServer
// Utilizaremos normalmente funções como argumentos
var servidor = http.createServer( function (req,res) {
                   res.end('<html><body>Criando meu primeiro Server</body></html>');
                });

servidor.listen(8080);
