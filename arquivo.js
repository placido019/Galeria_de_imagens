/*const baseImagens = {
  todas: ["imagem.png", "cidade.jpg", "animal.jpg", "natureza.jpg"],
  natureza: ["natureza.jpg"],
  cidades: ["cidade.jpg"],
  animais: ["animais.jpg"],
};

function carregaimagens() {
  //Seleciona elementos HTML com base em um seletor
  const galeria = document.querySelector("#galeria-imagens");

  const imagens = baseImagens["todas"];

  imagens.forEach(img => {
    console.log(img);
    galeria.innerHTML += `<div> <img src= "imagens/${img}" /> </div>`
   });
}

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function () {});
});
*/
const baseImagens = {
    todas: ["cidade.jpg", "animais.jpg", "natureza.jpg"],
    natureza: ["natureza.jpg"],
    cidade: ["cidade.jpg"],
    animais: ["animais.jpg"],
  };
  
  function carregaimagens(categoria = "todas") {
    // Seleciona o elemento HTML com base no ID
    const galeria = document.querySelector("#galeria-imagens");
    
    // Limpa o conteúdo da galeria antes de adicionar novas imagens
    galeria.innerHTML = '';
  
    const imagens = baseImagens[categoria];
  
    imagens.forEach(img => {
      console.log(img);  // Verificação no console para garantir que as imagens estão sendo listadas
      galeria.innerHTML += `<div><img src="imagens/${img}" alt="${img}" /></div>`;
    });
  }
  
  // Adiciona o evento quando o DOM estiver completamente carregado
  document.addEventListener("DOMContentLoaded", function () {
    // Carrega todas as imagens por padrão
    carregaimagens();
  
    // Adiciona eventos aos botões de categoria
    document.querySelector("#box-categorias").addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        const categoria = event.target.textContent.toLowerCase();
        carregaimagens(categoria === "todas" ? "todas" : categoria);
        alert(123);
      }
    });
  });
