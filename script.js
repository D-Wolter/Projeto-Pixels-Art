window.onload = init;

function init() {
  newPallete();
  populate(5);
}
let cor01 = "";
let cor02 = "";
let cor03 = "";
let cor04 = "";

function newPallete() {
  geraCorPaleta("black");
  document.getElementsByClassName("color")[0].className =
    "color selected black";
  document.getElementsByClassName("color")[0].id = "bt1";

  geraCorPaleta();
  document.getElementsByClassName("color")[1].id = "bt2";

  geraCorPaleta();
  document.getElementsByClassName("color")[2].id = "bt3";
  cor02 = document.getElementsByClassName("color")[2].style.backgroundColor;

  geraCorPaleta();
  document.getElementsByClassName("color")[3].id = "bt4";
}

let paletaCores = document.getElementById("color-pallette");

function geraCorPaleta(cor = gerar_cor_hex()) {
  newCor = document.createElement("button");
  newCor.className = "color";
  newCor.style.backgroundColor = cor;
  paletaCores.append(newCor);
}

function gerar_cor_hex() {
  return (
    "#" +
    parseInt(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}

let quadro = document.getElementById("pixel-board");

function populate(size) {
  quadro.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    quadro.append(div);
  }
}



function removePixels() {
  let pixs = document.querySelectorAll(".pixel");
  for (v of pixs) {
    v.remove();
  }
}

let limpar = document
  .getElementById("clear-board")
  .addEventListener("click", () => {
    removePixels(), populate(5);
  });

let geraTabela = document
  .getElementById("generate-board")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let n = document.getElementById("board-size");
    let v = n.value;
    if (v < 0) {
      alert("Board inválido!");
    } else {
      removePixels();
      populate(v);
    }
  });

console.log(paletaCores.children);

let cores1 = paletaCores.firstChild.addEventListener("click", () => {
  console.log(cores1.classList);
});

console.log(cores1);
let botao2 = document.getElementById("bt2");
botao2.addEventListener("click", () => {
  console.log(botao2.style.backgroundColor);
});
