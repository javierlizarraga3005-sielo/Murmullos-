const bebidas = {
    mezcalitas: "99686bfb5116.jpg",
    gin: "8fd0f30378e7.jpg",
    carajillo: "3070d3fcc720.jpg",
    coqueta: "9b019e100768.jpg",
    lychee: "61727f8fb0ed.jpg"
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
