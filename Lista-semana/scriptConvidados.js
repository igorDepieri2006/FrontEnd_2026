let convidados = [];
    function adicionarConvidado() {
      const input = document.getElementById("nomeConvidado");
      const nome = input.value.trim();

      if (nome === "") {
        alert("Digite um nome válido!");
        return;
      }
      convidados.push(nome);
      input.value = "";
      renderizarLista();
    }

    function renderizarLista() {
      const lista = document.getElementById("listaConvidados");
      lista.innerHTML = "";

      convidados.forEach((convidado, index) => {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.className = "nome";
        span.textContent = convidado;

        const btnConcluir = document.createElement("button");
        btnConcluir.textContent = "Concluir";
        btnConcluir.className = "concluir";

        btnConcluir.onclick = () => {
          span.classList.toggle("riscado");
        };

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.className = "editar";

        btnEditar.onclick = () => {
          const novoNome = prompt("Editar nome:", convidado);

          if (novoNome !== null && novoNome.trim() !== "") {
            convidados[index] = novoNome.trim();
            renderizarLista();
          }
        };

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.className = "excluir";

        btnExcluir.onclick = () => {
          convidados.splice(index, 1);
          renderizarLista();
        };

        const divAcoes = document.createElement("div");
        divAcoes.className = "acoes";

        divAcoes.appendChild(btnConcluir);
        divAcoes.appendChild(btnEditar);
        divAcoes.appendChild(btnExcluir);

        li.appendChild(span);
        li.appendChild(divAcoes);
        lista.appendChild(li);
      });
    }