function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById("txtano")
    var resultado = document.getElementById("resultado")

    if(formano.value.length == 0 || Number(formano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var formsex = document.getElementsByName("radiosex")
        var idade = ano - Number(formano.value)
        var genero = ''

        if(formsex[0].checked){
            genero = 'Homem'
        }else if(formsex[1].checked){
            genero = 'Mulher'
        }
        resultado.innerHTML = `Detectamos ${genero} de ${idade} anos`
    }
}