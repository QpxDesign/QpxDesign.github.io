function neededGradeCalculator() {
    var currentGrade = Number(document.getElementById("CurrentGrade").value)
    var finalWorth = Number(document.getElementById("finalWorth").value)
    var WantedGrade = Number(document.getElementById("WantedGrade").value)
    var result = WantedGrade - currentGrade * 100-finalWorth/finalWorth
    alert(result)
}