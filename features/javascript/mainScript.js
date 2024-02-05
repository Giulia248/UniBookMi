// goto User info - settings
document.getElementById("goToUserInfo").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'http://127.0.0.1:5500/features/UserInfoView.html';

});

// goto news
document.getElementById("goToNews").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'http://127.0.0.1:5500/features/NewsView.html';

});

document.querySelectorAll('.tm-icon').forEach(function(icon) {
    icon.addEventListener('click', function(event) {
        var targetUrl = icon.getAttribute('data-href');
        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });
});