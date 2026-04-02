import "dotenv/config";
import express, { type Request, type Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { connectToDb } from "./config/db.js";
import authRouter from "./routes/auth.routes.js";

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

app.use("/auth", authRouter);
app.get("/", (req: Request, res: Response) => {
  console.log("working");
});

//socket.io connection
io.on("connection", (socket) => {
  console.log(socket.id);
});

(async () => {
  await connectToDb(process.env.MONGODB_URL!);
  httpServer.listen(8000, () => console.log("server listening on port 8000"));
})();
