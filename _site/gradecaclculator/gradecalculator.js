function rowGenerator() {
    const gradeCalc = document.getElementById("gradeCalc");
    gradeCalc.innerHTML += `<div id="row">  
    <input type="number" class=g1>
    <label for="w1">out of</label>
    <input type="number" class="w1" />
    <h4>______________________________________________</h4>`;

  }
function gradeCalculator() {
  // Sums Total Points Earned
  var sumEarned = 0;
$('.g1').each(function(){
  sumEarned += parseFloat(this.value);
});
console.log(sumEarned)

  // Sums Total Points Possible
  var sumPossible = 0;
  $('.w1').each(function(){
    sumPossible += parseFloat(this.value);
  });
  console.log(sumPossible)
  // Calculate Total Grade
  var totalGrade = sumEarned/sumPossible * 100;
  totalGrade = Math.round(totalGrade);
  document.getElementById("gradeDisplay").innerHTML = totalGrade;
}


