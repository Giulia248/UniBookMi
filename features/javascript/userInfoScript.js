
// fetch local JSON
function fetchJson() {

    fetch('http://127.0.0.1:5500/core/models/Departments.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            // nulls and empty objects handling ! 
            const filteredData = data.filter(data => data.departmentName !== "");
            console.log(filteredData);
            appendData(filteredData);

        })
        .catch(function (err) {
            console.log('💀ERROR: ' + err);
        });
}


// add data on html page
function appendData(data) {
    var mainContainer = document.getElementById("departmentSelect");
    var size = Object.keys(data).length;
    for (var i = 0; i < size; i++) {

        console.log()
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = data[i].departmentName;
        mainContainer.appendChild(opt);
    }
}

function toggleDarkMode() {



    var elementEmail = document.getElementById('email1');
    elementEmail.classList.toggle("dark-mode");

    var elementEmail2 = document.getElementById('email2');
    elementEmail2.classList.toggle("dark-mode");

    var elementDiv = document.getElementById('panel1');
    var elementDiv2 = document.getElementById('panel2');
    elementDiv.classList.toggle("dark-mode");
    elementDiv2.classList.toggle("dark-mode");



}
