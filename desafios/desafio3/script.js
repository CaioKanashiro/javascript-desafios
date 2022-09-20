function contar(){
    var inicio = document.getElementById("txtinicio")
    var fim = document.getElementById("txtfim")
    var passo = document.getElementById("txtpasso")
    var contando = document.getElementById("contando")

    if(inicio.value == 0 || fim.value == 0 || passo.value == 0 ){
        window.alert("[ERRO] ESTÃO FALTANDO DADOS !")
    }else{
        contando.innerHTML = "Contando: "

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(i < f){
            for(var contador = i; contador <= f; contador += p){
                contando.innerHTML += `${contador} -> `
            }
            contando.innerHTML += "FIM"
        }else{
            for(contador = i; contador >=f; contador -= p ){
                contando.innerHTML += `${contador} -> `
            }
            contando.innerHTML += "FIM"
        }
    }
}
