require("dotenv").config();

const http = require("http");

const socketIo = require("socket.io");

const app = require("./src/app");

const server = http.createServer(app);

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

const io = socketIo(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

const users = [];
io.on("connection", (socket) => {
  socket.on("sendMessage", (payload) => {
    io.emit("newMessage", payload);
  });
  socket.on("typing", (data) => {
    if (data.typing) {
      socket.broadcast.emit("isTyping", "est en train d'écrire...");
    } else {
      socket.broadcast.emit("isTyping", "");
    }
  });
  socket.on("newUser", (data) => {
    users.push(data);
    io.emit("newUserResponse", users);
  });
});

server.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
