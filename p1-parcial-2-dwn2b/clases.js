class Producto {

    id;
    nombre;
    descripcion;
    precio;
    imagen;
    altimagen;
    categoria;
    infoextra;


    constructor(id, nombre, descripcion, precio, imagen, altimagen, categoria, infoextra){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.altimagen = altimagen;
        this.categoria = categoria;
        this.infoextra = infoextra;
      }

//Método para crear los productos en el HTML como cards, usando boostrap.      
mostrarProducto () {


        let div = document.createElement("div");
        div.className = "card mx-2";
        div.style.width = "18 rem";

        let img = document.createElement("img");
        img.className = "card-img-top";
        img.setAttribute("src", `${this.imagen}`);
        img.setAttribute("alt", `${this.altimagen}`);
        div.append(img);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";

        let nombreProducto = document.createElement("h3");
        
        nombreProducto.className = "card-title";
        nombreProducto.innerText = `${this.nombre}`;
        cardBody.append(nombreProducto);

        let categoria = document.createElement("p");
        categoria.className = "card-text";
        categoria.innerText = `${this.categoria}`;
        cardBody.append(categoria);

        let descripcion = document.createElement("p");
        descripcion.className = "card-text";
        descripcion.innerText = `${this.descripcion}`;
        cardBody.append(descripcion);

        div.append(cardBody);  

        return div;
}      

}




    


