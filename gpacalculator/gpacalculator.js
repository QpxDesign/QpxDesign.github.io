function rowGenerator() {
    const gpacalculator = document.getElementById("gpacalculator");
    const classes = Number(document.getElementById("classesCount").value);
    for(var i = 0; i < classes; i++) {
        gpacalculator.innerHTML += 
        `<input type="text" placeholder="class name" />
        <select name="g1" class="g1">
          <option value="A">A</option>
          <option value="B">A-</option>
          <option value="C">B+</option>
          <option value="D">B</option>
          <option value="E">B-</option>
          <option value="F">C+</option>
          <option value="G">C</option>
          <option value="H">C-</option>
          <option value="I">D+</option>
          <option value="J">D</option>
          <option value="K">F</option>
        </select>
        <h4>______________________________________________</h4>`;
    }
    document.getElementById("classesCount").value = classes;
  }
function gpaCalc() {
    var totalGradePoints = 0; 
    var count = 0; 
    var gradeList = 0;
    $('.g1').each(function(){
        gradeList += this.value;
    });
    for (var i = 0; i < gradeList.length; i++) {
        if (gradeList[i] == "A") {totalGradePoints += 4; count++;}
        if (gradeList[i] == "B") {totalGradePoints += 3.7; count++;}
        if (gradeList[i] == "C") {totalGradePoints += 3.3; count++;}
        if (gradeList[i] == "D") {totalGradePoints += 3.0; count++;}
        if (gradeList[i] == "E") {totalGradePoints += 2.7; count++;}
        if (gradeList[i] == "F") {totalGradePoints += 2.3; count++;}
        if (gradeList[i] == "G") {totalGradePoints += 2; count++;}
        if (gradeList[i] == "H") {totalGradePoints += 1.7; count++;}
        if (gradeList[i] == "I") {totalGradePoints += 1.3; count++;}
        if (gradeList[i] == "J") {totalGradePoints += 1.0; count++;}
        if (gradeList[i] == "K") {totalGradePoints += 0; count++;}
    }
    result = Number(totalGradePoints/count);
    result = result.toFixed(2);
    document.getElementById("gpaDisplay").innerHTML = result;

  }