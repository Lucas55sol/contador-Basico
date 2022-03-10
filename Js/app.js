const d = document;
const contenedor = d.querySelector('.contador');
const  $btnaum = d.querySelector('.aumentar');
const  $btndis = d.querySelector('.disminuir');

let contador = 0;
$btndis.disabled = true;

d.addEventListener('click', e=>{
       if(e.target.matches('.aumentar')){
           contador++;
           contenedor.textContent = contador;
           $btndis.disabled = false;
           
           if(contador >= 10){
              $btnaum.disabled = true; 
           }
       }

       if(e.target.matches('.disminuir')){
        contador--;
        contenedor.textContent = contador;
        $btnaum.disabled = false;

        if(contador <= 0){
           $btndis.disabled = true; 
        }
    }
});