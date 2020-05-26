"use strict"

function pow(valor, potencia){
  let aux = valor;
  for (let cont = 1; cont < potencia; cont++){
    aux *= valor;

  }
  return aux;

}

alert(pow(5,3));
