const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');




window.addEventListener("DOMContentLoaded", (event) => {
    registerBtn.addEventListener('click', () => {
    
        container.classList.add("active");
    });
});

window.addEventListener("DOMContentLoaded", (event) => {
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
});