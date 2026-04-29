import WebSocket from "ws";
import { WebSocketServer } from "ws";
import http from 'http'

const server = http.createServer(function(request:any, response: any){
    console.log((new Date()) + 'Receiveed request for ' + request.url);
    response.end("hi there");
});

const wss = new WebSocketServer({server});

let userCount = 0;

wss.on('connection', function connection(ws){
    console.log("Client connected"); 
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data, {binary:isBinary});
            }
        });
    });

     ws.on('close', (code, reason) => {
        console.log("Disconnected:", code, reason.toString());
    });
    userCount++;
    console.log("user connected",userCount);
    
    ws.send("hello! message from server!!");
});

server.listen(8080,function(){
    console.log((new Date()) + 'Server is listening on port 8080');
    
});