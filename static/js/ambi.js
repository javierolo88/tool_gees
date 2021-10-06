let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta_ambi")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalc = document.querySelectorAll(".ambi-container")[0];
let ambiImg = document.querySelectorAll(".hola")[0];

abrir.addEventListener("click", (e) =>{
    e.preventDefault();
    modalc.style.opacity= "1";
    modalc.style.visibility="visible";
    modal.classList.toggle('modal_close');
    ambiImg.classList.toggle('adios');
})

cerrar.addEventListener("click", ()=>{
    modal.classList.toggle("modal_close");
    ambiImg.classList.toggle('adios');
    setTimeout(() => {
        modalc.style.opacity = "0";
        modalc.style.visibility = "hidden";
    }, 850);
})

window.addEventListener("click", (e) => {
    if (e.target == modalc) {
        modal.classList.toggle("modal_close");
        ambiImg.classList.toggle('adios');
        setTimeout(() => {
            modalc.style.opacity = "0";
            modalc.style.visibility = "hidden";
        }, 850);
    }
});