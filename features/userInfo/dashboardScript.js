// Recupera i dati salvati dal form del profilo dall'archiviazione locale



// user info
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
};


fetch("http://localhost:3000/getInfo", options)
  .then(response => response.json())
  .then(responseJson => {
    // Access the JSON data and update HTML content
    document.getElementById('nome').innerText = responseJson.name;
    document.getElementById('email').innerText = responseJson.email;
  })
  .catch(error => console.error('Error fetching data:', error));



// reservations
fetch("http://localhost:3000/getReservations", options)

  .then(response => response.json())
  .then(responseJson => {

    const roomList = document.getElementById('roomList');

    // Clear existing content
    roomList.innerHTML = '';

    console.log(responseJson);

    // Loop through each object in the JSON data array
    responseJson.forEach(item => {
      // Create list item element
      const listItem = document.createElement('li');

      const date = new Date(item.date);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
      const day = String(date.getDate()).padStart(2, '0');

      const simpleDateFormat = `${day}-${month}-${year}`;

      // Populate list item with JSON data
      listItem.innerHTML = `
            <strong>Aula:</strong> <span>${item.roomType}</span><br>
            <strong>Indirizzo sede:</strong> <span>${item.address}</span><br>
            <strong>Giorno:</strong> <span>${simpleDateFormat}</span>
        `;

      // Append list item to the room list
      roomList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

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
