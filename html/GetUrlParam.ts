/*
  Función que examina la url pasada como segundo parámetro
( o window.location.href, si no se pasa nada ), obteniendo el valor del
argumento pasado como primer parámetro.
Valor de retorno:
  'param' existe y tiene valor -> el valor.
  'param' existe, pero no tiene valor -> la cadena vacía ''.
  'param' no existe -> null.
*/
function GetUrlParam( param: string, url: string = window.location.href ): string|null {
  var regex: RegExp,
      results: any;

  param = param.replace( /[\[\]]/g, '\\$&' );
  regex = new RegExp( '[?&]' + param + '(=([^&#]*)|&|#|$)' );

  results = regex.exec( url );

  if( ! results ) return null;
  if( ! results[2] ) return '';

  return decodeURIComponent( results[2].replace( /\+/g, ' ' ) );
};
