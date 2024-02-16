// Recupera i dati salvati dal form del profilo dall'archiviazione locale



// user info
const options = {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
  }
};
fetch("http://localhost:3000/getInfo", options)
.then(response => {
  if (!response.ok) {

    alert("Errore , ", response.status);
    return;
  }else{
    document.getElementById('nome').innerText = response.body.name;
    document.getElementById('email').innerText = response.body.email;
  }

})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});

// reservations
fetch("http://localhost:3000/getReservation", options)
.then(response => {
  if (!response.ok) {

    alert("Errore , ", response.status);
    return;
  }else{
    document.getElementById('idReservation').innerText = response.body.name;
    document.getElementById('room').innerText = response.body.name;
    document.getElementById('address').innerText = response.body.name;
    document.getElementById('day').innerText = response.body.name;
  }
 
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});

// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}
