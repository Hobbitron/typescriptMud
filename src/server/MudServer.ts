/// <reference path="../../typings/index.d.ts" />


import WebSocket = require('ws');
import http = require('http');
import fs = require('fs');

var port: number = process.env.PORT || 5000;
var WebSocketServer = WebSocket.Server;

export class MudServer {

  private handler(req, res) {            
    fs.readFile(__dirname + "/index.html", function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end("Error loading index.html");
      }

      res.writeHead(200);
      res.end(data);
    });
  }

  public start() {    
    let serv = http.createServer(this.handler);    

    serv.listen(5001);

    let socketServer = new WebSocketServer({port: port});

    socketServer.on('connection', (sock) => {
      sock.send("somedata")
      console.log("connection");
    });
  }
}