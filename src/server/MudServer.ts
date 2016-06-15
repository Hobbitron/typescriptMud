var	http = require('http');
var socketIO	= require('socket.io');
var fs = require('fs');

export class MudServer {  

  private handler (req, res) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }
  
      res.writeHead(200);
      res.end(data);
    });
  }    
  
  public start() {

    var serv = http.createServer(this.handler);  

    serv.listen(5000);
    
    var socketServer = socketIO(serv);
    
    // socketServer.on('connection', (socket: SocketIO.Socket) => {
    //         var sc = new socketConnection(socket);
    //         sc.authenticate().then((success) => {
    //           this.enterWorld(sc);
    //         })
    //         console.log( socket.id + " connected " + new Date())
    //         if (!this.connectionQueue)
    //           this.connectionQueue = new Array<socketConnection>();
    //         this.connectionQueue.push(sc);                        
    //     });
  }
}