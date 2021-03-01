// richiesta mail all'utente
var mail = prompt("Inserisci qui la tua mail");

// creazione array mailing-list
var mailingList = ["ale@hotmail.it", "pinco_pallino@gmail.com", "mario-rossi@gmail.com", "yoda@gmail.it", "forrest_gump@hotmail.it"];

// messaggi
var messaggioPositivo = "La tua mail è nella nostra mailing-list, puoi procedere con l'accesso."
var messaggioNegativo = "La tua mail NON è nella nostra mailing-list, contattaci per informazioni sull'accesso!"

// controllo appartenenza all'array
var emailValida;

for (var i = 0; i < mailingList.length; i++) {

  // stampa esito
  if ( mail == mailingList[i]) {
    console.log("email valida");
    emailValida = mail;
  }

}

if (emailValida) {
  document.getElementById('esito').innerHTML = messaggioPositivo;
} else {
  document.getElementById('esito').innerHTML = messaggioNegativo;
}
