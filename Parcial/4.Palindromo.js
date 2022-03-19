// 4  Indentificar palindromo

var v = prompt("Ingrese la palabra para saber si es palindromo")
function revisarPalindromo(str) {
    const strAlrevez = str.split("").reverse().join("");//divide en caracteres e invierte el orden de fin a inicio y luego los une.
//    document.write(strAlrevez)
    return strAlrevez === str ? "Es palindromo" : "No es palindromo";//Compara la palabra alrrevez con el la palabra original.
}
alert(revisarPalindromo(v));