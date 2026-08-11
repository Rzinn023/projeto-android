function mostrarPagina(id){

      const paginas = document.querySelectorAll(".pagina");

      paginas.forEach(pagina => {
        pagina.classList.remove("ativa");
      });

      document.getElementById(id).classList.add("ativa");
    }

const dataNamoro = new Date(2026, 2, 29, 0, 0, 0);

function atualizarTempo(){

  const agora = new Date();

  let diferenca = agora - dataNamoro;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  diferenca %= (1000 * 60 * 60 * 24);

  const horas = Math.floor(diferenca / (1000 * 60 * 60));

  diferenca %= (1000 * 60 * 60);

  const minutos = Math.floor(diferenca / (1000 * 60));

  diferenca %= (1000 * 60);

  const segundos = Math.floor(diferenca / 1000);


  document.getElementById("tempo").innerHTML =
  `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos ❤️`;
}

setInterval(atualizarTempo,1000);
atualizarContador();

// BOTÃO EU TE AMO ❤️
function euTeAmo() {

    const mensagem = document.getElementById("mensagem-amor");

    mensagem.innerHTML = `
        <p>Eu te amo mais do que consigo explicar. ❤️</p>
        <p>Você é uma das melhores partes da minha vida. ❤️</p>
    `;

    // Criar vários corações
    for (let i = 0; i < 15; i++) {

        const coracao = document.createElement("div");

        coracao.classList.add("coracao");

        coracao.innerHTML = "❤️";

        coracao.style.left = Math.random() * 100 + "vw";

        coracao.style.animationDuration =
            (3 + Math.random() * 2) + "s";

        coracao.style.fontSize =
            (18 + Math.random() * 20) + "px";

        document.body.appendChild(coracao);

        // Remover depois da animação
        setTimeout(() => {
            coracao.remove();
        }, 5000);
    }
}

