import { ServerResponse } from "http";

const http= require('http');
const fs= require('fs');
//console.log('hello world');
const port:number= 9999;
const server= http.createServer(function(req:any,res:any){
    res.writeHead(200);
    fs.readFile('../index.html', function(error:any, data:any){
        if(error){
            res.writeHead(404);
            res.write('Error: file not found');
        }else{
            res.write(data);
        }
        res.end();
    })
});

server.listen(port, function(error:any){
    if(error){
        console.log('fuck', error);
    }else{
        console.log("Server listening on port: " + port);
    }
});
