// aqui e a parte do menu, ainda em desenvolvimento, cosnt e uma variavel ainda em descobrimento
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-bar");

//aqui e o que acontece as variaveis ja criadas
menu.addEventListener("click",() =>{
    nav.classList.toggle("active");
    
    // if(nav.classList.contains("active")){
    //     alert("Still adapting menu");
    // }
}); 
// let detail = document.querySelector(".esconde");

// let teste= document.getElementById("texto-oculto");

// detail.addEventListener("click", () => {
//     teste.classList.item("active");
// });
// console.log("esse e um teste de js")