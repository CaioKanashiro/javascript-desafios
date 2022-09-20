function parimpar(n){
    if(n%2 == 0){
        return "par"
    }else{
        return 'impar'
    }
}

console.log(parimpar(220 ))

function fatorial(num){
    var fat = 1
    for(var c = num; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

/* 
var resultado = parimpar(11)
console.log(resultado)
*/
