//Definindo largura e altura
var larg = 7
var alt = 7

//Iniciando variaveis
var resultado = ""
var contador = 0

//Criando todas as matrizes necessarias
var matrizResult = criaMat(larg, alt, false)
var alo = criaMat(larg, alt, false)
var matriz = criaMat(larg, alt, false)

//Exemplo 
matriz[6][0] = "g"
matriz[5][0] = "u"
matriz[4][0] = "s"
matriz[3][0] = "t"
matriz[2][0] = "a"
matriz[1][0] = "v"
matriz[0][0] = "o"

matriz[2][1] = "v"
matriz[2][2] = "o"
matriz[2][3] = "a"
matriz[2][4] = "d"
matriz[2][5] = "o"

var palavra1 = "gustavo"
var palavra2 = "avoado"

console.log(matriz) //Matriz com as palavras

console.log('------Resultado1------')

achaLetra(matriz, palavra1)

console.log('------Resultado2------')

achaLetra(matriz, palavra2)

console.log('------Acabou------')

//Fim exemplo

//Cria uma matriz zerada
function criaMat(x, y, bool){
  let matriz = [];
  for (let i = 0; i < x; i++) {
    let linha = [];
    for (let j = 0; j < y; j++) {
      if(bool){
        linha.push(Math.random().toString(36).substring(2, 3))
      }else{
        linha.push("-")
      }
    }
    matriz.push(linha);
  }
  return matriz
}

//Func para zerar a matriz toda as vezes que rodar o codigo procurando
function zerando(){
  contador = 0
  resultado = ""
}

//Funcao para copiar uma matriz resultante para a matriz total
function juntaMatriz(matriz){
  for(i = 0; i < matriz.length; i++){
    for (j = 0; j < matriz[0].length; j++){
      if(matriz[i][j] != "-"){
        alo[i][j] = matriz[i][j]
      }
    }
  }
  return alo
}

//Func principal para achar a palavra na matriz
function achaLetra(matriz, palavra){
  for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[0].length; j++) {
      if(matriz[i][j] == palavra[0]){
        if(direitaR(i, j, matriz, palavra)){
          zerando()
          matrizResult = criaMatResult(i, j, palavra, "direita")
        }else if(esquerdaR(i, j, matriz, palavra)){
          zerando()
          matrizResult = criaMatResult(i, j, palavra, "esquerda")
        }else if(cimaR(i, j, matriz, palavra)){
          zerando()
          matrizResult = criaMatResult(i, j, palavra, "cima")
        }else if(baixoR(i, j, matriz, palavra)){
          zerando()
          matrizResult = criaMatResult(i, j, palavra, "baixo")
        }else if(bdR(i, j, matriz, palavra)){
          zerando()
          matrizResult = criaMatResult(i, j, palavra, "bd")
        }else if(beR(i, j, matriz, palavra)){
          zerando()
          matrizResult = criaMatResult(i, j, palavra, "be")
        }else if(cdR(i, j, matriz, palavra)){
          zerando()
          matrizResult = criaMatResult(i, j, palavra, "cd")
        }else if(ceR(i, j, matriz, palavra)){
          zerando()
          matrizResult = criaMatResult(i, j, palavra, "ce")
        }
        zerando()
      }
    }
  }
  alo = juntaMatriz(matrizResult)
  console.log(alo)
}

//Func para achar os elementos a esquerda
function esquerdaR(i, j, matriz, palavra){
  if(j-contador >= 0 && matriz[i][j-contador] == palavra[contador]){
    resultado += matriz[i][j-contador]
    contador += 1
    
    if(resultado == palavra){
      return true
    }else if(contador > palavra.length){
      return false
    }else if(esquerdaR(i, j, matriz, palavra)){
      return true
    }else{
      return false
    }

  }else {
    return false
  }
}

