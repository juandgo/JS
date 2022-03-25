// // 4  Indentificar palindromo

// var v = prompt("Ingrese la palabra para saber si es palindromo")
// function revisarPalindromo(str) {
//     const strAlrevez = str.split("").reverse().join("");//divide en caracteres e invierte el orden de fin a inicio y luego los une.
// //    document.write(strAlrevez)
//     return strAlrevez === str ? "Es palindromo" : "No es palindromo";//Compara la palabra alrrevez con el la palabra original.
// }
// alert(revisarPalindromo(v));

var v = prompt("Ingrese la palabra para saber si es palindromo")
function revisarPalindromo(str) {
document.write(str+"<br>");
var alrrevez = "";
for (var i = str.length-1; i >= 0; i--) {
    alrrevez = alrrevez+str[i];
    // alrrevez =  `${alrrevez + str[i]}`;//esta convertido a string para
    console.log(alrrevez);
}
document.write(alrrevez);
return alrrevez == str ? "Es palindromo" : "No es palindromo";//Compara la palabra alrrevez con el la palabra original.
}
alert(revisarPalindromo(v));