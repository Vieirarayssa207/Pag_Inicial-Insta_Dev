let img = document.querySelector(".troca-img")

function trocarImagem(){
    
    if(img.style.opacity == 0){
        img.style.opacity = 1
    } else {
        img.style.opacity = 0
    }
}

setInterval(trocarImagem, 5000)