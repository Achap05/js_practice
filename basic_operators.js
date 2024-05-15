'use strict'
//Quelles sont les valeurs finales de toutes les variables a, b, c et d après le code ci-dessous ?

let a = 1, b = 1;

let c = ++a; // 2 préfixe prends la nouvelle valeur
let d = b++; // 1 postfixe prends l'ancienne valeur
/* 
Cependant a et b ont tout les deux été incrémenté donc a et b =2
a=2
b=2
c=2
d=1


/*Quelles sont les valeurs de a et x après le code ci-dessous ?

let a = 2;


let x = 1 + (a *= 2); */

// a=4 x=5


//Quels sont les résultats de ces expressions ?

"" + 1 + 0    // 10
"" - 1 + 0    //-1
true + false  // 1
6 / "3"       // 2 
"2" * "3"     // 6
4 + 5 + "px"  // "9px"
"$" + 4 + 5   // "$45"
"4" - 2       // 2
"4px" - 2     // NaN
"  -9  " + 5  // "-95"
"  -9  " - 5  // -14
null + 1      // 1
undefined + 1 // NaN
" \t \n" - 2  // "-2"


/*Voici un code qui demande à l’utilisateur deux nombres et affiche leur somme.

Cela ne fonctionne pas correctement. La sortie dans l’exemple ci-dessous est 12 (pour les valeurs d’invite par défaut).

Pourquoi ? Réparez-le. Le résultat doit être 3.*/

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

/*  'use strict'
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); */ 3
