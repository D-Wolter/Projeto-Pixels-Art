let bt1 = document.getElementById('bt1')
let cor1 = bt1.style.backgroundColor

let bt2 = document.getElementById('bt2')
let cor2 = bt1.style.backgroundColor

let bt3 = document.getElementById('bt3')
let cor3 = bt1.style.backgroundColor

let bt4 = document.getElementById('bt4')
let cor4 = bt1.style.backgroundColor

let corSelecionada  = 'black'

function setarSelecionada (c) { 
  corSelecionada = c
}

bt1.addEventListener('click', (cor1) => {
  bt1.className = 'color selected'
  bt2.className = 'color'
  bt3.className = 'color'
  bt4.className = 'color'
  corSelecionada = 'black'
  
})
bt2.addEventListener('click', (cor2) => {
  bt1.className = 'color'
  bt2.className = 'color selected'
  bt3.className = 'color'
  bt4.className = 'color'
  corSelecionada = 'red'
  
})
bt3.addEventListener('click', (cor3) => {
  bt1.className = 'color'
  bt2.className = 'color'
  bt3.className = 'color selected'
  bt4.className = 'color'
  corSelecionada = 'blue'
  
})
bt4.addEventListener('click', (cor4) => {
  bt1.className = 'color'
  bt2.className = 'color'
  bt3.className = 'color'
  bt4.className = 'color selected'
  corSelecionada = 'green'
  
})

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
    div.addEventListener('click', () => {div.style.backgroundColor = corSelecionada})
    quadro.append(div);
  }
}




function init() {

  // newPallete();
  populate(5);
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

  window.onload = init;
  

  console.log(corSelecionada);

  // function newPallete() {
//   geraCorPaleta("black");
//   document.getElementsByClassName("color")[0].className =
//     "color selected black";
//   document.getElementsByClassName("color")[0].id = "bt1";

//   geraCorPaleta();
//   document.getElementsByClassName("color")[1].id = "bt2";

//   geraCorPaleta();
//   document.getElementsByClassName("color")[2].id = "bt3";
//   cor02 = document.getElementsByClassName("color")[2].style.backgroundColor;

//   geraCorPaleta();
//   document.getElementsByClassName("color")[3].id = "bt4";
// }
