// setProm, pide el dato por consola
var array = [];

do {
  var key = prompt(
      "        UNIVERSIDAD AUNAR  \n" +
      "1. Llenar arreglo de forma aleatoria.\n" +
      "2. Ordenar arreglo de menor a mayor.\n" +
      "3. Numero mayor del arreglo. \n" +
      "4. Numeros pares.\n" +
      "5. Numeros impares.\n" +
      "6. Numeros primos.\n" +
      "7. Diferencia de días y horas entre fechas.\n" +
      "8. Saber mi IMC.\n" +
      "9. Distancia entre A y B.\n" +
      "10. Secuencia Collatz.\n" +
      "0. Salir\n" +
      "       Digite la opcion de entrada"
  );

  switch (key) {
    case "0":
      alert("Hasta Luego");
      break;
    case "1":
      // 1.Escriba una función que reciba como parámetro el tamaño de un arreglo y
      // retorne un arreglo de números random del tamaño especificado en la función.
      var a = prompt("Digite el tamaño del arreglo: ");
      array = numRandom(a);
      // console.log(array);
      alert("Su arreglo es: " + array);
      break;
    case "2":
      // 2.Escriba una función que ordene el arreglo anterior de menor a mayor.
      if (array.length === 0) {
        alert("No hay arreglo para ordenar, por favor genere el arreglo.")
      } else {
        array = array.sort(function(a, b){return a - b});
        alert("El orden del arreglo es: " + array);
        // console.log(array2);
      }
      break;
    case "3":
      // 3.Escriba una función que calcule el número mayor y lo retorne.
      if (array.length === 0) {
        alert("No hay arreglo para ordenar, por favor genere el arreglo.")
      } else {
      var arr = Math.max(...array);
      alert("El numero mayor del arreglo es: " + arr);
      }
      // console.log(arr);
      break;
    case "4":
      if (array.length === 0) {
        alert("No ha llenado hay arreglo para ordenar, por favor genere el arreglo.")
      } else {
        alert("Los numeros pares del array son: " + numPares(array));
      }
      break;
    case "5":
      if (array.length === 0) {
        alert("No ha llenado hay arreglo para ordenar, por favor genere el arreglo.")
      } else {
        alert("Los numeros impares del array son: " + numImpares(array));
      }
      break;
    case "6":  
      var primos = []
      if (array.length === 0) {
        alert("No hay arreglo para ordenar, por favor genere el arreglo.")
      } else {
      // array.forEach(numero => (numero, (esPrimo(numero) == true) ? alert(numero+' es primo') : alert(numero+' no es primo')))
        array.forEach(numero => (numero, (esPrimo(numero) == true) ? primos.push(numero) : 0))
        alert("Los numeros primos del array son: " + primos);
      }
      break;
    case "7":
      var f1 = prompt("Digite la primera fecha y hora de esta forma Año-Mes-Dia H:M:S 2015-02-27 8:00:00: ")
      var f2 = prompt("Digite la segunda fecha y hora de esta forma Año-Mes-Dia H:M:S 2015-02-27 8:00:00: ")
      var fecha1 = new Date(f1);
      var fecha2 = new Date(f2);
      // var fecha1 = new Date("2015-02-27 8:00:00");
      // var fecha2 = new Date("2022-02-28 9:00:00");
      var diferenciaHours = fecha2.getHours() - fecha1.getHours();
      var diferenciaDays = fecha2.getDate() - fecha1.getDate();
      var diferenciaMonths = fecha2.getMonth() - fecha1.getMonth();
      var diferenciaYears = fecha2.getFullYear() - fecha1.getFullYear();
    
      alert("la diferencia entre las fechas es de: Años: "+diferenciaYears+", Meses: "+diferenciaMonths+", Dias: "+diferenciaDays+", horas: "+diferenciaHours);
      console.log("la diferencia entre las fechas es de: ",diferenciaDays," dia y ",diferenciaHours," horas");
      break;
    case "8":
      var peso = prompt("Digite su peso: ");
      var altura = prompt("Digite su altura: ");
      alert(saberIMC(peso,altura));
      break;
    case "9":
      // latitud y longitud, se mide en codenadas x y
      x1 = prompt("Ingrese 1ra posición en x");
      y1 = prompt("Ingrese 1ra posición en y");
      x2 = prompt("Ingrese 2ra posición en x");
      y2 = prompt("Ingrese 2ra posición en y");
      alert("latitud y longitud, se mide en codenadas x y");
      alert("La distancia entre A y B es de: ", distanciaAB(y1, x1, y2, x2),"metros");
      break;
    case "10":
      let store = [];
      var numero = prompt("Ingrese un numero:") 
      if(numero>0){
        collatzTail(numero, store);
        alert("La secuencia de collatz es: "+store);
      }
      break;
    default:
      alert("La opción no existe");
      break;
  }
} while (key !== "0");

// ================================================================

function numRandom(sizeArray) {
  var array = [];
  var min = 1, max = 20;
  for (var i = 0; i < sizeArray; i++) {
    array.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return array;
}

function numPares(array) {
  var par = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        // par += array[i]+",";
        par.push(array[i]);
    }
  }
  return par;
}

function numImpares(array) {
  var impar = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        // impar += array[i]+",";
        impar.push(array[i]);
    }
  }
  return impar;
}

function esPrimo(numero) {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let i = 2; i < numero / 2; i++) {
		if (numero % i == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

function saberIMC(p,a) {
  var imc = p/Math.pow(a,2); 
  var respuesta = "";
  if (imc > 25 && imc <30) {
    respuesta = "Su peso es de "+imc+" asi que usted tiene sobrepeso";
  }else if (imc > 30){
    respuesta = "Su peso es de "+imc+" asi que usted es obeso";
  }else{
    respuesta = "Su peso es de "+imc+" asi que usted tiene un IMC";
  }
  return respuesta;
}

function distanciaAB(y1, x1, y2, x2) {
  rad = function (x) {
    return (x * Math.PI) / 180;
  };
  var R = 6378.137; //Radio de la tierra en km
  var dLat = rad(y2 - y1);
  var dLong = rad(x2 - x1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(y1)) * Math.cos(rad(y2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //Aquí obtienes la distancia en metros por la conversion 1Km =1000m
  var d = R * c * 1000;
  return d;
}

function collatzTail(num, store){
  //Si num es 1 entoces guarda en store 1
  if (num === 1) {
      store.push(1);
      return store;
      //si num es par entoces guarda en store num / 2
  } else if (num % 2 === 0) {
      store.push(num);
      return collatzTail(parseInt(num / 2), store);
      //si num es impar entoces guarda num * 3 + 1
  } else {
      store.push(num);
      return collatzTail(3 * num + 1, store);
  }
}



