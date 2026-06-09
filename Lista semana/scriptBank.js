function calcular() {
      const bandeira = document.getElementById("bandeira").value;
      const valor = parseFloat(document.getElementById("valor").value);
      const parcelas = parseInt(document.getElementById("parcelas").value);

      const resultado = document.getElementById("resultado");

      if (isNaN(valor) || isNaN(parcelas) || valor <= 0 || parcelas <= 0) {
        resultado.innerHTML = `
          <p style="color:red;">Preencha os campos corretamente.</p>
        `;
        return;
      }
      let taxaPercentual = 0;

      switch (bandeira) {
        case "visa":
          taxaPercentual = 0.02;
          break;

        case "master":
          taxaPercentual = 0.0185;
          break;

        case "elo":
          taxaPercentual = 0.03;
          break;
      }
      const taxaBandeira = valor * taxaPercentual;
      const juros = valor * (0.0035 * parcelas);
      const taxaMensal = 12.50 * parcelas;
      const valorTotal = valor + taxaBandeira + juros + taxaMensal;
      const valorParcela = valorTotal / parcelas;

      resultado.innerHTML = `
        <p><span class="destaque">Valor da Venda:</span> R$ ${valor.toFixed(2)}</p>

        <p><span class="destaque">Taxa da Bandeira:</span> 
        R$ ${taxaBandeira.toFixed(2)}</p>

        <p><span class="destaque">Juros:</span> 
        R$ ${juros.toFixed(2)}</p>

        <p><span class="destaque">Taxa Mensal:</span> 
        R$ ${taxaMensal.toFixed(2)}</p>

        <p><span class="destaque">Valor Total:</span> 
        R$ ${valorTotal.toFixed(2)}</p>

        <p><span class="destaque">Valor de Cada Parcela:</span> 
        R$ ${valorParcela.toFixed(2)}</p>
      `;
    }