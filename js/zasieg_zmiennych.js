'use script'

var krzysiek = 3500;
var jurek = 5000;
var jola = 7000;
var sergio = 2500;

function policzSumaKasy(skladowa1, skladowa2, skladowa3, skladowa4) {
    var sumaKasy;
    sumaKasy = skladowa1 + skladowa2 + skladowa3 + skladowa4;
    
    return sumaKasy;
}

sumaKasy = policzSumaKasy (krzysiek, jurek, jola, sergio);
console.log( sumaKasy );