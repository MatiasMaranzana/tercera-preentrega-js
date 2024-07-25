function renderCarrito() {
    const carrito = cargarCarritoLS();

    let contenidoHtml;

    if (totalProductos() > 0) {
        contenidoHtml = `<table class="table">
    <tbody>
    <tr>
        <td class="text-end" colspan="6"><button class="btn btn-danger btn-sm" onclick="vaciarCarrito();">Vaciar Carrito <i class="bi bi-trash"></i></button></td>
    </tr>`;
    for (const suplemento of carrito) {
        contenidoHtml += `<tr>
        <td><img src="${suplemento.imagen}" alt="${suplemento.nombre}"width="50"></td>
        <td class= "text-center align-middle">${suplemento.nombre}</td>
        <td class= "text-center align-middle">${suplemento.sabor}</td>
        <td class= "text-center align-middle">${suplemento.marca}</td>
        <td class= "text-center align-middle">$${suplemento.precio}</td>
        <td class= "text-end align-middle"><button class= "btn btn-danger btn-sm" onclick = "eliminarProducto(${suplemento.codigo});">Eliminar <i class="bi bi-trash"></i></button></td>
    </tr>`;
    }

    contenidoHtml += `</tbody>
    </table>`;

} else {
    contenidoHtml = `<div class="alert alert-dark my-5 text-center" role="alert">
        <p>No se encontraron Productos en el Carrito!</p>
        </div>`;
}
    

    document.getElementById("contenido").innerHTML = contenidoHtml;
}

renderCarrito();