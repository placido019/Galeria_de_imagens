document.addEventListener("DOMContentLoaded", function () {
  const baseImagens = {
    todas: [
      "carros1.jpg",
      "cidade1.jpg",
      "animais1.jpg",
      "natureza1.jpg",
      "animais2.jpg",
      "cidade3.jpg",
      "carros2.jpg",
      "natureza2.jpg",
      "cidade2.jpg",
      "carros3.jpg",
      "natureza3.jpg",
      "animais3.jpg",
    ],
    carros: ["carros1.jpg","carros2.jpg","carros3.jpg",],
    natureza: ["natureza1.jpg", "natureza2.jpg", "natureza3.jpg"],
    cidade: ["cidade1.jpg", "cidade2.jpg", "cidade3.jpg"],
    animais: ["animais1.jpg", "animais2.jpg", "animais3.jpg"],
  };

  function carregaImagens(categoria) {
    const galeria = document.querySelector("#galeria-imagens");
    galeria.innerHTML = "";
    const imagens = baseImagens[categoria];

    imagens.forEach((img) => {
      galeria.innerHTML += `
              <div class="imagem-item">
                  <img src="imagens/${img}" alt="${img}" />
              </div>
          `;
    });
  }

  function ordenaImagens(ordem) {
    const galeria = document.querySelector("#galeria-imagens");
    const imagens = Array.from(galeria.children);

    imagens.sort((a, b) => {
      const nameA = a.querySelector("img").getAttribute("alt").toUpperCase();
      const nameB = b.querySelector("img").getAttribute("alt").toUpperCase();
      if (ordem === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    galeria.innerHTML = "";
    imagens.forEach((img) => galeria.appendChild(img));
  }

  document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("botao-categoria")) {
      const categoria = event.target.dataset.categoria;
      carregaImagens(categoria);
    }
    if (event.target.classList.contains("botao-ordenar")) {
      const ordem = event.target.dataset.ordem;
      ordenaImagens(ordem);
    }
  });

  carregaImagens("todas");
});
