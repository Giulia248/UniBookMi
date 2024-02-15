function salvaDati() {
    const tipodiCorso = document.getElementById('tipodiCorso').value;
    // Recupera altri dati utente allo stesso modo

    // Crea un oggetto per memorizzare i dati utente
    const profileData = {
        tipodiCorso: tipodiCorso,
        // Aggiungi altri dati utente allo stesso modo
    };

    // Memorizza i dati utente localmente
    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Aggiorna i valori nel riquadro delle informazioni fisse
    document.getElementById('tipodiCorso').innerText = tipodiCorso;
    // Aggiorna altri valori allo stesso modo
}

