import { propiedadesEnArriendo, propiedadesEnVenta } from "./arraysPropiedades.js";

 const mostarPropiedades = (arrayPropiedades, contenedorHTML) => {

let contenidoHTML = "";
let count =0;

for (const propiedad of arrayPropiedades){
    if(count < 3){
        contenidoHTML += ` 
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} 

                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                
                   ${propiedad.smoke ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido Fumar  </p>' : ' <p class="text-danger"><i class="fas fa-smoking-ban"></i> no se permite fumar </p>'}
               
                
                   ${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas Permitidas </p>' : '<p class="text-danger"><i class="fas fa-ban"></i>No se permiten Mascotas     </p>'}
           
                </div>
                </div>
        </div> `
        
            count++;
    }
}
if (contenedorHTML){
contenedorHTML.innerHTML=contenidoHTML;
}
};

const filaVenta= document.querySelector("#fila-venta");
const filaAlquiler= document.querySelector("#fila-alquiler");

mostarPropiedades(propiedadesEnVenta, filaVenta);
mostarPropiedades(propiedadesEnArriendo, filaAlquiler)