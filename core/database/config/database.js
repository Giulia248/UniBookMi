var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Paolo2002-"
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("DB connected !");
});

            

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