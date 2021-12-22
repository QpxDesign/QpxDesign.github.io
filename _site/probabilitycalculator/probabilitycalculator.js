function xoutOfChance() {
    var a  = Number(document.getElementById("chanceA").value);
    var b  = Number(document.getElementById("chanceAoutOf").value);
    var result = a/b * 100+ "%";
    document.getElementById("xoutOfChanceDISPLAY").innerHTML = result;
}