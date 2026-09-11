const bebidas = {
    mezcalitas: "WhatsApp Image 2026-09-10 at 5.50.42 PM.jpeg",
    gin: "47d9c764-9be2-4432-bee5-8fd0f30378e7.jpg",
    carajillo: "eee17077-7f6c-493b-9707-3070d3fcc720.jpg",
    coqueta: "dff8842b-a26e-42af-9b8f-9b019e100768.jpg",
    lychee: "bada8892-55bc-4672-bad1-61727f8fb0ed.jpg"
};

function abrirFoto(bebida) {
    const ventana = document.getElementById("ventanaFoto");
    const imagen = document.getElementById("fotoBebida");

    imagen.src = bebidas[bebida];
    ventana.classList.add("activa");
}

function cerrarFoto() {
    const ventana = document.getElementById("ventanaFoto");
    ventana.classList.remove("activa");
}

document.addEventListener("click", function(evento) {
    const ventana = document.getElementById("ventanaFoto");

    if (evento.target === ventana) {
        cerrarFoto();
    }
});

document.addEventListener("keydown", function(evento) {
    if (evento.key === "Escape") {
        cerrarFoto();
    }
});
