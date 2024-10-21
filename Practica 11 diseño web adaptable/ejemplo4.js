let productos = [
    {nombre: "laptop", precio: 800, categoria: "electronica"},
    {nombre: "bicicleta", precio: 300, categoria: "deportes"},
    {nombre: "telefono", precio: 500, categoria: "electronica"},
    {nombre: "zapatillas", precio: 100, categoria: "deportes"}
];

//funcion que filtra productos por categoria y reorganiza
function filtraproductosporcategoria(categoria, ...listaproductos){
    let filtrados = listaproductos.filter(producto=> producto.categoria === categoria);
    let precios = filtrados.map(producto => producto.precio);

    return {
        categoria,
        productosfiltrados: filtrados,
        precios: [...precios]
    };
}

//llamar la funcion con productos y reorganiza los precios en un arreglo aparte

let resultado = filtraproductosporcategoria("electronica", ...productos);

console.log(resultado);