//Func para achar os elementos a direita
function direitaR(i, j, matriz, palavra){
  if(j+contador <= matriz[i].length && matriz[i][j+contador] == palavra[contador]){
    resultado += matriz[i][j+contador]
    contador += 1

    if(resultado == palavra){
      return true
    }else if(contador > palavra.length){
      return false
    }else if(direitaR(i, j, matriz, palavra)){
      return true
    }else{
      return false
    }

  }else{
    return false
  }
}

//Func para achar os elementos para cima
function cimaR(i, j, matriz, palavra){
  if(i-contador >= 0 && matriz[i-contador][j] == palavra[contador]){
    resultado += matriz[i-contador][j]
    contador += 1
    if(resultado == palavra){
      return true
    }else if(contador > palavra.lenght){
      return false
    }else if(cimaR(i, j, matriz, palavra)){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}

//Func para achar os elementos para Baixo - Direita
function bdR(i, j, matriz, palavra){
  if(i+contador < matriz.length && j+contador < matriz[0].length && matriz[i+contador][j+contador] == palavra[contador]){
    resultado += matriz[i+contador][j+contador]
    contador += 1
    if(resultado == palavra){
      return true
    }else if(contador > palavra.lenght){
      return false
    }else if(bdR(i, j, matriz, palavra)){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}

//Func para achar os elementos para baixo
function baixoR(i, j, matriz, palavra){
  if(i+contador < matriz.length && matriz[i+contador][j] == palavra[contador]){
    resultado += matriz[i+contador][j]
    contador += 1
    if(resultado == palavra){
      return true
    }else if(contador > palavra.lenght){
      return false
    }else if(baixoR(i, j, matriz, palavra)){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}

//Func para achar os elementos para Cima - Esquerda
function ceR(i, j, matriz, palavra){
  if(i-contador >= 0 && j-contador >= 0 && matriz[i-contador][j-contador] == palavra[contador]){
    resultado += matriz[i-contador][j-contador]
    contador += 1
    if(resultado == palavra){
      return true
    }else if(contador > palavra.lenght){
      return false
    }else if(ceR(i, j, matriz, palavra)){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}

//Func para achar os elementos para Cima -  Direita
function cdR(i, j, matriz, palavra){
  if(i-contador >= 0 && j+contador < matriz[0].length && matriz[i-contador][j+contador] == palavra[contador]){
    resultado += matriz[i-contador][j+contador]
    contador += 1
    if(resultado == palavra){
      return true
    }else if(contador > palavra.lenght){
      return false
    }else if(cdR(i, j, matriz, palavra)){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}

//Func para achar os elementos para Baixo - Esquerda
function beR(i, j, matriz, palavra){
  if(i+contador < matriz[0].length && j-contador >= 0 && matriz[i+contador][j-contador] == palavra[contador]){
    resultado += matriz[i+contador][j-contador]
    contador += 1
    if(resultado == palavra){
      return true
    }else if(contador > palavra.lenght){
      return false
    }else if(beR(i, j, matriz, palavra)){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}

//Func para criar uma matriz temporaria com o resultado atual, até por na matriz total
function criaMatResult(i, j, palavra, direcao){
  let matResult = criaMat(larg, alt, false)
  for (let percorre = 0; percorre < palavra.length; percorre++){
    if(direcao == "baixo"){
      matResult[i+percorre][j] = palavra[percorre]
    }else if(direcao == "cima"){
      matResult[i-percorre][j] = palavra[percorre]
    }else if(direcao == "direita"){
      matResult[i][j+percorre] = palavra[percorre]
    }else if(direcao == "esquerda"){
      matResult[i][j-percorre] = palavra[percorre]
    }else if(direcao == "bd"){
      matResult[i+percorre][j+percorre] = palavra[percorre]
    }else if(direcao == "be"){
      matResult[i+percorre][j-percorre] = palavra[percorre]
    }else if(direcao == "cd"){
      matResult[i-percorre][j+percorre] = palavra[percorre]
    }else if(direcao == "ce"){
      matResult[i-percorre][j-percorre] = palavra[percorre]
    }
  }
  return matResult
}
