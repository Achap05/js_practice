'use strict'
/*
En utilisant la construction if..else, écrivez le code qui demande : ‘Quel est le nom “officiel” de JavaScript?’

Si le visiteur entre “ECMAScript”, alors éditez une sortie “Bonne réponse !”, Sinon – retourne “Ne sait pas ? ECMAScript!” */

let askJsName = prompt( "Quel est le nom 'officiel' de JavaScript?" );
if (askJsName == "ECMAScript" ) {
  alert( "Bonne réponse !" );
} else {
  alert( "Vous ne le saviez pas ? C'est ECMAScript.")
}


//Réécrivez ce if en utilisant l’opérateur conditionnel '?' :

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let result = (a + b < 4) ? "Below" : "Over";


/* Réécrire ce if..else en utilisant plusieurs opérateurs ternaires '?'.

Pour plus de lisibilité, il est recommandé de diviser le code en plusieurs lignes. 

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} 
*/

let message = (login == 'Employee') ? 'Hello'; // ce que j'ai écrit
(login == 'Director') ? 'Greetings';
(login == '') ? 'No login';
() ? '';

let message = (login == 'Employee') ? 'Hello' : // correction
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';