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
        }
    }
    console.log(result)
    document.getElementById("textInput").value = String(result);
}