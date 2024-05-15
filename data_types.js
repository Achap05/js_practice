'use strict'
//Quelle est la sortie du script ? 

let name = "Ilya";

alert( `hello ${1}` ); // "hello 1"

alert( `hello ${"name"}` ); // "hello name"

alert( `hello ${name}` ); // "hello Ilya"

/* le script sort "hello 1; hello name; hello Ilya" car la première alerte comprends un nombre imbriqué dans une chaîne de caractères, 
la deuxième alerte est une chaîne de caractères et la dernière appelle la variable name donc la valeur de celle-ci apparait */