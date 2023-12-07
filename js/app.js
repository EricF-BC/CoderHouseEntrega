let listaArray;

function preEntregaParteUno() {
  // Validador de campos
  let camposForm = document.forms["formularioContacto"].elements;
  for (let i = 0; i < camposForm.length; i++) {
    let campo = camposForm[i];
    if (campo.type !== "button") {
      let nombreCampo = campo.id.slice(0, -8);
      if (campo.id === "contraseña"){
          if (campo.value.trim() === "") {
            alert("Ingrese contraseña porfavor");
        } 
      }if (campo.id === "confirmacion_contraseña"){
          if (campo.value.trim() === "") {
            alert("Confirme contraseña porfavor");
          }
      } else if (campo.value.trim() === "") {
        alert("Ingrese el campo " + nombreCampo + " porfavor");
      }
    }
  }

  let numeroTelefono = document.getElementById("telefonocontacto").value;
  if (numeroTelefono.length < 11) {
    alert("El numero de telefono ingresado es muy corto");
  }

  let contraseña = document.getElementById("contraseña").value;
  let conContraseña = document.getElementById("confirmacion_contraseña").value;
  if ((contraseña !== "") & (conContraseña !== "")){
      if (contraseña === conContraseña) {
        alert("Las contraseñas son iguales, enviando a la tienda");
        window.location.href = 'listaproyecto.html';
      } else {
        alert("Las contraseñas No son iguales :C, intente de nuevo");
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
      }
  }

}

function agregarAlCarro(pos) {
  numero = document.getElementById("canti_compra_" + pos).value;
  if (numero <= listaArray[pos].cantidad){
    Swal.fire({
      title: 'Producto agregado!',
      html: "La cantidad total de la compra de " + numero + " es de : " + numero * listaArray[pos].precio,
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#00ff00'
    });
  } else{
    Swal.fire({
      title: 'Problemas con la cantidad',
      html: `Agrego una cantidad superior a la maxima entregada`,
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: '#ff0000'
    });
  }
  
}


function generarEstrellas(valoracion) {
  let stars = "";
  const valoracionNumerica = parseFloat(valoracion);

  if (!isNaN(valoracionNumerica) && valoracionNumerica >= 1 && valoracionNumerica <= 5) {
      const estrellasLlenas = Math.floor(valoracionNumerica);
      const estrellaParcial = valoracionNumerica % 1;

      for (let i = 1; i <= estrellasLlenas; i++) {
          stars += "&#9733;"; 
      }

      if (estrellaParcial > 0) {
          stars += "&#9733;"; 
      }
  }

  return stars || "Sin valoración"; 
}

function cargarJsonHtml(){
  const url = "/Json/data.json"
  fetch(url)
  .then(response => response.json()) 
  .then(data => {
    listaArray =  data
    generateBaseHTML(listaArray);
  })
  .catch(error => {
    console.error("Error al cargar el archivo JSON:", error);
  });
}

function generateBaseHTML(listaArray){
  let container = document.getElementById("intento");

  for (let i = 0; i < listaArray.length; i++) {
    container.innerHTML += generarHTML(i);
  }
}

function generarHTML(pos) {
  return `
      <!-- Producto ${pos + 1} -->
      <div class="col">
        <div class="card shadow-sm card-project">
              <img src="${listaArray[pos].imagen}" class="card-img-top" alt="Producto ${pos + 1}" />
              <div class="card-body">
                  <h5 class="card-title">${listaArray[pos].nombre}</h5>
                  <p class="card-text">${listaArray[pos].descripcion}</p>
                  <h5 class="card-subtitle mb-2"> Precio: $${listaArray[
                    pos
                  ].precio}</h5>
                  <div class="rating">
                  ${generarEstrellas(listaArray[pos].valoracion)}
                  <span class="valoracion-numero">${listaArray[pos].valoracion}</span>
                  </div>
                  <div class="row row-cols-1 row-cols-md-10 g-3 ">
                  <div class="btn-group d-flex justify-content-center">
                  <button class="button-69" onclick="agregarAlCarro(${pos})">Agregar Producto</button>
                  <input type="number" class="form-control-lista" aria-describedby="button-addon1" placeholder="1" id="canti_compra_${pos}">
                  </div>
                  <small>${listaArray[pos].cantidad} Unidades disponibles</small>
                </div>
    
              </div>
          </div>
      </div>
    `;
}
