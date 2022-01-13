import express from "express";
const app = express();
import { createServer } from "http";
const http_server = createServer(app);
import { Server } from "socket.io";
const io = new Server(http_server);
const port = process.env.PORT || 3000;

// if not using a variable like req (request)
// then making it an underscore will make the compiler happy

// app.get('/', (req, res) => {
app.get("/", (_, res) => {
    res.sendFile(__dirname + "/index.html");
});
io.on("connection", (socket) => {
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });
});
http_server.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});

// no types here because all the types are inferred
