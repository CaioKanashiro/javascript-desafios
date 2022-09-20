function carregar(){
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 24
    mensagem.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        imagem.src = 'fotomanha.png'
        document.body.style.background = 'rgb(253, 208, 5)'
    }else if(hora >=12 && hora <=18){
        imagem.src = 'fototarde.png'
        document.body.style.background = 'rgb(255, 115, 0)'
    }else{
        imagem.src = 'fotonoite.png'
        document.body.style.background = 'rgb(2, 2, 54)'
    }
}
