const mysql = require('mysql');
const bcrypt = require('bcrypt');
const express = require('express');

const app = express();


function insertData() {
    console.log('qua entra om mi devo incazzare??');
    const form = document.getElementById('insertForm');
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);
    fetch('/addUser', {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Paolo2002-"
});

bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
        // Handle error
        console.error(err);
        return;
    }
    // Store 'hash' in the database
    console.log('Secured Password');

    // Define a route to handle the INSERT query
    app.post('/addUser', (req, res) => {

        const { email, nome, hash } = req.body;
        var sql = "INSERT INTO customers (email, nome, password) VALUES (?, ?, ?)";

        connection.query(sql, [email, nome, hash], (err, result) => {
            if (err) {
                console.error('Error executing INSERT query:', err);
                res.status(500).send('Error executing INSERT query');
                return;
            }
            console.log('INSERT query successful');
            res.send('INSERT query successful');
        });
    });


});
