const express =require('express');
const app = express();
require("dotenv").config();
app.use(express.json());

const usersRoute = require('./routes/usersRoute');
const dbConfig = require("./config/dbConfig");

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`NodeJS sever is running on port ${port} `));