

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

window.addEventListener('load', function(){

    document.querySelector('.titleRegion').innerHTML = "Europe";
    document.querySelector('.titleRegion2').innerHTML = "Europe";
    document.querySelector('#emission').innerHTML = Euro18.toFixed(2).toString();
    document.querySelector('#toWorld').innerHTML = (Euro18/Gesamt *100).toFixed(2) +"%";
    document.querySelector('#procent').innerHTML = ((Euro18-Euro08) /Euro18 *100).toFixed(2) +"%";
    document.querySelector('#absolute').innerHTML = (Euro18-Euro08).toFixed(2).toString();
    document.querySelector(".chart").setAttribute('style', 'height:'+(Euro18/Gesamt *100).toFixed(2)+'%');


document.querySelector('#europ').addEventListener('click', function(){
    document.querySelector('.titleRegion').innerHTML = "Europe";
    document.querySelector('#emission').innerHTML = Euro18.toFixed(2).toString();
    document.querySelector('#toWorld').innerHTML = (Euro18/Gesamt *100).toFixed(2) +"%";
    document.querySelector('#procent').innerHTML = ((Euro18-Euro08) /Euro18 *100).toFixed(2) +"%";
    document.querySelector('#absolute').innerHTML = (Euro18-Euro08).toFixed(2).toString();
    document.querySelector(".chart").setAttribute('style', 'height:'+(Euro18/Gesamt *100).toFixed(2)+'%');


    console.group("Europa");
    console.log("Die Emission von Europa ist: "+Euro18+" kg CO2");
    console.log("Relativ zur Gesamtemisson der Welt verursacht Europa damit "+(Euro18/Gesamt *100)+"%");
    console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "+((Euro18-Euro08) /Euro18 *100)+"% verändert");
    console.log("2018 im Vergleich zu 2008 sind das "+(Euro18-Euro08)+" kg CO2");
    console.groupEnd();
})


document.querySelector('#africa').addEventListener('click', function(){
    document.querySelector('.titleRegion').innerHTML = "Africa";
    document.querySelector('.titleRegion2').innerHTML = "Africa";
    document.querySelector('#emission').innerHTML = Africa18.toFixed(2).toString();
    document.querySelector('#toWorld').innerHTML = (Africa18/Gesamt *100).toFixed(2) +"%";
    document.querySelector('#procent').innerHTML = ((Africa18-Africa08) /Africa18 *100).toFixed(2) +"%";
    document.querySelector('#absolute').innerHTML = (Africa18-Africa08).toFixed(2).toString();
    document.querySelector(".chart").setAttribute('style', 'height:'+(Africa18/Gesamt *100).toFixed(2)+'%');


console.group("Africa");
console.log("Die Emission von Africa ist: "+Africa18+" kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht Africa damit "+(Africa18/Gesamt *100)+"%");
console.log("Für Africa hat sich 2018 im Vergleich zu 2008 die Emission um "+((Africa18-Africa08) /Africa18 *100)+"% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+(Africa18-Africa08)+" kg CO2");
console.groupEnd();
})


document.querySelector('#southa').addEventListener('click', function(){
    document.querySelector('.titleRegion').innerHTML = "South America";
    document.querySelector('.titleRegion2').innerHTML = "South America";
    document.querySelector('#emission').innerHTML = SouthA18.toFixed(2).toString();
    document.querySelector('#toWorld').innerHTML = (SouthA18/Gesamt *100).toFixed(2) +"%";
    document.querySelector('#procent').innerHTML = ((SouthA18-SouthA08) /SouthA18 *100).toFixed(2) +"%";
    document.querySelector('#absolute').innerHTML = (SouthA18-SouthA08).toFixed(2).toString();
    document.querySelector(".chart").setAttribute('style', 'height:'+(SouthA18/Gesamt *100).toFixed(2)+'%');


console.group("South America");
console.log("Die Emission von South America ist: "+SouthA18+" kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht South America damit "+(SouthA18/Gesamt *100)+"%");
console.log("Für South America hat sich 2018 im Vergleich zu 2008 die Emission um "+((SouthA18-SouthA08) /SouthA18 *100)+"% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+(SouthA18-SouthA08)+" kg CO2");
console.groupEnd();
})


document.querySelector('#northa').addEventListener('click', function(){
    document.querySelector('.titleRegion').innerHTML = "North America";
    document.querySelector('.titleRegion2').innerHTML = "North America";
    document.querySelector('#emission').innerHTML = NorthA18.toFixed(2).toString();
    document.querySelector('#toWorld').innerHTML = (NorthA18/Gesamt *100).toFixed(2) +"%";
    document.querySelector('#procent').innerHTML = ((NorthA18-NorthA08) /NorthA18 *100).toFixed(2) +"%";
    document.querySelector('#absolute').innerHTML = (NorthA18-NorthA08).toFixed(2).toString();
    document.querySelector(".chart").setAttribute('style', 'height:'+(NorthA18/Gesamt *100).toFixed(2)+'%');


console.group("North America");
console.log("Die Emission von North America ist: "+NorthA18+" kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht North America damit "+(NorthA18/Gesamt *100)+"%");
console.log("Für North America hat sich 2018 im Vergleich zu 2008 die Emission um "+((NorthA18-NorthA08) /NorthA18 *100)+"% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+(NorthA18-NorthA08)+" kg CO2");
console.groupEnd();
})


document.querySelector('#asia').addEventListener('click', function(){
    document.querySelector('.titleRegion').innerHTML = "Asia";
    document.querySelector('.titleRegion2').innerHTML = "Asia";
    document.querySelector('#emission').innerHTML = Asia18.toFixed(2).toString();
    document.querySelector('#toWorld').innerHTML = (Asia18/Gesamt *100).toFixed(2) +"%";
    document.querySelector('#procent').innerHTML = ((Asia18-Asia08) /Asia18 *100).toFixed(2) +"%";
    document.querySelector('#absolute').innerHTML = (Asia18-Asia08).toFixed(2).toString();
    document.querySelector(".chart").setAttribute('style', 'height:'+(Asia18/Gesamt *100).toFixed(2)+'%');


console.group("Asia");
console.log("Die Emission von Asia ist: "+Asia18+" kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht Asia damit "+(Asia18/Gesamt *100)+"%");
console.log("Für Asia hat sich 2018 im Vergleich zu 2008 die Emission um "+((Asia18-Asia08)  /Asia18 *100)+"% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+(Asia18-Asia08)+" kg CO2");
console.groupEnd();
})


document.querySelector('#austria').addEventListener('click', function(){
    document.querySelector('.titleRegion').innerHTML = "Australia";
    document.querySelector('.titleRegion2').innerHTML = "Australia";
    document.querySelector('#emission').innerHTML = Austria18.toFixed(2).toString();
    document.querySelector('#toWorld').innerHTML = (Austria18/Gesamt *100).toFixed(2) +"%";
    document.querySelector('#procent').innerHTML = ((Austria18-Austria08) /Austria18 *100).toFixed(2) +"%";
    document.querySelector('#absolute').innerHTML = (Austria18-Austria08).toFixed(2).toString();
    document.querySelector(".chart").setAttribute('style', 'height:'+(Austria18/Gesamt *100).toFixed(2)+'%');


console.group("Australia");
console.log("Die Emission von Australia ist: "+Austria18+" kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht Australia damit "+(Austria18/Gesamt *100)+"%");
console.log("Für Australia hat sich 2018 im Vergleich zu 2008 die Emission um "+((Austria18-Austria08) /Austria18 *100)+"% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+(Austria18-Austria08)+" kg CO2");
console.groupEnd();
})



})