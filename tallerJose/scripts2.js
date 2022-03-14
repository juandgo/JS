//Taller resuelto
var arrOne = [];
do {
  var key = prompt(
    "        UNIVERSIDAD AUNAR  \n" +
      "1. Llenar arrglo de forma aleatoria.\n" +
      "2. Ordenar arreglo de menor a mayor.\n" +
      "3. Numero menor y mayor del arreglo. \n" +
      "4. Numeros pares del arreglo. \n" +
      "5. Numeros impares del arreglo. \n" +
      "6. Numeros Primos de la lista\n" +
      "7. diferencia entre estas fechas 2022-02-27 8:00:00, 2022-02-28 9:00:00\n" +
      "8. Calcula tu IMC\n" +
      "9. Distancia de un punto a otro\n" +
      "10. EL arreglo collatz \n" +
      "           Digite la opcion de entrada"
  );

  switch (key) {
    case "1":
        //1
        var size = prompt("Ingrese el tamano");
        var arrOne = [];
        max = 10;
        min = 1;
        for (var i = 0; i < size; i++) {
        arrOne.push(Math.floor(Math.random() * (max - min)) + min);
        }
        console.log("lista Aleatoria", arrOne);
      break;
    case "2":
      // 2.
      console.log("lista ordenada", arrOne.sort());
      break;
    case "3":
      // 3.
      var mayor = Math.min.apply(null, arrOne);
      console.log("Menor: ", mayor);
      var menor = Math.max.apply(null, arrOne);
      console.log("Mayor: ", menor);
      break;
    case "4":
      //4
      for (var i = 0; i < size; i++) {
        par = arrOne[i];
        if (par % 2 == 0) {
          console.log("El numero : ", par, "Es par");
        }
      }
      break;
    case "5":
      for (var i = 0; i < size; i++) {
        par = arrOne[i];
        if (par % 2 != 0) {
          console.log("El numero : ", par, "impar");
        }
      }
      break;
    case "6":
      //6.
      const esPrimo = numero => {
        // Casos especiales
        if (numero == 0 || numero == 1 || numero == 4) return false;
        for (let x = 2; x < numero / 2; x++) {
          if (numero % x == 0) return false;
        }
        // Si no se pudo dividir por ninguno de los de arriba, sí es primo
        return true;
      }
      arrOne.forEach((numero) => {
        console.log("¿%d es primo?", numero, esPrimo(numero));
      });
      break;
    case "7":
      //7
      var fecha = new Date("2022-02-27 8:00:00");
      var fecha2 = new Date("2022-02-28 9:00:00");
      var diferenciaDia = fecha2.getHours() - fecha.getHours();
      var diferenciaHora = fecha2.getDate() - fecha.getDate();
      console.log(
        "la diferencia entre las fechas es de:",
        diferenciaDia,
        "dia y",
        diferenciaHora,
        "hora"
      );
      break;
    case "8":
        //8
        peso = prompt("Ingrese su peso");
        estatura = prompt("Ingrese su estatura") * 100;
        with (Math) {
        imc = peso / pow(estatura / 100, 2);
        imc = round(imc * 100) / 100; // redondea con 2 decimales.
        }
        if (imc < 16) {
            grado = "bajo de peso";
          } else if (imc >= 18.5 && imc <= 24.99) {
            grado = "Normal.";
          } else if (imc >= 25 && imc <= 29.99) {
            grado = "sobrepeso .";
          } else if (imc >= 30 && imc <= 34.99) {
            grado = "Obesidad.";
          }
          resultado = imc + ":" + grado;
          console.log(resultado);
      break;
    case "9":
      // latitud y longitud, se mide en codenadas x y
      x1 = prompt("Ingrese 1ra posición en x");
      y1 = prompt("Ingrese 1ra posición en y");
      x2 = prompt("Ingrese 2ra posición en x");
      y2 = prompt("Ingrese 2ra posición en y");
      console.log("latitud y longitud, se mide en codenadas x y");
      console.log("la distancia es: ", getDistanciaMetros(y1, x1, y2, x2),"metros");
      break;
    case "10":
      //10
        let collatzTail = (num, store) => {
        //if num is 1 then store 1
        if (num === 1) {
            store.push(1);
            return store;

            //if num is even then store num / 2
        } else if (num % 2 === 0) {
            store.push(num);
            return collatzTail(parseInt(num / 2), store);
            //if num is odd then store num * 3 + 1
        } else {
            store.push(num);
            return collatzTail(3 * num + 1, store);
        }
        };
        let store = [];
        var numero = prompt("Ingrese un numero");
        collatzTail(numero, store);
        console.log(store);
      break;
    default:
      prompt("La opción no existe");
      prompt("Hasta Luego");
      break;
  }
} while (key !== "11"); 

function getDistanciaMetros(y1, x1, y2, x2) {
  rad = function (x) {
    return (x * Math.PI) / 180;
  };
  var R = 6378.137; //Radio de la tierra en km
  var dLat = rad(y2 - y1);
  var dLong = rad(x2 - x1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(y1)) *
    Math.cos(rad(y2)) *
    Math.sin(dLong / 2) *
    Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //aquí obtienes la distancia en metros por la conversion 1Km =1000m
  var d = R * c * 1000;
  return d;
}


