import * as UI from './interfaz.js';
//console.log(UI);

UI.formularioBuscar.addEventListener('submit', e => {
    e.preventDefault();

    //Obtener datos del formulario
    //Es recomendable solo exportar los datos más estáticos, 
    //los más dinámicos, que requieren ser rellenados por el ususario
   // es mejor declarlos dentro del método.
   const artista = document.querySelector('#artista').value,
         cancion = document.querySelector('#cancion').value;
   //console.log(artista);
   //console.log(cancion);
   //Como no queremos que envíe nada vacío, hacemos lo siguiente:
   if(artista === '' || cancion === '') {
       //Mostrar error si el ususario deja campos vacíos.
       UI.divMensajes.innerHTML = 'Error....Todos los campos son obligatorios';
       UI.divMensajes.classList.add('error');
       setTimeout(() => {
            UI.divMensajes.innerHTML = '';
            UI.divMensajes.classList.remove('error');
       },3000);
   } else {
       //Si el formulario está completo realizar la consulta a la API.

   }

});