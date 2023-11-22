function somatorioDivisiveis(numero) {
  let somatorio = 0;

  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      somatorio += i;
    }
  }
  return somatorio;
}

module.exports = somatorioDivisiveis
