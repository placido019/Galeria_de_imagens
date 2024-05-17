 /*
const aluno = "joao"

if(aluno == "joao") {
    console.log("SIm joão é voce")
} else {
    console.log("Não é o joao")
}



const notaMedia = 6;
if(notaMedia <= 6 ) {
    alert("reprovado")
} else if (notaMedia >= 4 && notaMedia <6 ) {
alert("aluno quase passou")
}
 else {
    alert("aprovado")
}

/*
= sinal de atribuição
== sinal de comparação 
=== verifica se são iguais e tem o mesmo tipo de dados
!= se é diferente
!== se é estritamente diferente
*/
/*
document.addEventListener('DOMContentLoaded', function() { 
    window.alert(123); 
}); */
    //let = posso alterar valor (para contas é perfeito)
    //const = não posso alterar o valor 
//tipos de dados
//string: Sequencia de caractere
//number: numeros inteiros e pontos flutuantes
//object: estrutura de dados que armazena multiplos valores
//boolean: retorna dois valores true e false
//null: quando esta vazio
//array: objeto especial ou ordenado 
//function: bloco de código reutilizavel 


// -------------------------- // ---------------------------------

//Funções são blocos de código que podem ser chamados e 
//reutilizados :)
//Dentro dos () funções, vão parametros
//Posso passar qualquer coisa como parametro, variaveis, arrays e etc


function PrimeiraFunção () { 
    return `${parametro}, ${segundoParametro}`;
}
const segundoParametro = ", agora com dois parametros"
const parametro = "Essa é uma função com parametro"
console.log(PrimeiraFunção(parametro, segundoParametro));
//--------------------------------- / ---------------------
//arrays em JavaScript são estrutura de dados que permitem
//armazenar uma coleção ordenada de elementos.

let joao = [
    idade = 18,
    altura = 1.73,
    cidade = "francisco beltrao",
    animal = false
]

console.log(joao[0]);
console.log(joao[1]);

//-------------------------------- / --------------
//Os objetos são coleções NÃO ORDENADAS de 
//pares chave-valor, onde cada valor é associado
//quando utiliza-se { } se refere a objeto ao invés de array
//define manualmente as chaves

let pessoa = { 
nome: 'Maria',
time: "corinthians",
ptofissao: 'vendedora',
idadae: 18

}

console.log(pessoa["curso"]); //para chamar uma "Variavel" pelo objeto devo colocar o nome dela entre aspas " "

//-------------------------- / -------------

//ForEach faz a leitura de todos os valores dentro de um vetor
const numeros = ["A", "B", "C", "D"]

numeros.forEach(num => {
    console.log(num)
})

