const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feet |   
    ${baseValue} feet = ${baseValue / meterToFeet} meters` 
})


convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    volumeEl.textContent = `${baseValue} liters = ${baseValue * literToGallon} gallons |
    ${baseValue} gallons = ${baseValue / literToGallon} liter`     //volume

})


convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    massEl.textContent = `${baseValue} kilograms = ${baseValue * kiloToPound} pounds |
    ${baseValue} pounds = ${baseValue / kiloToPound} kilograms`     //mass

})
