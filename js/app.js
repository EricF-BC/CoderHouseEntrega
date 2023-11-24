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
        Swal.fire({
          icon: "success",
          title: "Guardado sin problemas",
          showConfirmButton: false,
          timer: 1500
        });
        window.location.href = '/index.html';
      } else {
        alert("Las contraseñas No son iguales :C, intente de nuevo");
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
      }
  }

}


let listaArray = [
  {
    id: 1,
    nombre: "Besties - Alimento Perros Adultos Todas las Razas",
    descripcion: "Besties® Perros Adultos Todas las Razas es un Alimento Completo y Balanceado elaborado con \
    ingredientes de calidad.",
    precio: 9990,
    imagen: "../imagenes/besties_comida_perro.avif",
    cantidad : 15,
    valoracion: "5"
  },
  {
    id: 2,
    nombre: "Master Dog Alimento Perro Adulto Carne 15 Kg",
    descripcion: "La selección de un alimento adecuado para tu mascota es muy importante para garantizar su crecimiento, desarrollo y salud",
    precio: 30590,
    imagen: "../imagenes/master-dog-adulto-carne.png",
    cantidad : 30,
    valoracion: "4"
  },
  {
    id: 3,
    nombre: "Pedigree Alimento Seco Perro Adulto Carne Pollo Cereal 15kg",
    descripcion: "La mayor ventaja de la comida seca para mascotas es que se puede almacenar por mucho más tiempo sin que se deteriore.",
    precio: 30000,
    imagen: "../imagenes/Pedigree-Adulto.png",
    cantidad : 20,
    valoracion: "5"
  },
  {
    id: 4,
    nombre: "Besties - Alimento Gatos Adultos",
    descripcion: "Besties Gatos Adultos Toddas las razas, es un alimento completo y balanceado elaborado con ingredientes de calidad",
    precio: 4500,
    imagen: "../imagenes/bestie-gatos.avif",
    cantidad : 15,
    valoracion: "5"
  },
  {
    id: 5,
    nombre: "Alimento Whiskas  para gato adulto",
    descripcion: "Alimento rico en proteína animal de alto valor biológico, contiene minerales como calcio fósforo, potasio y hierro, vitaminas A, D y E",
    precio: 34490,
    imagen: "../imagenes/whiskas-gaticos.jpg",
    cantidad : 45,
    valoracion: "4"
  },
  {
    id: 6,
    nombre: "Arena Cristales Sanitarios Fit",
    descripcion: "Formula Lavanda permite una limpieza simple y rápida. Los líquidos son absorbidos tan rápidamente que no humedecerán los lados",
    precio: 30000,
    imagen: "../imagenes/arena-gatos.png",
    cantidad : 18,
    valoracion: "3"
  },
  {
    id: 7,
    nombre: "Pedigree Rodeo Snack Para Perro",
    descripcion: "Pedigree® Rodeo sabor pollo es el snack perfecto para recompensar a tu perro, entrenarlo o simplemente para demostrarle cuánto lo querés:",
    precio: 14200,
    imagen: "../imagenes/rodeo_duos.jpg",
    cantidad : 15,
    valoracion: "4"
  },
  {
    id: 8,
    nombre: "Alimento Felix Sensaciones",
    descripcion: "La comida húmeda es amada por las mascotas, ya que es más sabrosa y fácil de digerir.",
    precio: 900,
    imagen: "../imagenes/felix_classic+.jpg",
    cantidad : 50,
    valoracion: "5"
  },
  {
    id: 9,
    nombre: "Pedigree High Protein Sabor Carne Y Pollo 7,2kg",
    descripcion: "Alimento rico en proteína animal de alto valor biológico, contiene minerales como calcio fósforo, potasio y hierro, vitaminas A, D y E, fibras y ácidos grasos esenciales",
    precio: 24304,
    imagen: "../imagenes/high-protein.avif",
    cantidad : 10,
    valoracion: "5"
  },
];

function agregarAlCarro(pos) {
  numero = document.getElementById("canti_compra_" + pos).value;
  if (numero <= listaArray[pos].cantidad){
    alert("La cantidad total de la compra de " + numero + " es de : " + numero * listaArray[pos].precio)
  } else{
    alert("Monto supera las unidades disponibles")
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
