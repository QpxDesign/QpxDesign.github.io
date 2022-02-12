var count = 0;

function toggleMenuBar() {
  if (document.getElementById("menubar").style.display == "none") {
    document.getElementById("menubar").style.display = "block";
  } else if (document.getElementById("menubar").style.display != "none") {
    document.getElementById("menubar").style.display = "none";
  }
}

function checkGuess(answer) {
  var guess = document.getElementById("guess").value;
  // Code to check guess
  for (var i = 0; i < answer.length; i++) {
    if (
      guess == answer[i] &&
      document.getElementById("tablerow_" + i).innerHTML.length == 0
    ) {
      // Code to set values of Table
      document.getElementById("tablerow_" + i).innerHTML = guess;
      document.getElementById("guess").value = "";
      count++;
      break;
    }
  }
  document.getElementById(
    "outofMessage"
  ).innerHTML = `${count} out of ${answer.length}`;
}

function revealAll(answer) {
  if (document.getElementById("revealButton").innerHTML == "Reveal") {
    for (var i = 0; i < answer.length; i++) {
      document.getElementById("tablerow_" + i).innerHTML = answer[i];
    }
    document.getElementById("revealButton").innerHTML = "Hide";
  } else {
    for (var i = 0; i < answer.length; i++) {
      document.getElementById("tablerow_" + i).innerHTML = "";
    }
    document.getElementById("revealButton").innerHTML = "Reveal";
  }
}
