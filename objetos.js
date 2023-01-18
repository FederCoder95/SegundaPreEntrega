function Producto(descripcion, precio) {
    this.descripcion = descripcion;
    this.precio = precio;
}
let listaProductos = [
    new Producto(`BOTIN`, 4000),
    new Producto('zapatos', 3000),
    new Producto(`Camisa`, 5000),
];
let otroArray =[]
for (const producto of listaProductos) {
    if (producto.precio >3000){
        otroArray.push(Producto);
    }
}
console.log(otroArray);

let listaConPreciosMayoresA3000 = listaProductos.filter(producto => {
    return producto.precio > 3000;
});
console.log(listaConPreciosMayoresA3000);

let BOTIN = listaProductos.find(producto => producto.descripcion == "BOTIN" && producto.precio == 3000);
console.log(BOTIN);