var Euro18:number= 4209.3;
var Euro08:number= 4965.7;
var Africa18:number= 1235.5;
var Africa08:number= 1028;
var SouthA18:number= 1261.5;
var SouthA08:number= 1132.6;
var NorthA18:number= 6035.6;
var NorthA08:number= 6600.4;
var Asia18:number= 16274.1;
var Asia08:number= 12954.7;
var Austria18:number=2100.5;
var Austria08:number=1993;

var Gesamt:number= Euro18+Africa18+SouthA18+NorthA18+Asia18+Austria18;


console.log("Europa");
console.log("Die Emission von Europa ist: "+Euro18+" kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht Europa damit "+(Euro18/Gesamt *100)+"%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "+((Euro18-Euro08) /Euro18 *100)+"% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+(Euro18-Euro08)+" kg CO2");

console.log("Africa");
console.log("Die Emission von Africa ist: "+Africa18+" kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht Africa damit "+(Africa18/Gesamt *100)+"%");
console.log("Für Africa hat sich 2018 im Vergleich zu 2008 die Emission um "+((Africa18-Africa08) /Africa18 *100)+"% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+(Africa18-Africa08)+" kg CO2");

console.log("South America");
console.log("Die Emission von South America ist: "+SouthA18+" kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht South America damit "+(SouthA18/Gesamt *100)+"%");
console.log("Für South America hat sich 2018 im Vergleich zu 2008 die Emission um "+((SouthA18-SouthA08) /SouthA18 *100)+"% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+(SouthA18-SouthA08)+" kg CO2");

console.log("North America");
console.log("Die Emission von North America ist: "+NorthA18+" kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht North America damit "+(NorthA18/Gesamt *100)+"%");
console.log("Für North America hat sich 2018 im Vergleich zu 2008 die Emission um "+((NorthA18-NorthA08) /NorthA18 *100)+"% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+(NorthA18-NorthA08)+" kg CO2");

console.log("Asia");
console.log("Die Emission von Asia ist: "+Asia18+" kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht Asia damit "+(Asia18/Gesamt *100)+"%");
console.log("Für Asia hat sich 2018 im Vergleich zu 2008 die Emission um "+((Asia18-Asia08)  /Asia18 *100)+"% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+(Asia18-Asia08)+" kg CO2");

console.log("Australia");
console.log("Die Emission von Australia ist: "+Austria18+" kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht Australia damit "+(Austria18/Gesamt *100)+"%");
console.log("Für Australia hat sich 2018 im Vergleich zu 2008 die Emission um "+((Austria18-Austria08) /Austria18 *100)+"% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+(Austria18-Austria08)+" kg CO2");