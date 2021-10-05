let cerrarSoci = document.querySelectorAll(".ssi")[0];
let abrirSoci = document.querySelectorAll(".cta_Soci")[0];
let modalSoci = document.querySelectorAll(".ssi")[0];
let modalcSoci = document.querySelectorAll(".soci-container")[0];

abrirSoci.addEventListener("click", (e) =>{
    e.preventDefault();
    modalcSoci.style.opacity= "1";
    modalcSoci.style.visibility="visible";
    modalSoci.classList.toggle('modal_close_soci');
})

cerrarSoci.addEventListener("click", ()=>{
    modalSoci.classList.toggle('modal_close_soci');
    setTimeout(() => {
        modalcSoci.style.opacity = "0";
        modalcSoci.style.visibility = "hidden";
    }, 850);
}) 
