let numero = prompt("Digite um numero: "); //Forma ineficiente
proximo: for(let contador = 2; contador <= numero; contador++){
  for(let contador_comparacao = 2; contador_comparacao <= contador; contador_comparacao++){
    if(contador % contador_comparacao == 0 && contador != contador_comparacao){
      continue proximo;
    }
  }
  alert(contador);
}
