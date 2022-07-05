// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

if (campoSaldo)
  campoSaldo.innerHTML = String(0)

function somarAoSaldo(soma: number) {
  if(campoSaldo)
    campoSaldo.innerHTML = String(Number(campoSaldo.innerHTML) + soma)
}

function limparSaldo() {
  if(campoSaldo)
  campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', function () {
  if(soma)
  somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
  limparSaldo();
});