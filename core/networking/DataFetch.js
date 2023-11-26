

async function apiPost() {

    fetch("url", {
        method: "POST",
        body: JSON.stringify({
          "filterParameters": {
            "id": 12345678
          }
        }),
        headers: {"content-type": "application/json"},
        //credentials: 'include'
      })
      .then(res => res.json())
      .then(console.log)

}

async function apiFetch() {
    
    fetch("url")
      .then(res => res.json())
      .then(console.log)

}

