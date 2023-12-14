
// fetch JSON
function fetchJson(){
    
    fetch('http://127.0.0.1:5500/core/models/news/newsModel.json')
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
    console.log("------------- lunghezza vv");
    var size = Object.keys( data.news).length
    console.log(size);
    for (var i = 0; i < size; i++) {

        var invisibleDiv = document.createElement("div");
        invisibleDiv.id = "invisibleDiv"
        mainContainer.appendChild(invisibleDiv);

        var title = document.createElement("p");
        title.id = "titleP"
        title.innerHTML = data.news[i].title;
        invisibleDiv.appendChild(title);

        var photo = document.createElement("img");
        photo.id = "img"
        photo.src = data.news[i].url
        invisibleDiv.appendChild(photo);

        var text = document.createElement("p");
        text.id = "textP"
        text.innerHTML = data.news[i].text
        invisibleDiv.appendChild(text);

        var div = document.createElement("div");
        invisibleDiv.appendChild(div);

    }
}
