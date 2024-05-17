/*
Réécrire le "switch" dans un "if"
importance: 5

Écrivez le code en utilisant if..else qui correspondrait au switch suivant :
*/

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}


if ( browser == "Edge" ) {
    alert( "You've got the Edge!" );
} break;
    else if (browser == "Chrome" || "Firefox" || "Safari" || "Opera") {
        alert( 'Okay we support these browsers too' );
    } break;
    else {
        alert( 'We hope that this page looks ok!' );
    }


    /*
    Réécrire le "if" dans un "switch"
importance: 4

Réécrivez le code ci-dessous en utilisant une seule instruction switch :
*/

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}


switch (a) {
    case a == 0 :
        alert( 0 );
    case a == 1 :
        alert( 1 );
    case a == 2 || a == 3 :
        alert( "2,3" );
}