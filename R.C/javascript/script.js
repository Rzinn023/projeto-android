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

atualizarTempo();
