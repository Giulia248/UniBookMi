$(function() {
    $("#datepicker").datepicker({
        dateFormat: 'yy-mm-dd', // Formato data per il backend
        onSelect: function(dateText) {
            $("#selected-date").val(dateText); // Imposta il valore del campo nascosto con la data selezionata
        },
        beforeShow: function(input, inst) {
            setTimeout(function() {
                inst.dpDiv.css({
                    backgroundColor: "#fff", // Imposta il colore di sfondo del calendario a bianco
                    border: "1px solid #ddd" // Opzionale: aggiungi un bordo per migliorare la visibilità
                });

                // Riorganizza i pulsanti "prev" e "next"
                var header = inst.dpDiv.find('.ui-datepicker-header');
                var prevButton = header.find('.ui-datepicker-prev');
                var nextButton = header.find('.ui-datepicker-next');
                header.prepend(nextButton).prepend(prevButton);
            }, 0);
        }
    });
});

$("#bookButton").on("click", function () {
    // Verifica se tutti i campi sono stati compilati
    var selectedDate = $("#selected-date").val();
    var classroom = $("select[name='class']").val();
    var fullName = $("input[placeholder='Full Name']").val();
    var matricola = $("input[placeholder='Matricola']").val();
    var email = $("input[placeholder='Email']").val();
    var hours = $("select[name='hours']").val();

    if (!selectedDate || classroom === 'class-select' || !fullName || !matricola || !email || hours === 'Address') {
        alert("Per favore compila tutti i campi.");
        return; // Interrompe il processo di prenotazione se i campi non sono compilati
    }

    // Verifica se la data di prenotazione è attiva
    var currentDate = new Date();
    var selectedDateObj = new Date(selectedDate);
    if (currentDate > selectedDateObj) {
        alert("La data di prenotazione non è più attiva.");
        return; // Interrompe il processo di prenotazione se la data non è più attiva
    }

    // Se tutti i controlli passano, procedi con la prenotazione
    // Successivamente, mostra un messaggio di conferma e reindirizza alla pagina specificata
    alert("Aula prenotata con successo!");
    window.location.href = "http://127.0.0.1:5500/features/home/index.html";
});