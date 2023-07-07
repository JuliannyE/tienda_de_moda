const productos = [
    {
        nombre: "Blusa Blanca",
        img: "https://i.pinimg.com/564x/0b/87/aa/0b87aa342745f605670d75cf8b5df877.jpg",
        alt: "Camisa mujer manga larga blanca algodon",
        precio: 154.00
    },
    {
        nombre: "Conjunto Naranja",
        img: "https://i.pinimg.com/564x/b3/06/26/b30626a8403aba9dbb1233820784d173.jpg",
        alt: "Conjunto mujer naranja algodon",
        precio: 54.00
    },
    {
        nombre: "Blusa Violeta",
        img: "https://i.pinimg.com/564x/7a/bb/e0/7abbe09ee9d672d0736e3074900c5e0c.jpg",
        alt: "Camisa mujer manga larga algodon purpura",
        precio: 97.00
    },
    {
        nombre: "Enterito Blanco",
        img: "https://i.pinimg.com/564x/ca/7b/a1/ca7ba12ad989595f1acacee34c1decfa.jpg",
        alt: "Vestido mujer blanco seda",
        precio: 89.99
    },
    {
        nombre: "Chaleco Gillete",
        img: "https://i.pinimg.com/564x/e0/f2/05/e0f20500eff9c29347528bf81f9a3380.jpg",
        alt: "Chaleco mujer blanco algodon",
        precio: 58.87
    },
    {
        nombre: "Manga larga Café",
        img: "https://i.pinimg.com/564x/42/7c/ff/427cffe917349dacdd5e23a6b0a52490.jpg",
        alt: "Camisa mujer manga larga cafe",
        precio: 32.00
    },
]

const divProductos = document.querySelector(".main-collage")

function agregarAlCarrito(index) {
    agregarProducto(productos[index])
    if (confirm("Agregado! ¿Quieres ir al carrito?")) {
        window.location.replace("./shopping-bag.html")
    }

}

function cargarProductos() {
    let innerProducts = ""
    productos.forEach((p, index) => {
        innerProducts = innerProducts + `
        <div class="collage-element">
            <img src=${p.img}
                alt=${p.alt}>
            <span>${p.nombre}</span>
            <b>${p.precio.toFixed(2)} $</b>
            <button onclick="agregarAlCarrito(${index})" >Agregar al carro</button>
        </div>`
    })

    divProductos.innerHTML = innerProducts
}

cargarProductos()