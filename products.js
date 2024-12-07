const productos = {
    "1":{
        "Nombre": "Producto 1",
        "Imagen": "productos/Anillado.png",
        "Descripcion": "Anillados de tamaño x para hacer no se que para hacer no se cuantas coas bla bla bla",
        "Precio": "$200"
    },

    "2":{
        "Nombre": "Producto 2",
        "Imagen": "productos/Carpeta.png",
        "Descripcion": "Descripcion del productos",
        "Precio": "$100"
    }
};

fetch('products.json')
  .then(response => response.json())
  .then(productos => {
    const params = new URLSearchParams(window.location.search);
    const idProducto = params.get("id");

    if (productos[idProducto]) {
      const producto = productos[idProducto];
      
      // Actualizar el contenido de la página con la información del producto
      document.getElementById("nombre-producto").textContent = producto.Nombre;
      document.getElementById("imagen-producto").src = producto.Imagen;
      document.getElementById("descripcion-producto").innerHTML = producto.Descripcion.replace(/\n/g, '<br>');
      document.getElementById("precio-producto").textContent = producto.Precio;

      document.getElementById('buy-button').onclick = function() {
        document.getElementById('contact-modal').style.display = 'block';
    };

    } else {
      // Si no se encuentra el producto
      document.getElementById("producto-container").textContent = "Producto no encontrado";
    }
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

