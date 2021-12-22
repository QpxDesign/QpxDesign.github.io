function backgroundSet() {
var colorR = Number(document.getElementById("redInput").value);
    var colorG = Number(document.getElementById("greenInput").value);
    var colorB = Number(document.getElementById("blueInput").value);
    document.body.style.backgroundColor =
    "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}
function backgroundFlip() {
    var colorR = 255 - Number(document.getElementById("redInput").value);
    var colorG = 255 - Number(document.getElementById("greenInput").value);
    var colorB = 255 - Number(document.getElementById("blueInput").value) ;
    document.body.style.backgroundColor =
    "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}