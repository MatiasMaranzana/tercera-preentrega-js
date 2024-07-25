const suplementos = [
    {codigo:23, tipo: "proteina", marca: "ENA", nombre:"True made", presentacion: "1 kg", sabor: "Vainilla", precio:14900, imagen: "https://simplicityar.vtexassets.com/arquivos/ids/166779/143033_suplemento-dietario-whey-protein-sabor-vainilla-en-polvo-x-1000-g__imagen-1.jpg?v=638246950157400000"},
    {codigo:15, tipo: "proteina", marca: "ENA", nombre:"True made", presentacion: "1 kg", sabor: "Frutilla", precio:14900, imagen: "https://www.enasport.com/cdn/shop/files/7792981062049_2_11756efc-c5e5-49a6-a2ac-422ee0b7f23d.jpg?v=1715602195"},
    {codigo:63, tipo: "proteina", marca: "ENA", nombre:"True made", presentacion: "1 kg", sabor: "Chocolate", precio:14900, imagen: "https://simplicityar.vtexassets.com/arquivos/ids/169903-800-auto?v=638288421219270000&width=800&height=auto&aspect=true"},
    {codigo:12, tipo: "creatina", marca: "STAR NUTRITION", nombre:"Crea Pure", presentacion: "300 gr", sabor: "Neutro", precio:21900, imagen: "https://acdn.mitiendanube.com/stores/123/325/products/33121-c1cba69cf82eee266916509785327651-640-0.jpg"},
    {codigo:96, tipo: "creatina", marca: "STAR NUTRITION", nombre:"Crea Pure", presentacion: "150 gr", sabor: "Neutro", precio:13900, imagen: "https://workupsuplementos.com/web/image/product.template/17629/image_1024?unique=eec8c20"},
    {codigo:52, tipo: "multivitaminico", marca: "PULVER", nombre:"Vitaminas", presentacion: "60 comp.", sabor: "Neutro", precio:8000, imagen: "https://www.pronatural.com.ar/images/productos/vitaminas-y-minerales.jpg"},    
];

function renderSuplementos() {
    let contenidoHtml = "";

    for (const suplemento of suplementos) {
        contenidoHtml += `<div class= "col-md-4">
        <div class="card border-0">
        <img src="${suplemento.imagen}" class="card-img-top" alt="${suplemento.nombre}">
            <div class="card-body text-center">
                <p class="card-text">${suplemento.nombre} <br> ${suplemento.marca} <br>Sabor: ${suplemento.sabor} <br> $ ${suplemento.precio} </p>
                <p class="card-text"><button class="btn btn-primary" onclick= "agregarProducto(${suplemento.codigo})">Agregar (+)</button></p>
            </div>
        </div>
    </div>`;
        console.log(contenidoHtml);
    }

    document.getElementById("contenido").innerHTML = contenidoHtml;
}

function agregarProducto(codigo) {
    const suplemento = suplementos.find(item => item.codigo == codigo);
    const carrito = cargarCarritoLS();
    carrito.push(suplemento);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
    console.log("El producto se agrego correctamente!");
}

function eliminarProducto(codigo) {
    const carrito = cargarCarritoLS();
    const carritoActualizado = carrito.filter(item => item.codigo != codigo);
    guardarCarritoLS(carritoActualizado);
    renderCarrito();
    renderBotonCarrito();
    console.log("El producto se elimino correctamente!");
}
function renderBotonCarrito() {
    let total = totalProductos();
    document.getElementById("totalCarrito").innerHTML = total;
}

function totalProductos() {
    const carrito = cargarCarritoLS();
    return carrito.length;

    return carrito.length;
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarritoLS (carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
}
renderSuplementos();
renderBotonCarrito();