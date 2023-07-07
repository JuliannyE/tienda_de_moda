// {
//     nombre:  "",
//     precio: ""
// }

let carrito = []

function parseCarrito(obj) {
    return JSON.parse(obj) || []
}

function cargarCarrito() {
    carrito = parseCarrito(localStorage.getItem("carrito"))
}

function agregarProducto(producto) {

    carrito.push(producto)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function sacarProducto(producto) {
    carrito = carrito.filter(p => {
        if (p.nombre !== producto.nombre) return true
        if (p.precio !== producto.precio) return true

        return false

    })

    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function limpiarCarrito() {
    localStorage.clear()
    cargarCarrito()
}

cargarCarrito()