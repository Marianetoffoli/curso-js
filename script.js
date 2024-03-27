function carregar(){
    const msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `São exatamente ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = "manha.png"
        document.body.style.background = "#ecc192"
    }
    else if (hora >= 12 && hora < 18) {
        img.src = "tarde.png"
        document.body.style.background = "#f6b170"
    }
    else {
        img.src = "noite.png"
        document.body.style.background = "#453a3e"
    }
}

