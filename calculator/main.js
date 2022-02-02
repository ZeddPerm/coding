var calculations = document.getElementById("calculations")
var expHistory = document.getElementById("expHistory")
const history = []
function addToCalc(button) {
    console.log(button.innerHTML)
    if (calculations.innerHTML == null) {calculations.innerHTML = button.innerHTML} 
    else {calculations.innerHTML = calculations.innerHTML + button.innerHTML}
}
function evaluation() {
    console.log(calculations.innerHTML)
    expHistory.innerHTML = expHistory.innerHTML + '<p>'+calculations.innerHTML.toString()+'</p>'
    history.push(calculations.innerHTML.toString())
    calculations.innerHTML = eval(calculations.innerHTML.toString())
}