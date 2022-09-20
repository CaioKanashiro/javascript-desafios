function contar(){
    var numero = document.getElementById("txtnumero")
    var tabuada = document.getElementById("tabuada")
    if(numero.value == 0){
        window.alert ("[ERRO] Falta de Dados")
    }else{
        var num = Number(numero.value)
        tabuada.innerHTML = ''
        for(var contador = 1; contador <= 10; contador++){
            var item = document.createElement('option')
            item.innerHTML = `${num} X ${contador} = ${num*contador}`
            tabuada.appendChild(item)
        }
    }
}