//-----Navegador movil------//
let menuVisible = false;

function mostrarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccion(){
    document.getElementById("nav").classlist = "";
    menuVisible = false;
}

//---Animaciones de Skill----//

function animacionSkill(){
    var skill = document.getElementById("skill");
    var distancia_skill = window.innerHeight - skill.getBoundingClientRect().top;
    if (distancia_skill >= 300){
        let animacion = document.getElementsByClassName("progress");
        animacion[0].classList.add("html");
        animacion[1].classList.add("css");
        animacion[2].classList.add("php");
        animacion[3].classList.add("javascript");
        animacion[4].classList.add("python");
        animacion[5].classList.add("trabajo-equipo");
        animacion[6].classList.add("comunicacion");
        animacion[7].classList.add("dedicacion");
        animacion[8].classList.add("creatividad");
    }
}

window.onscroll = function(){
    animacionSkill();
}

//----Botones Mostrar y ocultar imformacion-----//

function mostrarCerrar (selec, identidad){
    div=document.getElementById(identidad);
    if (selec==true){
        div.style.display='';
    }else{
        div.style.display='none'
    }
}     