// numero random giocatore
var numRandomGiocatore = Math.floor(Math.random() * 6) + 1;

// numero random giocatore
var numRandomComputer = Math.floor(Math.random() * 6) + 1;


// messaggio risultato lancio dei Dadi
var messaggio = "A te è uscito il numero " + numRandomGiocatore + "," + " al computer è uscito il numero " + numRandomComputer + ".";


// verifica quale numero random è maggiore
if (numRandomGiocatore > numRandomComputer) {
  // stampa esito
  document.getElementById('esito').innerHTML = messaggio + " Hai vinto!";

} else if (numRandomGiocatore < numRandomComputer) {
  // stampa esito
  document.getElementById('esito').innerHTML = messaggio + " Hai perso.";

} else {
  // stampa esito
  document.getElementById('esito').innerHTML = messaggio + " Siete pari!";
  
}
