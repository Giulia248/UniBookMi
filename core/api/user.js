const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
// Enable CORS for all routes
app.use(cors());
const port = process.env.PORT || 3000;


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
                res.status(200).json({ message: 'Insert successful' });
                console.log('🩵🩵INSERT query successful');
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
            const passwordUser = result[0].password;
            bcrypt.compare(password, passwordUser)
              .then(isMatch => {
                if (isMatch) {
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
app.post('/modifyUser', (req, res) => {

    console.log("⚡⚡ POST BODY -> ", req.body);
    const { email, nome, newEmail } = req.body;
    const sql = 'UPDATE users SET name = ?, newEmail = ? WHERE email = ?';
        con.query(sql, [email, nome, hash], (err, result) => {
            if (err) {
                console.error('💀💀Error executing UPDATE query:', err);
                res.status(500).send('Error executing UPDATE query:');
                return;
            } else {
                res.status(200).json({ message: 'Insert successful' });
                console.log('🩵🩵 UPDATE query successful');
            }
        });
});



// Reservations --------------------------------------------------------------------


// GET all reservations
app.get('/getReservations', (req, res) => {

    const email = req.query.email;

    const sql = `SELECT * FROM reservations WHERE email = ?`;
    con.query(sql, [email], (err, result) => {
        if (err) {
            console.error('💀💀Error executing SELECT query:', err);
            res.status(500).json({ message: `Nessuna prenotazione con email ${email}` });
            throw err;
        } else {
            res.status(200).json({ date: result.body.date, address: result.body.address, roomId: result.body.roomId });
            console.log('🩵🩵 SELECT query successful');
        };
    });
});


// POST add reservation service
app.post('/addReservation', (req, res) => {

    console.log("⚡⚡POST BODY -> ", req.body)
    const { email, date, address, roomId } = req.body;
    var sql = "INSERT INTO utentii (email, date, address, roomId) VALUES (?, ?, ?, ?)";
        con.query(sql, [email, date, address, roomId], (err, result) => {
            if (err) {
                console.error('💀💀Error executing INSERT query:', err);
                res.status(500).send('Error executing INSERT query:');
                return;
            } else {
                res.status(200).json({ message: 'Insert successful' });
                console.log('🩵🩵INSERT query successful');
            }
        });
});

// DELETE reservation
app.post('/deleteReservation', (req, res) => {

    console.log("⚡⚡ DELETE BODY -> ", req.body)
    const { idReservation } = req.body;
    const sql = 'DELETE FROM users WHERE id = ?';
        con.query(sql, [idReservation], (err, result) => {
            if (err) {
                console.error('💀💀Error executing DELETE query:', err);
                res.status(500).send('Error executing DELETE query:');
                return;
            } else {
                res.status(200).json({ message: 'DELETE successful' });
                console.log('🩵🩵 DELETE query successful');
            }
        });
});