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

    calcularIMC(){
        var imc = this.#doublePeso/Math.pow(this.#doubleAltura,2); 
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

    comprobarSexo(sexo){
        var sexo = this.#charSexo;
        if(sexo == 'h' || sexo == 'm'){
            return "Sexo "+sexo;
        }
    }

    generaDNI(){
        var min = 100000000, max = 200000000;
        var dni = Math.floor((Math.random() * (max - min + 1)) + min);
        return dni;
    }

    toString(){
        var mensaje = "Su nombre es "+this.#strNombre+"\nEdad: "+this.#strEdad+"\nDni "+dni+"\nSexo "+this.#charSexo+"\nPeso "+this.#doublePeso+"\nAltura "+this.#doubleAltura;
        return mensaje;
    }
}

dni;
var persona1 = new Persona("Juan", "24", dni,'h', 70, 1.70)
var imc = persona1.calcularIMC()
var me =persona1.esMayorDeEdad()
var cs =persona1.comprobarSexo()
var dni = persona1.generaDNI()
// console.log(persona1.toSource());

console.log(persona1.toString());
console.log(imc+"\n"+me+"\n"+cs)
