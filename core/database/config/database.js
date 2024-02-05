// Creazione del server web
const path = require('path');
const express = require('express');
const app = express();
const mysql = require('mysql2');
const port = 3306;

app.use(express.static(path.join(__dirname, 'features')));

app.use(express.json()); // Per i dati application/json
app.use(express.urlencoded({ extended: true })); // Per i dati application/x-www-form-urlencoded (come i dati dei form)

// Connessione al database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Paolo2002-",
  database: "UniBookMi"
});

db.connect(err => {
  if (err) {
      console.error('Errore nella connessione al database:', err);
      return;
  }
  console.log('Connesso al database MySQL2');
});
//----------------------------------------------------------------------------------------------------
//registrazione utente 

app.post('/registrazione', (req, res) => {
  console.log('/registrazione');
  const { email, nome, password } = req.body;

  // Eliminato l'uso di bcrypt per l'hashing della password
  const sql =
      'INSERT INTO utentii(email, nome, password) VALUES (?, ?, ?)';
  const values = [email, nome, password]; // Usa pw_reg direttamente

  db.query(sql, values, (err, result) => {
      if (err) {
          console.error('Errore nella registrazione:', err);
          res.send('Errore nella registrazione');
          return;
      }
      console.log('utente registrato con successo');
      res.send('Registrazione avvenuta con successo');
  });
});
























// Avvio del server web
app.listen(3000, () => console.log("Server avviato su http://localhost:3000"));