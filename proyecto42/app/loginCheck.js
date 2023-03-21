
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const loggedInputs = document.querySelectorAll("#plantilla");
const posicionado = document.querySelector("#position")
const iniciado = document.querySelector("#frase")
const equis = document.querySelector("#titu")


export const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
    loggedInputs.forEach((div) => (div.style.display = "block")); //para mostrarlo al iniciar sesion la caja de ingresar publicaciones
    posicionado.style.display = "none" 
    iniciado.style.display = "none"
    equis.style.display = "none"
    
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));   
    //console.log(loggedInputs);
    loggedInputs.forEach((div) => (div.style.display = "none")); //para ocultar al cerrar sesion la caja de ingresar publicaciones
    posicionado.style.display = "block" 
    iniciado.style.display = "block"
    equis.style.display = "block"
    
  }
};
