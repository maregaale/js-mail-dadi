// numero random giocatore
var numRandomGiocatore = Math.floor(Math.random() * 6) + 1;

// numero random giocatore
var numRandomComputer = Math.floor(Math.random() * 6) + 1;

// messaggio risultato lancio dei Dadi
document.getElementById('n-giocatore').innerHTML = numRandomGiocatore;
document.getElementById('n-computer').innerHTML = numRandomComputer;

// verifica quale numero random è maggiore
if (numRandomGiocatore > numRandomComputer) {
  // stampa esito
  document.getElementById('win').innerHTML = " Hai vinto!";

} else if (numRandomGiocatore < numRandomComputer) {
  // stampa esito
  document.getElementById('lose').innerHTML = " Hai perso.";

} else {
  // stampa esito
  document.getElementById('equal').innerHTML = " Siete pari!";

}
