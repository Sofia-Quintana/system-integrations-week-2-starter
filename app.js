const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const cors = require('cors');
const content = require("./content/cards.json");
const bodyParser = require('body-parser');

//data handlers
let users = [];
let messages = [];
let connections = 0;

// Middlewares
app.use(express.static("public"));
app.use(bodyParser.json());

// Templating engine setup
app.set("view engine", "ejs");

// Enpoints

app.get("/", (req, res) => {
  res.render("index", { content });
});

app.get('/users', (request, response) => {
  try {
    response.status(200).json(users);
  } catch(error) {
    console.error(error);
    response.status(404).json({ response: '404 not found'});
  }
});

app.get('/messages', (request, response) => {
  try {
    response.status(200).json(messages);
  } catch(error) {
    console.error(error);
    response.status(404).json({ response: '404 not found'});
  }
});

//Socket actions
io.on('connection', (socket) => {
  connections++;
  console.log(`New user connected, total connected: ${connections}`);
  users.push({ id: socket.id, name: `User ${users.length+1}`});
  socket.on('disconnect', () => {
    connections--;
    console.log(`User disconnected, total connected: ${connections}`);
  });
});

// Starting server.
server.listen(3000, () => {
  console.log("Listening on port 3000...");
});
