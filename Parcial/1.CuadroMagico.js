const array = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

const N = 3;

magico(array, N);

function magico(array, N) {
  var numMagico = 0;
  for (var j = 0; j < N; j++) {
    numMagico += array[0][j];
  }

  var sumaDiag1 = 0,
    sumaDiag2 = 0;
  for (var i = 0; i < N; i++) {
    var sumaFila = 0,
      sumaCol = 0;
    for (var j = 0; j < N; j++) {
      sumaFila += array[i][j];
      sumaCol += array[j][i];
    }
    if (sumaFila != numMagico || sumaCol != numMagico) {
      console.log("NO es un cuadrado magico");
      return false;
    }
    sumaDiag1 += array[i][i];
    sumaDiag2 += array[N - 1 - i][N - 1 - i];
  }
  if (sumaDiag1 != numMagico || sumaDiag2 != numMagico) {
    console.log("NO es un cuadrado magico");
    return false;
  }

  console.log("Es un cuadrado magico");
  return true;
  console.log(array);
}
