const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./database');
const e = require('cors');
require("./src/model/Posteo");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

app.set("views", __dirname + "/src/views");

app.use('/public', express.static('public'));

app.set("view engine", "ejs");

app.use("/posteos", require("./routes/posteos.routes"));

app.listen(4000, () => {
    sequelize.sync({ force: false });
    console.log("Server on, Port 4000");
});