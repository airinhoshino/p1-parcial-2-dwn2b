'use strict';

/*
 *  APELLIDOS
 */

let productos = [
    {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'Descripción del producto 1',
        precio: 1000,
        imagen: 'producto-de-ejemplo.jpg',
        altimagen: 'altimagen1',
        categoria: 'Blends',
        infoxtra: 'infoextra1',
    },
    {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'Descripción del producto 2',
        precio: 1500,
        imagen: 'producto-de-ejemplo.jpg',
        altimagen: 'altimagen2',
        categoria: 'Kit',
        infoxtra: 'infoextra2',
    },
    {
        id: 3,
        nombre: 'Producto 3',
        descripcion: 'Descripción del producto 3',
        precio: 2000,
        imagen: 'producto-de-ejemplo.jpg',
        altimagen: 'altimagen3',
        categoria: 'Accesorios',
        infoxtra: 'infoextra3',
    },
    {
        id: 4,
        nombre: 'Producto 4',
        descripcion: 'Descripción del producto 4',
        precio: 2500,
        imagen: 'producto-de-ejemplo.jpg',
        altimagen: 'altimagen4',
        categoria: 'Blends',
        infoxtra: 'infoextra4',
    },
    {
        id: 5,
        nombre: 'Producto 5',
        descripcion: 'Descripción del producto 5',
        precio: 3000,
        imagen: 'producto-de-ejemplo.jpg',
        altimagen: 'altimagen5',
        categoria: 'Kit',
        infoxtra: 'infoextra5',
    },
    {
        id: 6,
        nombre: 'Producto 6',
        descripcion: 'Descripción del producto 6',
        precio: 3500,
        imagen: 'producto-de-ejemplo.jpg',
        altimagen: 'altimagen5',
        categoria: 'Accesorios',
        infoxtra: 'infoextra6',
    },
];


let sectionProducto = document.querySelector("#productos");


function mostrarProductos(arrayProducto){

    arrayProducto.forEach ((p)=> {
        let producto = new Producto (p.id, p.nombre, p.descripcion, p.precio, p.imagen, p.altimagen, p.categoria, p.infoextra);
        sectionProducto.append(producto.mostrarProducto());
    })
    
}


mostrarProductos(productos);


//Evento para Filtro de categorías
document.querySelector("select").addEventListener("change", (e) => {
    /* Guardo el option elegido */
    let categoria = e.target.value;

    let filtrado = productos.filter((producto) => producto.categoria.includes(categoria));
    console.log(filtrado);

    });






    


