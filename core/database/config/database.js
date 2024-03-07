var mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.static('core/api'));

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Paolo2002-"
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("DB connected !");
});

module.exports = pool;



/*

// Creazione del server web
const path = require('path');
const express = require('express');
const app = express();
const mysql = require('mysql2');
const port = 3306;


// Connessione al database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Paolo2002-",
  database: "UniBookMi"
});

*/