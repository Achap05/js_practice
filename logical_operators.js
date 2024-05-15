'use strict'
/* Ecrivez une condition "if" pour vérifier que l’age est compris entre 14 et 90 ans inclus.

“Inclus” signifie que l’age peut atteindre les 14 ou 90 ans.
Vérifiez à l'extérieur de la plage */


if (age >= 14 && <=90) 
// correction
 if (age >= 14 && age <= 90) 

/* Ecrivez une condition if pour vérifier que l’age n’est PAS compris entre 14 et 90 ans inclus.

Créez deux variantes: la première utilisant NOT !, La seconde – sans ce dernier. */

if !(age >= 14 && <=90) 
if (age < 14 || age > 90)

// correction

if (!(age >= 14 && age <= 90)) 
if (age < 14 || age > 90)


/* Lesquelles de ces alertes vont s’exécuter ?
Quels seront les résultats des expressions à l’intérieur de if (...) ?

    if (-1 || 0) alert( 'first' );
    if (-1 && 0) alert( 'second' );
    if (null || -1 && 1) alert( 'third' );
*/
(-1 || 0 = -1)       // -1 n'est pas une valeur fausse donc l'alerte s'exécute
(-1 && 0 = 0)        // 0 n'est pas faux donc l'alerte ne s'exécute pas 
(null || -1 && 1)  // && a une précédence plus importante que celle de || donc (-1 && 1) donne 'null || 1) ; null est toujours faux donc l'alerte s'exécute


/* Check the login
importance: 3

Écrivez le code qui demande une connexion avec prompt.

Si le visiteur entre "Admin", puis prompt pour un mot de passe, si l’entrée est une ligne vide ou Esc – affichez “Canceled”, 
s’il s’agit d’une autre chaîne de caractères – alors affichez “I don’t know you”.
Le mot de passe est vérifié comme suit :

    S’il est égal à “TheMaster”, alors affichez “Welcome!”,
    Une autre chaînede caractères – affichez “Wrong password”,
    Pour une chaîne de caractères vide ou une entrée annulée, affichez “Canceled”.

Veuillez utiliser des blocs if imbriqués. Attention à la lisibilité globale du code.
Astuce: passer une entrée vide à un prompt renvoie une chaîne de caractères vide ''. En pressant ESC lors d’un prompt cela retourne null. */

  

let auth = prompt ( "Who's here ?");
if( auth == "admin" ) {
  let passwd = prompt( "Please enter your password");
  if ( passwd == "TheMaster" ) {
       alert( "Welcome !");
     } else if( passwd == null || passwd == '' ) {
     alert("canceled");
     } else {
       alert( "incorrect password" );
     }
     
    } else if ( auth == null || auth == '' ) {
       alert( "canceled" );
     } else {
       alert ( "I don't know you" );
     }

     