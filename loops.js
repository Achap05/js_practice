'use strict';
/* importance: 3

Quelle est la dernière valeur affichée par ce code ? Pourquoi ?

let i = 3;

while (i) {
  alert( i-- );
}
*/
"La dernière valeur affichée sera 1"



/*
Quelles valeurs sont affichées par la boucle "for" ?
importance: 4

Pour chaque boucle, notez les valeurs qui vont s’afficher. Ensuite, comparez avec la réponse.

Les deux boucles alert les mêmes valeurs ou pas ?

    La forme postfix :

for (let i = 0; i < 5; i++) alert( i );
*/

"la boucle "for" incrémente après la comparaison donc 0 à 4"
0<5 donc +1
1<5 donc +1
2<5 donc +1
3<5 donc +1
4<5 donc +1
5==5 donc fin de la boucle

/*
La forme préfix :

    for (let i = 0; i < 5; ++i) alert( i );
*/

"la boucle "for" incrémente après la comparaison donc 0 à 4"
0<5 donc +1
1<5 donc +1
2<5 donc +1
3<5 donc +1
4<5 donc +1
5==5 donc fin de la boucle


/*
Utilisez la boucle for pour afficher les nombres pairs de 2 à 10.
*/
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }


/*
Réécrivez le code en modifiant la boucle for en while sans modifier son comportement (la sortie doit rester la même).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/

let i = 0
while (i < 3) {
    i++;
        alert( `number ${i}!`);
    } // sortie: number 1! number 2! number 3!



/*
Répéter jusqu'à ce que l'entrée soit correcte
importance: 5

Ecrivez une boucle qui demande un nombre supérieur à 100. Si le visiteur saisit un autre numéro, demandez-lui de le saisir à nouveau.

La boucle doit demander un numéro jusqu’à ce que le visiteur saisisse un nombre supérieur à 100 ou annule l’entrée/entre une ligne vide.

Ici, nous pouvons supposer que le visiteur ne saisit que des chiffres. 

Il n’est pas nécessaire de mettre en œuvre un traitement spécial pour une entrée non numérique dans cette tâche.
*/



    let askNumber = prompt( "please enter a number above 100" );
    while ( askNumber < 100 ) {
            alert( "Try again" );
        } else if (askNumber == null || askNumber == '' ) {
            alert( "canceled" );
        }
    

   /*     let num;

        do {
          num = prompt("Enter a number greater than 100?", 0);
        } while (num <= 100 && num);
*/


