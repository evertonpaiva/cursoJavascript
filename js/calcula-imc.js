var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];

  var tdAltura = paciente.querySelector(".info-altura");
  var tdPeso = paciente.querySelector(".info-peso");
  var tdImc = paciente.querySelector(".info-imc");

  var altura = tdAltura.textContent;
  var peso = tdPeso.textContent;

  var alturaEhValida = validaAltura(altura);
  var pesoEhValido = validaPeso(peso);

  if (!pesoEhValido) {
      console.log("Peso inválido!");
      tdPeso.textContent = "Peso inválido!";
  }

  if (!alturaEhValida) {
      console.log("Altura inválida!");
      tdAltura.textContent = "Altura inválida!";
  }

  if (alturaEhValida && pesoEhValido) {
      var imc = calculaImc(peso, altura);
      tdImc.textContent = imc;
  } else {
      tdImc.textContent = "Altura e/ou peso inválidos!"
      paciente.classList.add("paciente-invalido");
  }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true
    } else {
        return false;
    }
}