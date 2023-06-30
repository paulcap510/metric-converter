let convertBtn = document.getElementById('convert-btn')
let lengthDiv = document.getElementById('length-div')
let numberInputEl = document.getElementById('number-input')
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


function convertUnits() {
    var input = parseFloat(document.getElementById("number-input").value);

    var feetToMetersFactor = 0.3048;
    var litersToGallonsFactor = 0.264172;
    var poundsToKilogramsFactor = 0.453592;

    var metersToFeet = input * feetToMetersFactor;
    var feetToMeters = input / feetToMetersFactor;

    var litersToGallons = input * litersToGallonsFactor;
    var gallonsToLiters = input / litersToGallonsFactor;

    var poundsToKilograms = input * poundsToKilogramsFactor;
    var kilogramsToPounds = input / poundsToKilogramsFactor;

    var lengthDiv = document.querySelector(".length-div");
    var volDiv = document.querySelector(".vol-div");
    var massDiv = document.querySelector(".mass-div");
    lengthDiv.textContent = input + " meters = " + metersToFeet.toFixed(3) + " feet | " + input + " feet = " + feetToMeters.toFixed(3) + " meters";
    volDiv.textContent = input + " liters = " + litersToGallons.toFixed(3) + " gallons | " + input + " gallons = " + gallonsToLiters.toFixed(3) + " liters";
    massDiv.textContent = input + " pounds = " + poundsToKilograms.toFixed(3) + " kilograms | " + input + " kilograms = " + kilogramsToPounds.toFixed(3) + " pounds";
}
