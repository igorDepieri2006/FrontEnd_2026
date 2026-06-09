function calcularOrcamento(){
      const pacote = Number(document.getElementById("pacote").value);
      const pessoas = Number(document.getElementById("pessoas").value);

      if(pessoas <= 0){
        alert("Digite uma quantidade válida de pessoas!");
        return;
      }
      const custoBruto = pacote * pessoas;
      const taxaServico = custoBruto * 0.10;
      let subtotal = custoBruto + taxaServico;
      let desconto = 0;

      if(pessoas > 100){
        desconto = subtotal * 0.05;
      }
      const totalFinal = subtotal - desconto;
      document.getElementById("resultado").innerHTML = `
        <p><strong>Custo Bruto:</strong> R$ ${custoBruto.toFixed(2)}</p>

        <p><strong>Taxa de Serviço:</strong> R$ ${taxaServico.toFixed(2)}</p>

        <p><strong>Desconto Aplicado:</strong> R$ ${desconto.toFixed(2)}</p>

        <p class="total">
          Total Final: R$ ${totalFinal.toFixed(2)}
        </p>
      `;
    }
