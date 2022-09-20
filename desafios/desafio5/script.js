var num = document.getElementById('num')
var lista = document.getElementById('flista')
var resultado = document.getElementById('resultado')
var valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, valores)){
        window.alert('Tudo OK')
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
}

