var cantSedan,cantCamionetas, cantEconomic;
var costMaterial,costPersonal,costImpuestos, costTransporte;

cantSedan = 90;
cantCamionetas = 30;
cantEconomic = 150;
// =====Costo Unidad====================
// costMaterial = 10;
// costPersonal = 15;
// costImpuestos = 9;
// costTransporte = 3;
// costMaterialSemanal = 10*7;
// costPersonalSemanal = 15*7;
// costImpuestosSemanal = 9*7;
// costTransporteSemanal = 3*7;
costoUnidad = [10,15,9,3];
document.write('1. Costo de las unidades semanales necesarias <br><br>');
document.write("Material: "+costoUnidad[0]*7+"<br>Personal: "+costoUnidad[1]*7+"<br>Impuestos: "
                +costoUnidad[2]*7   +"<br>Impuestos: "+costoUnidad[3]*7+"<br>")

// =========================

var array = [[7,8,5],
            [10,9,7],
            [5,3,2],
            [2,3,1]];

var acumSedan = 0;
var acumCamioneta = 0;
var acumEconomico = 0;
var costoTotal = 0;
 
for (var j = 0; j < array.length; j++) {

    // document.write(array[j]+",<br>"); 
    // document.write(array[j][0]+",<br>"); 
    acumSedan += array[j][0];
    acumCamioneta += array[j][1];
    acumEconomico += array[j][2];
}    
document.write("<br>")
document.write('2. El costo total de un auto de cada modelo <br><br>');
document.write("Costo total de un sedan: "+acumSedan+",<br>")
document.write("Costo total de un Camioneta: "+acumCamioneta+",<br>")
document.write("Costo total de un Economico: "+acumEconomico+",<br>")
costoTotal = acumSedan+acumCamioneta+acumEconomico;
document.write("<br>")
document.write("3. El costo total semanal es de: "+costoTotal*7+",<br>")


