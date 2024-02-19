const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var userEmail = "";
var userName ="";


const app = express();
// Enable CORS for all routes
app.use(cors());
const port = process.env.PORT || 3000; // assigns the value of the environment variable PORT to the constant port


// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Paolo2002-",
    database: 'unibookmi'
});

con.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('⚡⚡Connected to MySQL database');
});


app.listen(port, () => {
    console.log(`⚡⚡Server is running on http://localhost:${port}`);
});


app.get('/getInfo', (req, res) => {

    res.json({ name: userName, email: userEmail });
});

// POST add user service
app.post('/addUser', (req, res) => {

    console.log("⚡⚡POST BODY -> ", req.body)
    const { email, nome, password } = req.body;
    var sql = "INSERT INTO utentii (email, nome, password) VALUES (?, ?, ?)";
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return;
        }
        console.log('Hashed password:', hash);
        con.query(sql, [email, nome, hash], (err, result) => {
            if (err) {
                console.error('💀💀Error executing INSERT query:', err);
                res.status(500).send('Error executing INSERT query:');
                return;
            } else {
                userName =  nome;
                userEmail = email;
                res.status(200).json({ message: 'Insert successful' });
                console.log('🩵🩵INSERT new user successful');
            }
        });
    });
});


// GET user service
app.get('/getUser', (req, res) => {
    const email = req.query.email;
    const password = req.query.password;

    const sql = `SELECT * FROM utentii WHERE email = ?`;
    con.query(sql, [email], (err, result) => {
        if (err) {
            console.error('💀💀Error executing SELECT query:', err);
            res.status(500).json({ message: 'Email non valida o non registrata' });
            throw err;
        } else {
            console.log('🩵🩵 SELECT query successful');
            if  (result.length === 0){
                console.error("Email non valida o non registrata");
                return;
            }
            const passwordUser = result[0].password;
            bcrypt.compare(password, passwordUser)
              .then(isMatch => {
                if (isMatch) {
                    userName =  result[0].nome;
                userEmail = email;
                  return res.status(200).json({ message: 'Login successful' });
                } else {
                  return res.status(401).json({ message: 'Invalid password' });
                }
              })
              .catch(error => {
                console.error('Error:', error);
                return res.status(500).json({ message: 'Internal Server Error' });
              });
        };
    });
});


// POST modify user service
app.post('/modifyPassword', (req, res) => {

    console.log("⚡⚡ POST BODY -> ", req.body);
    const { password, email } = req.body;
    const sql = 'UPDATE utentii SET password = ? WHERE email = ?';

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return;
        }
        console.log('Hashed password:', hash);
        con.query(sql, [hash, email], (err, result) => {
            if (err) {
                console.error('💀💀Error executing INSERT query:', err);
                res.status(500).send('Error executing INSERT query:');
                return;
            } else {
                res.status(200).json({ message: 'Insert successful' });
                console.log('🩵🩵INSERT new password successful');
            }
        });
    });
});



// Reservations --------------------------------------------------------------------


// GET all reservations
app.get('/getReservations', (req, res) => {

    const sql = `SELECT * FROM reservations WHERE email = ?`;
    con.query(sql, [userEmail], (err, result) => {
        if (err) {
            console.error('💀💀Error executing SELECT query:', err);
            res.status(500).json({ message: `Nessuna prenotazione con email ${email}` });
            throw err;
        } else {

            console.log("RESULT -> ", result);
            res.json(result);
            console.log('🩵🩵 SELECT reservation/s successful');
        };
    });
});

// POST add reservation service
app.post('/addReservation', (req, res) => {
    console.log("EMAIL -> ", userEmail)

    console.log("⚡⚡POST BODY -> ", req.body)
    const { selectedDate, classroom, address } = req.body;
    var sql = "INSERT INTO reservations (email, date, roomType, address) VALUES ( ?, ?, ?, ?)";
        con.query(sql, [userEmail, selectedDate, classroom, address], (err, result) => {
            if (err) {
                console.error('💀💀Error executing INSERT query:', err);
                res.status(500).send('Error executing INSERT query:');
                return;
            } else {
                res.status(200).json({ message: 'Insert successful' });
                console.log('🩵🩵INSERT reservation successful');
            }
        });
});

// DELETE reservation
app.delete('/deleteReservation', (req, res) => {

    console.log("⚡⚡ DELETE BODY -> ", req.query.date)
    const date = req.query.date;
    const sql = 'DELETE FROM reservations WHERE date = ?';
        con.query(sql, [date], (err, result) => {
            if (err) {
                console.error('💀💀Error executing DELETE query:', err);
                res.status(500).send('Error executing DELETE query:');
                return;
            } else {
                res.status(200).json({ message: 'DELETE successful' });
                console.log('🩵🩵 DELETE reservation successful');
            }
        });
});