const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

// Middlewares
app.use(morgan("tiny"));
app.use(helmet());
app.use(express.json());

app.get("/",(req,res) =>{

  res.json({"message":"Welcome to medi_helper backend"});
});


module.exports = app;