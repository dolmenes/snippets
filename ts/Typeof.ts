/*
  Devuelve el tipo del objeto, similar al operador 'typeof' de JavaScript, pero trabaja correctamente con
objetos copia; por ejemplo, <typeof ( new Object( false ) )> es 'object', mientras que
<Typeof( new Object( false ) )> es 'boolean'.
  También discrimina entre 'number' y 'nan', y devuelve 'null' cuando es necesario.
*/
function Typeof( arg: any ): string {
  var ret = typeof( arg );

  // NaN no es igual a nada, incluso el mismo.
  if( ( ret == 'number' ) && ( arg !== arg ) )
    return 'nan';

  // Si es un tipo primitivo, disntinto de 'object', salimos ya.
  if( ret !== 'object' )
    return ret;

  // typeof( null ) == 'object', null == false.
  if( ! arg )
    return 'null';

  switch( Object.prototype.toString.call( arg ).charAt( 8 ) ) {
  case 'F': // '[object Function]'.
    ret ='function';
    break;

  case 'O': // '[object Object]'.
    ret = 'object';
    break;

  case 'S': // '[object String]'.
    ret = 'string';
    break;

  case 'N': // '[object Number]'.
    ret = arg !== arg ? 'nan' : 'number';
    break;

  case 'A': // '[object Array]'.
    ret = 'array';
    break;

  case 'B': // '[object Boolean]'.
    ret = 'boolean';
    break;

  default: // Es imposible llegar aquí.
    throw new Error( 'Impossible error !!' );
  }

  return ret;
}
