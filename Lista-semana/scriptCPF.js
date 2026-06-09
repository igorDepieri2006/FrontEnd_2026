function validarCPF() {
let cpf = document.getElementById("cpf").value;
cpf = cpf.replace(/\D/g, "");//deixa só que numeros de 0-9 seja inseridos
const resultado = document.getElementById("resultado");

      if (cpf.length !== 11) {
        resultado.innerHTML = "CPF Inválido";
        resultado.className = "invalido";
        return;
      }
      if (/^(\d)\1+$/.test(cpf)) {
        resultado.innerHTML = "CPF Inválido";
        resultado.className = "invalido";
        return;
      }
      let soma = 0;
      for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
      }
      let digito1 = (soma * 10) % 11;
      if (digito1 === 10) {
        digito1 = 0;
      }
      soma = 0;
      for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
      }
      let digito2 = (soma * 10) % 11;
      if (digito2 === 10) {
        digito2 = 0;
      }
      if (
        digito1 == cpf[9] &&
        digito2 == cpf[10]
      ) {
        resultado.innerHTML = "CPF Válido";
        resultado.className = "valido";
      } else {
        resultado.innerHTML = "CPF Inválido";
        resultado.className = "invalido";
 }
}