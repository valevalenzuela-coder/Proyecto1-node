import { propiedadesEnVenta}from "./arraysPropiedades.js";

export const cargarVentas =() =>{
    const contenedor = document.querySelector("#fila-venta");
    let contenidoHTML= '';
    for (let venta of propiedadesEnVenta){

contenidoHTML+= `
<div class= "col-md-4 mb-4">
<div class= "card h-100">
<img src="${venta.src}" class="card-img-top" alt="imagen"style="height: 250px; object-fit: cover;" >
<div class="card-body">
<h5> ${venta.nombre}</h5>
<p> ${venta.ubicacion}</p>
<p> costo: $${venta.costo}</p>
<p style="color: ${venta.smoke ? 'green' : 'red'}">
    ${venta.smoke
    ? '<i class="fa-solid fa-smoking"></i> Permitido fumar'
    : '<i class="fa-solid fa-ban"></i>No se permite fumar'}
</p>

<p style="color: ${venta.pets ? 'green' : 'red' }">  
    ${venta.pets 
    ? '<i class="fa-solid fa-dog"></i> Se permiten mascotas'
    : ' <i class="fa-solid fa-ban"></i> No se permiten mascotas'} 
</p>
</div>
</div>
</div>`;
}
if(contenedor){
contenedor.innerHTML= contenidoHTML;
}
}
cargarVentas();