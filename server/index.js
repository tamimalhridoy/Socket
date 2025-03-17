const express = require("express");
const app = express();
const { Server } = require("socket.io");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://socket:tamim@hridoy@cluster0.bh4tq.mongodb.net/socket?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Data Connected!"));

const server = app.listen(3000, () => {
  console.log("Server is running!");
});

const io = new Server(server, {
  cors: "*",
});

io.on("connect", (socket) => {
  socket.on("message-Clint", (data) => {
    console.log(data);
    io.emit("res_server", data);
  });

  //   console.log("User connected ", socket.id);
  //   socket.on("disconnect", () => {
  //     console.log("Client disconnected");
  //   });
});
