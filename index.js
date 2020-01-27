//Definindo largura e altura
var larg = 7
var alt = 7

//Iniciando variaveis
var resultado = ""
var contador = 0

//Criando todas as matrizes necessarias
var matrizResult = criaMat(larg, alt)
var alo = criaMat(larg, alt)
var matriz = criaMat(larg, alt)

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

matriz[1][5] = "l"
matriz[3][5] = "k"
matriz[4][5] = "o"

var palavra1 = "gustavo"
var palavra2 = "avoado"
var palavra3 = "loko"

console.log(matriz) //Matriz com as palavras

console.log('------Resultado1------')

achaLetra(matriz, palavra1)

console.log('------Resultado2------')

achaLetra(matriz, palavra2)

console.log('------Resultado3------')

achaLetra(matriz, palavra3)

console.log('------Acabou------')

//Fim exemplo

//Cria uma matriz zerada
function criaMat(x, y, bool){

  var mat = new Array(x);

  for (var i = 0; i < x; i++) {
    mat[i] = new Array(y);
    for (let j = 0; j < y; j++){
      mat[i][j] = "-"
    }
  }

  return mat
}

//Func para zerar a matriz toda as vezes que rodar o codigo procurando
function zerando(){
  contador = 0
  resultado = ""
}

//Funcao para copiar uma matriz resultante para a matriz total
function juntaMatriz(matriz){
  for(i = 0; i < matriz.length; i++){
    for (j = 0; j < matriz[i].length; j++){
      if(matriz[i][j] != "-"){
        alo[i][j] = matriz[i][j]
      }
    }
  }
  return alo
}

//Func principal para achar a palavra na matriz
function achaLetra(matriz, palavra){

  possibleDir = {
    
    //Func para achar os elementos para cima
    cima(i, j, matriz, palavra){
      if(i-contador >= 0 && matriz[i-contador][j] == palavra[contador]){
        resultado += matriz[i-contador][j]
        contador += 1
        if(resultado == palavra){
          return true
        }else if(contador > palavra.lenght){
          return false
        }else if(possibleDir['cima'](i, j, matriz, palavra)){
          return true
        }
      }else{
        return false
      }
    },
      
    //Func para achar os elementos para Cima -  Direita
    cimaD(i, j, matriz, palavra){
      if(i-contador >= 0 && j+contador < matriz[0].length && matriz[i-contador][j+contador] == palavra[contador]){
        resultado += matriz[i-contador][j+contador]
        contador += 1
        if(resultado == palavra){
          return true
        }else if(contador > palavra.lenght){
          return false
        }else if(possibleDir['cimaD'](i, j, matriz, palavra)){
          return true
        }
      }else{
        return false
      }   
    },
    
    //Func para achar os elementos a direita
    direita(i, j, matriz, palavra){
      if(j+contador <= matriz[i].length && matriz[i][j+contador] == palavra[contador]){
        resultado += matriz[i][j+contador]
        contador += 1

        if(resultado == palavra){
          return true
        }else if(contador > palavra.length){
          return false
        }else if(possibleDir['direita'](i, j, matriz, palavra)){
          return true
        }
      }else{
        return false
      } 
    },
    
    //Func para achar os elementos para Baixo - Direita
    baixoD(i, j, matriz, palavra){
      if(i+contador < matriz.length && j+contador < matriz[0].length && matriz[i+contador][j+contador] == palavra[contador]){
          resultado += matriz[i+contador][j+contador]
          contador += 1
          if(resultado == palavra){
            return true
          }else if(contador > palavra.lenght){
            return false
          }else if(possibleDir['baixoD'](i, j, matriz, palavra)){
            return true
          }
        }else{
          return false
        }  
    },
      
    //Func para achar os elementos para baixo
    baixo(i, j, matriz, palavra){
      if(i+contador < matriz.length && matriz[i+contador][j] == palavra[contador]){
        resultado += matriz[i+contador][j]
        contador += 1
        if(resultado == palavra){
          return true
        }else if(contador > palavra.lenght){
          return false
        }else if(possibleDir['baixo'](i, j, matriz, palavra)){
          return true
        }
      }else{
        return false
      } 
    },

    //Func para achar os elementos para Baixo - Esquerda   
    baixoE(i, j, matriz, palavra){
      if(i+contador < matriz[0].length && j-contador >= 0 && matriz[i+contador][j-contador] == palavra[contador]){
        resultado += matriz[i+contador][j-contador]
        contador += 1
        if(resultado == palavra){
          return true
        }else if(contador > palavra.lenght){
          return false
        }else if(possibleDir['baixoE'](i, j, matriz, palavra)){
          return true
        }
      }else{
        return false
      }   
    },
    
    //Func para achar os elementos a esquerda
    esquerda(i, j, matriz, palavra){
      if(j-contador >= 0 && matriz[i][j-contador] == palavra[contador]){
        resultado += matriz[i][j-contador]
        contador += 1
        
        if(resultado == palavra){
          return true
        }else if(contador > palavra.length){
          return false
        }else if(possibleDir['esquerda'](i, j, matriz, palavra)){
          return true
        }
      }else {
        return false
      }  
    },
    
    //Func para achar os elementos para Cima - Esquerda
    cimaE(i, j, matriz, palavra){
      if(i-contador >= 0 && j-contador >= 0 && matriz[i-contador][j-contador] == palavra[contador]){
        resultado += matriz[i-contador][j-contador]
        contador += 1
        if(resultado == palavra){
          return true
        }else if(contador > palavra.lenght){
          return false
        }else if(possibleDir['cimaE'](i, j, matriz, palavra)){
          return true
        }
      }else{
        return false
      }
    },

  }

  for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[0].length; j++) {
      if(matriz[i][j] == palavra[0]){
        for (direction in possibleDir){
          if(possibleDir[direction](i, j, matriz, palavra)){
            matrizResult = criaMatResult(i, j, palavra, direction)
          }
          zerando()
        } 
      }
    }
  }
  //Matriz com resultados separados
  //console.log(matrizResult)

  //Junta todas as matrizes resultantes em uma so
  //matrizResult = juntaMatriz(matrizResult)

  //Matriz com resultados todos juntos
  //console.log(matrizResult)
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
    }else if(direcao == "baixoD"){
      matResult[i+percorre][j+percorre] = palavra[percorre]
    }else if(direcao == "baixoE"){
      matResult[i+percorre][j-percorre] = palavra[percorre]
    }else if(direcao == "cimaD"){
      matResult[i-percorre][j+percorre] = palavra[percorre]
    }else if(direcao == "cimaE"){
      matResult[i-percorre][j-percorre] = palavra[percorre]
    }
  }
  return matResult
}
