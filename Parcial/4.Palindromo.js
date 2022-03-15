// 4  Indentificar palindromo

verificar = prompt("Ingrese la paralabar para saber si es palindromo")
function revisarPalindromo(str) {
    const strAlrevez = str.split("").reverse().join("");
  
    return strAlrevez === str ? "Es palindromo" : "No es palindromo";
}
alert(revisarPalindromo(verificar));