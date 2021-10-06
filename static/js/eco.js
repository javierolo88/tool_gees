let cerrarEco = document.querySelectorAll(".csi")[0];
let abrirEco = document.querySelectorAll(".cta_eco")[0];
let modalEco = document.querySelectorAll(".msi")[0];
let modalcEco = document.querySelectorAll(".eco-container")[0];
let sociImg = document.querySelectorAll(".hola_soci")[0];

abrirEco.addEventListener("click", (e) =>{
    e.preventDefault();
    modalcEco.style.opacity= "1";
    modalcEco.style.visibility="visible";
    modalEco.classList.toggle('modal_close_eco');
    sociImg.classList.toggle('adios');
})

cerrarEco.addEventListener("click", ()=>{
    modalEco.classList.toggle('modal_close_eco');
    sociImg.classList.toggle('adios');
    setTimeout(() => {
        modalcEco.style.opacity = "0";
        modalcEco.style.visibility = "hidden";
    }, 850);
}) 

window.addEventListener("click", (e) => {
    if (e.target == modalcEco) {
        modalEco.classList.toggle('modal_close_eco');
        sociImg.classList.toggle('adios');
        setTimeout(() => {
            modalcEco.style.opacity = "0";
            modalcEco.style.visibility = "hidden";
        }, 850);
    }
});