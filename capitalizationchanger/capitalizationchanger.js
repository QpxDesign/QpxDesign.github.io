function caseConverter() {
    var a = document.getElementById("textInput").value;
    var selectedCase = document.getElementById("selectedCase").value;
    var b = a.split("");
    var result = "";
    for (var i = 0; i < b.length; i++) {
        if (selectedCase == "Title") {
            if (b[i-1] == " " || i == 0) {
                result += String(b[i].toUpperCase()); 
            } else {
                result += String(b[i].toLowerCase());
            }
        } else if (selectedCase == "Upper") {
            result = a.toUpperCase();
        } else if (selectedCase == "Lower") {
            result = a.toLowerCase();
        } else if (selectedCase == "Random") {
            var randomChoice = Math.floor(Math.random() * 2)
            if (randomChoice == 0) {
                result += String(b[i].toUpperCase()); 
            } else {
                result += String(b[i].toLowerCase()); 
        }
        }
    }
    document.getElementById("textInput").value = String(result);
}
function wordCounter() {
    var a = document.getElementById("textInput").value;
    var b = a.split(" ");
    var result = 0;
    for (var i = 0; i < b.length; i++) {
        if (b[i] != " " || b[i] != "  ") {
            result++;
        }
    }
    document.getElementById("wordCount").innerHTML = result;
}
function sentanceCount() {
    var a = document.getElementById("textInput").value;
    var b = a.split("");
    var result = 0;
    for (var i = 0; i < b.length; i++) {
        if (b[i] == ".") {
            result++;
        }
    }
 document.getElementById("sentanceCount").innerHTML = result;
}
function charCounter() {
    var a = document.getElementById("textInput").value;
    var b = a.split("");
    var result = b.length;
    document.getElementById("charCount").innerHTML = result;
}
function pageDisplay() {
    charCounter();
    wordCounter();
    sentanceCount();
}
function textReverser() {
    var a = document.getElementById("textInput").value;
    var b = Array.from(a);
    document.getElementById("textInput").value = (b.reverse()).join("")

}