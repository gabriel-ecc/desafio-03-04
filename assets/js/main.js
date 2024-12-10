const contenedor_alquiler = document.getElementById('card-container-alquiler');
const contenedor_ventas = document.getElementById('card-container-ventas');


let contenido_alquiler = '';
let contenido_ventas = '';

contenedor_alquiler.innerHTML = construccion_card(propiedades_alquiler,3);
contenedor_ventas.innerHTML = construccion_card(propiedades_ventas,3);