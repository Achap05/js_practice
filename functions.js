

/* Est-ce que "else" est requis ?
importance: 4

La fonction suivante renvoie true si le paramètre age est supérieur à 18.

Sinon, il demande une confirmation et renvoie son résultat :
*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

/*
La fonction fonctionnera-t-elle différemment si else est supprimé ?
*/

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// non 
"pourquoi else ne change rien ici ?"


/*
Réécrivez la fonction en utilisant '?' ou '||'
importance: 4

La fonction suivante renvoie true si le paramètre age est supérieur à 18.

Sinon, il demande une confirmation et renvoie le résultat.
*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

/*
Réécrivez-le, pour effectuer la même chose, mais sans if, et en une seule ligne.
return confirm('Did parents allow you?');
}

Faites deux variantes de checkAge :

    En utilisant un opérateur point d’interrogation ?
    En utilisant OU ||
*/

function checkAge(age) { 
    for(let age = a; a > 18;){return true;}{return confirm ( "did parents allow you ?" );}}


// Avec ?
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
  
//Avec ||
  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }



  /*
Fonction min(a, b)
importance: 1

Ecrivez une fonction min(a, b) qui renvoie le plus petit des deux nombres a et b.

Par exemple :

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function getMin( a, b ) {
    if( a < b) {
        return a;
    } else {
        return b
}
}





/*
Fonction pow(x,n)
importance: 4

Ecrivez une fonction pow(x, n) qui renvoie x à la puissance n. Ou, autrement dit, multiplie x par lui-même n fois et renvoie le résultat.
*/

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

/*
Créez une page Web qui demande (prompt)x et n, puis affiche le résultat de pow(x, n).

Exécuter la démo

P.S. Dans cette tâche, la fonction ne doit prendre en charge que les valeurs naturelles de n : entiers supérieurs à 1.
*/

function pow( x, n)