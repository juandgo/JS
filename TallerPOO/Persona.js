class Cuenta
{
    // var strTitular;
    #strTitular;
    #intCantidad;

    constructor (titular, cantidad)
    {
        this.titular = titular;
        this.cantidad = cantidad;
    }
    // function gettitular(x){
    get getTitularCuenta(){
        return this.titular;
    }
    set setTitularCuenta(titular){
        return this.titular = titular;
    }
    get getCantidadCueta(){
        return this.cantidad = cantidad;
    }
    set setCantidadCueta(cuenta){
        return this.cantidad = cantidad;
    }

    ingresar(adicion) {
       
        if(this.cantidad<0){
            console.log("No puede ingresar numeros negativos")
        }else{
            this.cantidad += adicion;
        }
        return this.cantidad;
    }

    retirar(sustraccion){
    
        if(sustraccion<0){
            this.cantidad += sustraccion;
            return this.cantidad;
        }else{
            console.log("No puede ingresar numeros positivos")   
        }
    }
}
var cantidad = 7;
let cuenta = new Cuenta("Armando",cantidad);
var adiccion = 11;
var total = cuenta.ingresar(adiccion);
console.log("Cantidad actual "+cantidad+" Ingresa: "+adiccion+" Total: "+total);
var sustraccion = -3;
console.log("se restan: "+sustraccion+" quedan :"+cuenta.retirar(sustraccion));