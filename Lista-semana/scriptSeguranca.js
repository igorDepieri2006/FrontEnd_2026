function analisarCartao(){
      let numero = document.getElementById("cartao").value;
      numero = numero.replace(/\s/g, "")
                     .replace(/\./g, "");

      if(!/^\d+$/.test(numero) ||
         numero.length < 13 ||
         numero.length > 16){
        alert("Digite um cartão válido entre 13 e 16 dígitos.");
        return;
      }
      const valido = algoritmoLuhn(numero);
      const bandeira = detectarBandeira(numero);
      const setor = detectarSetor(numero);
      const banco = detectarBanco(numero);
      document.getElementById("painel").innerHTML = `
        <h2>Painel de Info</h2>

        <div class="info">
          <strong>Status:</strong>
          <span class="${valido ? 'valido' : 'invalido'}">
            ${valido ? 'Válido' : 'Inválido'}
          </span>
        </div>

        <div class="info">
          <strong>Bandeira:</strong>
          ${bandeira}
        </div>

        <div class="info">
          <strong>Categoria de Setor:</strong>
          ${setor}
        </div>

        <div class="info">
          <strong>Banco Emissor:</strong>
          ${banco}
        </div>

      `;
    }
    function algoritmoLuhn(numero){
      let soma = 0;
      let inverter = numero
        .split("")
        .reverse();

      for(let i = 0; i < inverter.length; i++){
        let digito = Number(inverter[i]);
        if(i % 2 !== 0){
          digito *= 2;
          if(digito > 9){
            digito -= 9;
          }
        }
        soma += digito;
      }
      return soma % 10 === 0;
    }
    function detectarBandeira(numero){
      if(numero.startsWith("4")){
        return "Visa";
      }
      if(
        numero.startsWith("51") ||
        numero.startsWith("52") ||
        numero.startsWith("53") ||
        numero.startsWith("54") ||
        numero.startsWith("55")
      ){
        return "MasterCard";
      }
      if(
        numero.startsWith("34") ||
        numero.startsWith("37")
      ){
        return "American Express";
      }
      if(numero.startsWith("6")){
        return "Discover";
      }
      return "Desconhecida";
    }
    function detectarSetor(numero){
      const primeiro = numero[0];
      switch(primeiro){

        case "1":
        case "2":
          return "Companhias Aéreas";

        case "3":
          return "Turismo e Entretenimento";

        case "4":
        case "5":
          return "Instituições Financeiras";

        case "6":
          return "Comércio e Bancos";

        case "7":
          return "Petróleo e Transporte";

        case "8":
          return "Telecomunicações";

        case "9":
          return "Serviços Governamentais";

        default:
          return "Não identificado";
      }
    }
    function detectarBanco(numero){
      const inicio = numero.substring(0, 4);
      if(inicio === "4111"){
        return "Infinity Bank";
      }
      if(inicio === "5500"){
        return "Global Finance";
      }
      if(inicio === "3400"){
        return "Prime Credit";
      }
      if(inicio === "6011"){
        return "National Bank";
      }
      return "Banco não identificado";
    }