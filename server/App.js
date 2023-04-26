const express = require('express')
const BodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require("mongoose");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const path = require('path')
const helmet = require('helmet')

const Route = require('./routes/Routes');
mongoose.connect(
    'mongodb+srv://karthik:12345677@cluster0.qttfhba.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });


const app = express()
const PORT = 4000
const logStream = rfs.createStream("storage.log", {
    interval: "1d",
    path: path.join(__dirname, "logs"),
  });
app.use(morgan("combined", { stream: logStream, immediate: true}));
app.use(helmet())
app.use(
	cors({
		origin: ["http://localhost:3000","http://localhost:3001"],
	})
);
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

app.use(Route)

app.listen(PORT,()=>{
    console.log(`App listening Properly tp port  :  ${PORT}`)
})