
// fetch local JSON
function fetchJson(){
    
    fetch('http://127.0.0.1:5500/core/models/Departments.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        // nulls and empty objects handling ! 
        const filteredData = data.filter(data => data.departmentName !== "" );
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
