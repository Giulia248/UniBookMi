const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
    
        container.classList.add("active");
    });


    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    document.getElementById("signIn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission
        window.location.href= 'http://127.0.0.1:5500/features/main.html';

      });


  