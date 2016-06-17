let	http = require("http");
let socketIO	= require("socket.io");
let fs = require("fs");

export class MudServer {

  private handler (req, res) {
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

    serv.listen(5000);

    let socketServer = socketIO(serv);

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