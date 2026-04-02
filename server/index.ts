import express, { type Request, type Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

//http request handling
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/", (req: Request, res: Response) => {
  console.log("working");
});

//socket.io connection
io.on("connection", (socket) => {
  console.log(socket.id);
});

httpServer.listen(8000, () => console.log("server listening on port 8000"));
