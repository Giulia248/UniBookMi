const mysql = require('mysql');
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
                }else{
                    res.status(200).json({ message: 'Insert successful' });
                    console.log('🩵🩵INSERT query successful');
                }
                
            });
        });


    });

