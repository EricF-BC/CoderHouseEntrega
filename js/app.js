function preEntregaParteUno() {
  // Validador de campos
  let camposForm = document.forms["formularioContacto"].elements;
  for (let i = 0; i < camposForm.length; i++) {
    let campo = camposForm[i];
    if (campo.type !== "submit") {
      let nombreCampo = campo.id.slice(0, -8);
      if (campo.value.trim() === "") {
        alert("Ingrese el campo " + nombreCampo + " porfavor");
      }
    }
  }

  let numeroTelefono = document.getElementById("celularcontacto").value;
  if (numeroTelefono.length <= 11) {
    alert("El numero de telefono ingresado es muy corto");
  }
}

function preEntregaParteUnoNumeros() {
  let sum = 0;
  let conMasC = 0;
  let conMenosC = 0;

for (i = 0; i < 5; i++) {
    let userInput = prompt("Ingrese un numero entre 1 y 100");
    let tmp = parseInt(userInput);

    if ((tmp > 1) & (tmp < 100)) {
        if (tmp > 50) {
            conMasC++;
        } else {
            conMenosC++;
        }
        sum = sum + tmp;
    } else if (userInput === null) {
        break;
    } else {
        alert("Numero no aceptado");
        i--;
    }
}
    

alert("La suma total de los numeros es : " + sum);
alert("La cantidad de numeros mayores a 50 es : " + conMasC);
alert("La cantidad de numeros menores a 50 es : " + conMenosC);
  
}
