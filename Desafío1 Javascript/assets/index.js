let precio = 400000
let cantidad= 0

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan= document.querySelector(".cantidad");
const valortotalSpan= document. querySelector(".valor-total");
const btnAumentar= document. querySelector (".btn1"); 
const btnDisminuir= document. querySelector(".btn2");


precioSpan.innerHTML = precio.toLocaleString('es-CL'); 

const actualizarTotal= ()=> {
    const total= precio * cantidad;
    cantidadSpan.innerHTML= cantidad;
    valortotalSpan.innerHTML= total.toLocaleString('es-CL');
}; 

actualizarTotal(); 

btnAumentar.addEventListener("click",()=>{
    cantidad++;
    actualizarTotal();
}); 

btnDisminuir.addEventListener("click", ()=>{
    if(cantidad>0){
    cantidad--;  
     actualizarTotal();
}
 }); 