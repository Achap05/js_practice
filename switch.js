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