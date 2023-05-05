// EXERCICIO DE FIXAÇÃO
let idade= Number(prompt("Qual a sua idade?"))
let idadeamg= Number(prompt("Qual a idade do seu melhor amigo/amiga?"))

//Pergunto a idade dos dois e depois comparo.

const comparacao =idade > idadeamg
console.log("Sua idade é maior que a do seu amigo?", comparacao)

let idadequest= confirm("Sua idade é maior que a do seu melhor amigo?")
console.log("A diferença de idade é", idade - idadeamg)
