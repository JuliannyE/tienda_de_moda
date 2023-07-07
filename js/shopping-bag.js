const divProductos = document.querySelector(".carrito")
const buttonPago = document.querySelector("#boton-pago")

buttonPago.addEventListener("click", () => {
    if (carrito.length <= 0) return;

    const precio = carrito.map(p => p.precio).reduce((a, b) => a + b);
    if (confirm(`¿Confirmas que quieres pagar ${precio.toFixed(2)} $?`)) {

        limpiarCarrito()
        alert("Pagado!")
        cargarProductos()
    }
})

function sacarDelCarrito(index) {
    if (confirm("¿Quieres sacar este producto")) {
        sacarProducto(carrito[index])
        cargarProductos()
    }

}

function cargarProductos() {
    let innerProducts = ""
    carrito.forEach((p, index) => {
        innerProducts = innerProducts + `
        <div class="carrito-element">
            <img src="${p.img}"
                alt="${p.alt}"/>
            <span>${p.nombre}</span>
            <b>${p.precio.toFixed(2)} $</b>
            <button onclick="sacarDelCarrito(${index})">Quitar</button>
        </div>`
    })

    divProductos.innerHTML = innerProducts
}

cargarProductos()