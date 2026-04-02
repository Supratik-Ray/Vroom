import express, { type Request, type Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/", (req: Request, res: Response) => {
  console.log("working");
});

io.on("connection", (socket) => {
  console.log(socket.id);
});

httpServer.listen(8000, () => console.log("server listening on port 8000"));
