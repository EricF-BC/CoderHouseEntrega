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

function funcionCarritoAlfa() {
  let intento1 = document.getElementById("hola");
  if (intento1 == null){
    alert(intento1.innerHTML)
  } else {
    alert(intento1.innerHTML)
  }

  
}