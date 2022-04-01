
class CuentaAhorro  {

    #strTitular = "";
    #cantidad = 0;

    constructor(titular, cantidad)
    {
      this.#strTitular = titular;
      this.#cantidad = cantidad;
    } 

    get getTitular() 
    {
       return this.#strTitular;
     }

    set setTitular(titular) 
    {
        this.titular = titular;
    }

    get getCantidad() 
    {
       var cantidad = parseInt(this.#cantidad);
       return cantidad ;
     }

    set setCantidad(cantidad) 
    {
        this.#cantidad = cantidad;
    }

    ingresar(adicion) 
    {
        if(this.#cantidad<0){
            console.log("No puede ingresar numeros negativos")
        }else{
            this.#cantidad += adicion;
        }
        return this.#cantidad;
    }

    retirar(valor)
    {
        // var cantidad = prompt("Digite el valor de la cantidad a retirar");
        if(valor>this.#cantidad){
            // console.log("\n¡Fondos Insuficientes!,No se puede retirar mas de los que hay en la cuenta.");  
            var mensaje = "\n¡Fondos Insuficientes!,No se puede retirar mas de los que hay en la cuenta.";  
            return mensaje;   
        }else{
            var retorno = this.#cantidad - valor;
            return retorno;
        }
    }

    toString()
    {
        var mensaje = "La cantidad dinero anteriormente era de: $"+cantidad+"\nSu ingreso fue de: $"+adiccion+"\nTotal: $"+total+"\nSu retiro fue de: $"+sustraccion+"\nSu cantidad de dienero actual es de: $"+cuenta.retirar(sustraccion);
        return mensaje;
    }
  }
  var cantidad = 7;
  var cuenta = new CuentaAhorro("Armando",cantidad);
  var adiccion = 11;
  var total = cuenta.ingresar(adiccion);
  var sustraccion = 16;
  console.log(cuenta.toString());



