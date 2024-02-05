document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");

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
            }

            window.location.href = 'http://127.0.0.1:5500/features/index.html';
        });
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
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

        window.location.href = 'http://127.0.0.1:5500/features/index.html';
    });
});
