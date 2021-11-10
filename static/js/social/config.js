let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalc = document.querySelectorAll(".modal_container")[0];

abrir.addEventListener("click", (e) => {
    e.preventDefault();
    modalc.style.opacity = "1";
    modalc.style.visibility = "visible";
    modal.classList.toggle("modal_close");
});

cerrar.addEventListener("click", () => {
    modal.classList.toggle("modal_close");
    setTimeout(() => {
        modalc.style.opacity = "0";
        modalc.style.visibility = "hidden";
    }, 850);
});

window.addEventListener("click", (e) => {
    if (e.target == modalc) {
        modal.classList.toggle("modal_close");
        setTimeout(() => {
            modalc.style.opacity = "0";
            modalc.style.visibility = "hidden";
        }, 850);
    }
});

let cerrar_2 = document.querySelectorAll(".close_2")[0];
let abrir_2 = document.querySelectorAll(".cta_2")[0];
let modal_2 = document.querySelectorAll(".modal_2")[0];
let modalc_2 = document.querySelectorAll(".modal_container_2")[0];

abrir_2.addEventListener("click", (e) => {
    e.preventDefault();
    modalc_2.style.opacity = "1";
    modalc_2.style.visibility = "visible";
    modal_2.classList.toggle("modal_close_2");
});

cerrar_2.addEventListener("click", () => {
    modal_2.classList.toggle("modal_close_2");
    setTimeout(() => {
        modalc_2.style.opacity = "0";
        modalc_2.style.visibility = "hidden";
    }, 850);
});

window.addEventListener("click", (e) => {
    if (e.target == modalc_2) {
        modal_2.classList.toggle("modal_close_2");
        setTimeout(() => {
            modalc_2.style.opacity = "0";
            modalc_2.style.visibility = "hidden";
        }, 850);
    }
});

let cerrar_3 = document.querySelectorAll(".close_3")[0];
let abrir_3 = document.querySelectorAll(".cta_3")[0];
let modal_3 = document.querySelectorAll(".modal_3")[0];
let modalc_3 = document.querySelectorAll(".modal_container_3")[0];

abrir_3.addEventListener("click", (e) => {
    e.preventDefault();
    modalc_3.style.opacity = "1";
    modalc_3.style.visibility = "visible";
    modal_3.classList.toggle("modal_close_3");
});

cerrar_3.addEventListener("click", () => {
    modal_3.classList.toggle("modal_close_3");
    setTimeout(() => {
        modalc_3.style.opacity = "0";
        modalc_3.style.visibility = "hidden";
    }, 850);
});

window.addEventListener("click", (e) => {
    if (e.target == modalc_3) {
        modal_3.classList.toggle("modal_close_3");
        setTimeout(() => {
            modalc_3.style.opacity = "0";
            modalc_3.style.visibility = "hidden";
        }, 850);
    }
});

let cerrar_4 = document.querySelectorAll(".close_4")[0];
let abrir_4 = document.querySelectorAll(".cta_4")[0];
let modal_4 = document.querySelectorAll(".modal_4")[0];
let modalc_4 = document.querySelectorAll(".modal_container_4")[0];

abrir_4.addEventListener("click", (e) => {
    e.preventDefault();
    modalc_4.style.opacity = "1";
    modalc_4.style.visibility = "visible";
    modal_4.classList.toggle("modal_close_4");
});

cerrar_4.addEventListener("click", () => {
    modal_4.classList.toggle("modal_close_4");
    setTimeout(() => {
        modalc_4.style.opacity = "0";
        modalc_4.style.visibility = "hidden";
    }, 850);
});

window.addEventListener("click", (e) => {
    if (e.target == modalc_4) {
        modal_4.classList.toggle("modal_close_4");
        setTimeout(() => {
            modalc_4.style.opacity = "0";
            modalc_4.style.visibility = "hidden";
        }, 850);
    }
});