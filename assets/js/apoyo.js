const condicion_mascotas = (condicion = false) => {
    return condicion ? 
    `<p class="text-success">
    <i class="fas fa-paw"></i> Mascotas permitidas
    </p>` : 
    `<p class="text-danger">
    <i class="fas fa-ban"></i> No se permiten mascotas
    </p>`;
};

const condicion_fumar = (condicion = false) => {
    return condicion ? 
    `<p class="text-success">
    <i class="fas fa-smoking"></i> Permitido fumar
    </p>` : 
    `<p class="text-danger">
    <i class="fas fa-smoking-ban"></i> No se permite fumar
    </p>`;
};

const construccion_card = (contenido , ciclos = 0) =>{
    let _contador = 0;
    let _contenidoHtml = '';

    for(let objeto of contenido){
        _contador++;
        _contenidoHtml += `
        <div class="col-md-4 mb-4">
                <div class="card">
                  <img
                    src="${objeto.src}"
                    class="card-img-top"
                    alt="Imagen del inmueble"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                    ${objeto.nombre}
                    </h5>
                    <p class="card-text">
                        ${objeto.descripcion}
                    </p>
                    <p>
                      <i class="fas fa-map-marker-alt"></i> ${objeto.ubicacion}
                    </p>
                    <p>
                      <i class="fas fa-bed"></i> ${objeto.habitaciones} Habitaciones |
                      <i class="fas fa-bath"></i> 2 Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${objeto.costo.toLocaleString('es-CL') } </p>
                    ${condicion_fumar(objeto.smoke)}
                    ${condicion_mascotas(objeto.pets)}
                  </div>
                </div>
              </div>`
        if(_contador === ciclos)
            return _contenidoHtml;
    }
    return _contenidoHtml;
};

