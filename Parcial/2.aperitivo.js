const baldes = [
  ["A", 20, 30, 50],
  ["B", 30, 20, 60],
  ["C", 30, 30, 32],


];

const valores = [
  ["Vino", 5],
  ["Ginebra", 45],
  ["Jugo de limon", 10],

];

var baldeA = [];
var baldeB = [];
var baldeC = [];
for (let j = 0; j < 3; j++) {
  precio = parseInt(valores[j][1]);
  balde = parseInt(baldes[0][j + 1]);
  baldeA += balde * precio;
}

for (let j = 0; j < 3; j++) {
  baldeB += baldes[1][j + 1] * valores[j][1];
}

for (let j = 0; j < 3; j++) {
  baldeC += baldes[2][j + 1] * valores[j][1];
}

console.log(baldeA);

