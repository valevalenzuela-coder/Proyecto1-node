export const rutaInmobiliaria= (ruta) =>{
    location.href = ruta
} 

document.querySelector(".verPropiedadesEnVentaBtn").addEventListener( "click", ()=>{
rutaInmobiliaria("./assets/paginas/propiedades_venta.html")
}) 

document.querySelector(".verPropiedadesEnArriendoBtn").addEventListener( "click", ()=>{
rutaInmobiliaria("./assets/paginas/propiedades_arriendo.html")
}) 