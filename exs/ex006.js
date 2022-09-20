/* 
var idade = 64
console.log(`Você tem ${idade} anos. `)
if(idade < 16){
    console.log("Não vota")
}else if(idade <= 17 || idade >= 65){
    console.log("Voto opcional")
    }else{
        console.log("Voto obrigatório")
    }
*/

/*
num = 8
num **=2

console.log(num)
 */

var obj = {nome:"Caio", idade: 21, altura: 1.70, casado: false }

function apresentar(){
    console.log(`O nome da pessoa é ${obj.nome} tem ${obj.idade} anos, ${obj.altura} de altura`)
}
apresentar()
 