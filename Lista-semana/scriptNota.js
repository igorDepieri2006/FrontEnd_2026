 const botao = document.getElementById("calcular");

    botao.addEventListener("click", function () {

      const nome = document.getElementById("nome").value;

      // Number
      const nota1 = Number(document.getElementById("nota1").value);
      const nota2 = Number(document.getElementById("nota2").value);
      const nota3 = Number(document.getElementById("nota3").value);

      const media = (nota1 + nota2 + nota3) / 3;

      const resultado = document.getElementById("resultado");

      resultado.className = "";

      if (media >= 7 && media <= 10) {

        resultado.classList.add("aprovado");

        resultado.innerHTML = `
          Aluno: ${nome} <br>
          Média: ${media.toFixed(2)} <br>
          Situação: APROVADO
        `;

      } else if (media >= 4 && media < 7) {

        const falta = 10 - media;

        resultado.classList.add("exame");

        resultado.innerHTML = `
          Aluno: ${nome} <br>
          Média: ${media.toFixed(2)} <br>
          Situação: EXAME <br>
          Faltam ${falta.toFixed(2)} pontos para atingir 10.
        `;

      } else {

        resultado.classList.add("reprovado");

        resultado.innerHTML = `
          Aluno: ${nome} <br>
          Média: ${media.toFixed(2)} <br>
          Situação: REPROVADO
        `;
      }

    });