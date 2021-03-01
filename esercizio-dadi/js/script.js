// numero random giocatore
var numRandomGiocatore = Math.floor(Math.random() * 6) + 1;

// numero random giocatore
var numRandomComputer = Math.floor(Math.random() * 6) + 1;


// messaggio risultato lancio dei Dadi
var messaggio = "A te è uscito il numero " + numRandomGiocatore + "," + " al computer è uscito il numero " + numRandomComputer + ".";

// stampa messaggio risultato
document.getElementById('esito').innerHTML = messaggio;

// verifica quale numero random è maggiore
if (numRandomGiocatore > numRandomComputer) {
  // stampa esito
  document.getElementById('result').innerHTML = " Hai vinto!";

} else if (numRandomGiocatore < numRandomComputer) {
  // stampa esito
  document.getElementById('result').innerHTML = " Hai perso.";

} else {
  // stampa esito
  document.getElementById('result').innerHTML = " Siete pari!";

}
