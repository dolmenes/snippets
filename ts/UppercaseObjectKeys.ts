/*
  Convierte todas las 'keys' de un objeto en mayúsculas, recursivamente.
  @obj -> objeto con las 'keys' a convertir.
  @create -> si 'true', se genera un nuevo objeto, dejando el original sin modificar.
             si 'false', se modifica el objeto original.

  Retorna: el objeto con las 'keys' modificadas; puede o no ser el original.
*/

function UppercaseObjectKeys( obj: any, create: boolean = false ): any {
  var upper: string,
      idx: string,
      curr: any,
      target: any = create ? { } : obj,
      toDelete: string[] = [ ];

  for( idx in obj ) {
    curr = obj[idx];

    if( curr && ( typeof curr == 'object' ) )
      UppercaseObjectKeys( curr );

    upper = idx.toUpperCase( );

    if( create || ( upper != idx ) ) {
      target[upper] = curr;
      if( ! create )
        toDelete.push( idx );
    }
  }

  if( toDelete.length ) {
    let idx: number = -1,
        curr: string;

    while( curr = toDelete[++ idx] )
      delete obj[curr];
  }
}
