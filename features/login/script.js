
var checkActiveState = true;
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');



    
    // REGISTER
    registerBtn.addEventListener('click', () => {

        //if is the first time "register" has been clicked
        if (checkActiveState) {
            container.classList.add("active");
            checkActiveState = false;
        }

    });


    document.getElementById("signUp").addEventListener("click", function (event) {
        event.preventDefault();

        // Validazione campi di input
        const nameInput = document.querySelector('.sign-up input[placeholder="Name"]');
        const emailInput = document.querySelector('.sign-up input[placeholder="Email"]');
        const passwordInput = document.querySelector('.sign-up input[placeholder="Password"]');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert("Compilare tutti i campi.");
            return;
        }

        // Controllo lunghezza della password solo durante la registrazione
        if (passwordInput.value.trim().length < 6) {
            alert("La password deve contenere almeno 6 caratteri.");
            return;
        }

        // Controllo validità dell'indirizzo email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            alert("Inserire un indirizzo email valido.");
            return;
        };

        var formData = {
            email: document.getElementById("emailRegistration").value,
            nome: document.getElementById("nomeRegistration").value,
            password: document.getElementById("passwordRegistration").value
        };

        console.log("form data-> ", formData);
        console.log("form data stringify -> ", JSON.stringify(formData));

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),

        };
        fetch('http://localhost:3000/addUser', options)
            .then(data => {
                if (!data.ok) {
                    throw Error(data.status);
                    alert("Errore nella registrazione");
                }
                alert("AOOOO");
                window.location.href = 'http://127.0.0.1:5500/features/home/index.html';
                return data.json();

            }).then(update => {
                console.log("UPDATE ->", update);
            }).catch(e => {
                console.log("ERROR UPDATE ->", e);
            });

    });


    // LOG IN --------------------------------------------------------------------
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
        checkActiveState = true;
    });

    document.getElementById("signIn").addEventListener("click", function (event) {
        event.preventDefault();

        // Validazione campi di input
        const emailInput = document.querySelector('.sign-in input[placeholder="Email"]');
        const passwordInput = document.querySelector('.sign-in input[placeholder="Password"]');

        if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert("Compilare tutti i campi.");
            return;
        }

        // Controllo validità dell'indirizzo email solo durante l'accesso
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            alert("Inserire un indirizzo email valido.");
            return;
        }


    });
});
