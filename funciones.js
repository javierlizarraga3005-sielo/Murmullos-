const bebidas = {
    mezcalitas: "imagenes/mezcalitas.png",
    gin: "imagenes/gin-frutos-rojos.png",
    carajillo: "imagenes/carajillo-baileys.png",
    coqueta: "imagenes/coqueta.png",
    lychee: "imagenes/lychee-martini.png"
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
