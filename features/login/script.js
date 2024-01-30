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
        window.location.href= 'https://unibookmi.altervista.org/features/home/index.html';

      });


  