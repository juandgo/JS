const baldes = [
  ["A", 20, 30, 50],
  ["B", 30, 20, 60],
  ["C", 30, 30, 32]
];

const valores = [
  ["Vino", 5],
  ["Ginebra", 45],
  ["Jugo de limon", 10]
];

var baldeA = [];
var baldeB = [];
var baldeC = [];
for (var j = 0; j < 3; j++) {
  var precio = parseInt(valores[j][1]);
  var balde = parseInt(baldes[0][j + 1]);
  baldeA += balde * precio;
  // baldeB += balde * precio;
  // baldeC += balde * precio;
}

for (var j = 0; j < 3; j++) {
  baldeB += baldes[1][j + 1] * valores[j][1];
}

for (var j = 0; j < 3; j++) {
  baldeC += baldes[2][j + 1] * valores[j][1];
}

alert(baldeA)
console.log(baldeA);

