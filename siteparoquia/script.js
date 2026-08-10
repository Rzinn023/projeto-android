// MENU MOBILE

const menu = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav");


if(menu){

menu.addEventListener("click",()=>{

    nav.classList.toggle("ativo");

});

}



// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll("nav a");


links.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("ativo");

    });

});





// MUDAR CABEÇALHO AO ROLAR A PÁGINA


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.background="#ffffff";

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";


    }else{


        header.style.boxShadow="0 3px 15px rgba(0,0,0,.08)";


    }


});





// ANIMAÇÃO DE APARECER


const elementos = document.querySelectorAll(".card, .titulo, .fotos img");


const observar = new IntersectionObserver((entradas)=>{


    entradas.forEach((entrada)=>{


        if(entrada.isIntersecting){


            entrada.target.classList.add("mostrar");


        }


    });


});



elementos.forEach((elemento)=>{


    elemento.classList.add("animar");


    observar.observe(elemento);


});