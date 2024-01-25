
function changeBackGround() {
    document.body.style.backgroundColor = "red";
}


document.getElementById("goToUserInfo").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'http://127.0.0.1:5500/features/userInfo/UserInfoView.html';

});