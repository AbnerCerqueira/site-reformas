window.sr = ScrollReveal({reset: true});

sr.reveal('.caixa', {duration:1300})


sr.reveal('.infos', {duration:1300})


sr.reveal('.alvenaria', {duration:1300})
sr.reveal('.AlvenariaImg', {duration:1300})

sr.reveal('.eletrica', {duration:1300})
sr.reveal('.EletricaImg', {duration:1300})

var menu = document.querySelector("#menu")
var teste = 0
function openMenu(){
    if (teste == 0) {      
        menu.src="img/close.svg"
        menu.style.width="30px"
        menu.style.height="30px"
        teste = 1
    }else{
        menu.src="img/menu.svg"
        teste = 0
    }

}

