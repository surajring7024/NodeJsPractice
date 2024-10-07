const http= require('http')

const server= http.createServer(
    function(req,res){

        if(req.url==='/getSecrets')
        res.end("secret page");
        else
        res.end("HelloWorld");

    }
);

server.listen(3000);



 
