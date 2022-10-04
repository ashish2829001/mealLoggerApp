const express   = require('express');
const http      = require("http");
const mongoose  = require("mongoose");
const bodyparser = require('body-parser');
const userRouter = require("./routers/userRouter");

const app = express();

//Body Parser Preset
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

// MongoDB connection
mongoose.connect("mongodb+srv://atsfrshr:ashish123@cluster0.itl5tbt.mongodb.net/food_app?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch(err => {
    console.log("Error connecting to database",err.message);
});

// Serving the assets
app.use(express.static(__dirname + '/assets'));

// APIs
app.use('/api', userRouter);

// server setup
const port = 5050;
app.set("port", port);

// Server setup
const onError = error => {
    console.error(error);
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    console.log("Listening on " + bind);
};

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port, () => {
  console.log("Server started on port "+port);
});