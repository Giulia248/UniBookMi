
// fetch local JSON
function fetchJson(){
    
    fetch('http://127.0.0.1:5500/core/models/Departments.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
}


// add data on html page
function appendData(data) {
    var mainContainer = document.getElementById("myDiv");
    var size = Object.keys( data.news).length
    console.log(size);
    for (var i = 0; i < size; i++) {

        var invisibleDiv = document.createElement("div");
        invisibleDiv.id = "invisibleDiv"
        mainContainer.appendChild(invisibleDiv);


    }
}
