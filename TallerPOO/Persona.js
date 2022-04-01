class Persona
{
    #strNombre = "";
    #strEdad = "";
    #intDni = 0;
    #charSexo = '';
    #doublePeso = 0.0;
    #doubleAltura = 0.0;

    constructor (nombre, edad, dni, sexo, peso, altura)
    {
        this.#strNombre = nombre;
        this.#strEdad = edad;
        this.intDni = dni;
        this.#charSexo= sexo;
        this.#doublePeso = peso;
        this.#doubleAltura = altura;
    }

    set setNombre(nombre) {
    this.#strNombre = nombre;
    }
    set setEdad(edad) {
    this.#strEdad  = edad;
    }
    
    set setSexo(sexo) {
        this.#charSexo = sexo;
    }

    set setAltura(altura) {
        this.#doubleAltura = altura;
    }

    set setPeso(peso) {
        this.#doublePeso = peso;
    }

    calcularIMC(p, a){
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

    esMayorDeEdad(edad){
        var mensaje = edad > 20 ? "Eres mayor de edad" : "Eres menor de edad";
        return mensaje;
    }

    comprobarSexo(charSexo){
        if(charSexo !== "h" && charSexo !== "m"){

        }
    }

    generaDNI(){
        var min = 1, max = 20;
        var dni = Math.random() * (max - min) + min;
        console.log(dni);
        return dni;
    }

    toString(){
        var mensaje = "Su nombre es "+this.#strNombre+"\nEdad: "+this.#strEdad+"\nDni "+this.#intDni+"\nSexo "+persona1.comprobarSexo;
        return mensaje;
    }
}

dni = 0;
var persona1 = new Persona("Juan", "24", dni,'h', peso , altura)
var altura = persona1.setAltura(1.70) ;
var peso = persona1.setPeso(75.2);
var dni = persona1.generaDNI();
// console.log(persona1.toSource());

console.log(persona1.toString());

