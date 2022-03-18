// var array = [[],[],[]]; 

// var nfilas = 3;
// var nColums = 3;
// for (var i = 0; i < nfilas; i++) {//filas 
//   for (var j = 0; j < nColums; j++) {//columnas
//     var num = prompt("["+i+","+j+"]"+'. Ingrese un numero:',"");
//     array[i].push(parseInt(num))
//     document.write(array[i][j])
//     document.write("["+i+","+j+"]")
//   }
//   document.write("<br>");
// }
// // document.write(array)
// alert(array);




const array = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

for (var i = 0; i < 3; i++) {//filas 
  for (var j = 0; j < 3; j++) {//columnas
    document.write(array[i][j])
    document.write("["+i+","+j+"]")
  }
  document.write("<br>");
}



const n = 3;

magico(array, n);

function magico(array, n) {
  var numMagico = 0, sumaDiag1 = 0, sumaDiag2 = 0;

  for (var j = 0; j < n; j++) {
    numMagico += array[0][j];
  }
  
  for (var i = 0; i < n; i++) {

    var sumaFila = 0, sumaCol = 0;

    for (var j = 0; j < n; j++) {
      sumaFila += array[i][j];
      sumaCol += array[j][i];
    }

    if (sumaFila != numMagico || sumaCol != numMagico) {
      console.log("nO es un cuadrado magico");
      document.write("nO es un cuadrado magico");
      return false;
    }

    sumaDiag1 += array[i][i];
    sumaDiag2 += array[n - 1 - i][n - 1 - i];

  }
  
  if (sumaDiag1 != numMagico || sumaDiag2 != numMagico) {
    console.log("nO es un cuadrado magico");
    document("nO es un cuadrado magico");
    return false;
  }

  console.log("Es un cuadrado magico");
  document.write("Es un cuadrado magico");
  return true;
  console.log(array);
}
