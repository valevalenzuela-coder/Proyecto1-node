import { propiedadesEnArriendo } from "./arraysPropiedades.js"
export const cargarArriendo =() =>{
const container= document.querySelector("#fila-alquiler");
    let contenidoHTML = '';

    for (let propiedadesArriendo of propiedadesEnArriendo){

contenidoHTML+= `

<div class= "col-md-4 mb-4">
<div class= "card h-100">
<img src="${propiedadesArriendo.src}" class="card-img-top "  alt="Imagen-apartamento" style="height: 200px; object-fit: cover;">
<div class= "card-body">
<h5> ${propiedadesArriendo.nombre}</h5>
<p> ${propiedadesArriendo.ubicacion}</p>
<p> costo: $${propiedadesArriendo.costo}</p>
<p style="color: ${propiedadesArriendo.smoke ? 'green' : 'red'}">
    ${propiedadesArriendo.smoke
    ? '<i class="fa-solid fa-smoking"></i> Permitido fumar'
    : '<i class="fa-solid fa-ban"></i>No se permite fumar'}
</p>

<p style="color: ${propiedadesArriendo.pets ? 'green' : 'red' }">  
    ${propiedadesArriendo.pets 
    ? '<i class="fa-solid fa-dog"></i> Se permiten mascotas'
    : ' <i class="fa-solid fa-ban"></i> No se permiten mascotas'} 
</p>
</div>
</div>
</div>`

}
if(container){
container.innerHTML=contenidoHTML;
}
};
cargarArriendo();
