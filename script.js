let bt1 = document.getElementById('bt1');
let cor1 = bt1.style.backgroundColor;

let bt2 = document.getElementById('bt2');
let cor2 = bt2.style.backgroundColor;
cor2 = gerar_cor_hex();
bt2.style.backgroundColor = cor2;

let bt3 = document.getElementById('bt3');
let cor3 = bt3.style.backgroundColor;
cor3 = gerar_cor_hex();
bt3.style.backgroundColor = cor3;

let bt4 = document.getElementById('bt4');
let cor4 = bt4.style.backgroundColor;
cor4 = gerar_cor_hex();
bt4.style.backgroundColor = cor4;
let corSelecionada = 'black';

function setarSelecionada(c) {
  corSelecionada = c;
}

bt1.addEventListener('click', () => {
  bt1.className = 'color selected';
  bt2.className = 'color';
  bt3.className = 'color';
  bt4.className = 'color';
  corSelecionada = 'black';
});
bt2.addEventListener('click', () => {
  bt1.className = 'color';
  bt2.className = 'color selected';
  bt3.className = 'color';
  bt4.className = 'color';
  corSelecionada = cor2;
});
bt3.addEventListener('click', () => {
  bt1.className = 'color';
  bt2.className = 'color';
  bt3.className = 'color selected';
  bt4.className = 'color';
  corSelecionada = cor3;
});
bt4.addEventListener('click', () => {
  bt1.className = 'color';
  bt2.className = 'color';
  bt3.className = 'color';
  bt4.className = 'color selected';
  corSelecionada = cor4;
});

let paletaCores = document.getElementById('color-pallette');

function geraCorPaleta(cor = gerar_cor_hex()) {
  newCor = document.createElement('button');
  newCor.className = 'color';
  newCor.style.backgroundColor = cor;
  paletaCores.append(newCor);
}

function gerar_cor_hex() {
  return (
    '#' +
    parseInt(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')
  );
}

let quadro = document.getElementById('pixel-board');

function populate(size) {
  if (size < 5) {
    size = 5;
  }
  if (size > 50) {
    size = 50;
  }
  if (size >= 5) {
    quadro.style.setProperty('--size', size);
    for (let i = 0; i < size * size; i++) {
      let div = document.createElement('div');
      div.classList.add('pixel');
      div.addEventListener('click', () => {
        div.style.backgroundColor = corSelecionada;
      });
      quadro.append(div);
    }
  }
}

function removePixels() {
  let pixs = document.querySelectorAll('.pixel');
  for (v of pixs) {
    v.remove();
  }
}

let limpar = document
  .getElementById('clear-board')
  .addEventListener('click', () => {
    removePixels(), populate(5);
  });

let geraTabela = document
  .getElementById('generate-board')
  .addEventListener('click', function (e) {
    e.preventDefault();
    let n = document.getElementById('board-size');
    let v = n.value;
    if (v < 0) {
      alert('Board inválido!');
    }
    if (v === '') {
      alert('Board inválido!');
    } else {
      removePixels();
      populate(v);
    }
  });

window.onload = () => {
  populate(5);
};
