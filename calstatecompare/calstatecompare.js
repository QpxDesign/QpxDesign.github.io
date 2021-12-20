// College Stats for All CalStates with Data in Set Order   
let bakersfield = ["Bakersfield",11264,375,"suburban",5318,40,78]
let channelisland = ["Channel Islands",6943,1187,"rural",14000,81,79]
let Chico = ["Chico",16630,3249,"small city",15000,66,90]
let DominguezHills = ["Dominguez Hills",17763,346,"urban",4215,74,81]
let EastBay = ["East Bay",14641,14641,"suburban",11000,76,73]
let Fresno = ["Fresno",25341,388,"suburban",5464,56,90]
let Fullerton = ["Fullerton",41408,236,"urban",7991,66,68]
let Humboldt = ["Humboldt",6431,733,"rural",15000,46,85]
let LA = ["LA",26342,733,"urban",2768,47,76]
let Maritime = ["Maritime",907,92,"suburban",21000,64,82]
let MontereyBay = ["Monterey Bay",6871,1350,"suburban",12000,60,86]
let CSUN = ["CSUN",38551,1350,"suburban",8414,51,66]
let Pomona = ["Pomona",29704,1438,"suburban",13000,66,65]
let Sacramento = ["Sacramento",29704,305,"urban",9797,78,83]
let SanBernardino = ["San Bernardino",19404,441,"urban",7342,76,78]
let SanDiego = ["San Diego",35578,283,"urban",15000,74,37]
let SanFrancisco = ["San Francisco",26628,141.1,"urban",15000,80,84]
let SanJose = ["San José",33025,154,"urban",15000,57,67]
let SanLuisObispo = ["San Luis Obispo",22287,9678,"rural",22000,82,32]
let SanMarcos = ["San Marcos",7807,340,"urban",15000,53,79]
let Sonoma = ["Sonoma",10741,269,"suburban",17000,58,89]
let Stanislaus = ["Stanislaus",10741,228,"suburban",6019,53,89]

let collegeStats = [bakersfield,channelisland,Chico,DominguezHills,EastBay,Fresno,Fullerton,Humboldt,LA,Maritime,MontereyBay,CSUN,Pomona,Sacramento,SanBernardino,SanDiego,SanFrancisco,SanJose,SanLuisObispo,SanMarcos,Sonoma,Stanislaus]

// Function that updates slider value text 
function sliderUpdate(sliderID,displayID) {
    var a = document.getElementById(sliderID).value
    document.getElementById(displayID).innerHTML = a;
}

// Function that filters colleges by acceptance rate min and max as inputed as range
function acceptanceRateFilter() {
    let a = Number(document.getElementById("acceptanceRateSliderMIN").value);
    let b = Number(document.getElementById("acceptanceRateSliderMAX").value);
    let colleges = document.getElementsByClassName("schoolDisplayBlock");
    const matched = []
    const unmatched = []
    for(var i = 0; i < collegeStats.length; i++) {
            if (collegeStats[i][6] < b && collegeStats[i][6] > a) {
                matched.push(i)
        } else {
            unmatched.push(i)
        }
    }
    for(var c = 0; c < unmatched.length; c++) {
        colleges[unmatched[c]].style.display = "none";
    }
    for(var l = 0; l < matched.length; l++) {
        colleges[matched[l]].style.display = "inline-block";
    }
}

// Function that filters colleges by graduation rate min and max as inputed as range
function graduationRateFilter() {
    let a = Number(document.getElementById("graduationRateSliderMIN").value);
    let b = Number(document.getElementById("graduationRateSliderMAX").value);
    let colleges = document.getElementsByClassName("schoolDisplayBlock");
    const matched = []
    const unmatched = []
    for(var i = 0; i < collegeStats.length; i++) {
            if (collegeStats[i][5] < b && collegeStats[i][5] > a) {
                matched.push(i)
        } else {
            unmatched.push(i)
        }
    }
    for(var c = 0; c < unmatched.length; c++) {
        colleges[unmatched[c]].style.display = "none";
    }
    for(var l = 0; l < matched.length; l++) {
        colleges[matched[l]].style.display = "inline-block";
    }
}

// Function that filters colleges by seleteced campus size 
function campusSizeFilter() {
    var selected = document.getElementById("CampusSize").value
    var colleges = document.getElementsByClassName("schoolDisplayBlock");
    for(var i = 0; i < collegeStats.length; i++) {
        if (selected == "All") {colleges[i].style.display = "inline-block"}
        else {
        if (collegeStats[i][2] < 300) {
            if(selected == "Small") {colleges[i].style.display = "inline-block"}
            else {colleges[i].style.display = "none"}
    } else if (collegeStats[i][2] < 800 && collegeStats[i][2] > 300) {
            if(selected == "Medium") {colleges[i].style.display = "inline-block"}
            else {colleges[i].style.display = "none"}
    }
    else if (collegeStats[i][2] > 800) {
        if(selected == "Large") {colleges[i].style.display = "inline-block"}
        else {colleges[i].style.display = "none"}
    }
}
    }
}

// Function that filters colleges by seleteced student count
function studentCountFilter() {
    var selected = document.getElementById("StudentCount").value
    var colleges = document.getElementsByClassName("schoolDisplayBlock");
    for(var i = 0; i < collegeStats.length; i++) {
        if (selected == "All") {colleges[i].style.display = "inline-block"}
        else {
        if (collegeStats[i][1] < 10000) {
            if(selected == "Small") {colleges[i].style.display = "inline-block"}
            else {colleges[i].style.display = "none"}
    } else if (collegeStats[i][1] < 25000 && collegeStats[i][1] > 10000) {
            if(selected == "Medium") {colleges[i].style.display = "inline-block"}
            else {colleges[i].style.display = "none"}
    }
    else if (collegeStats[i][1] > 25000) {
        if(selected == "Large") {colleges[i].style.display = "inline-block"}
        else {colleges[i].style.display = "none"}
    }
}
    }
}

// Function that applies all of the above 'filters' (i.e. runs functions above)
function runFilter() {
    studentCountFilter();
    acceptanceRateFilter();
    campusSizeFilter();
    graduationRateFilter();
}

// Function that hides all college divs 
function hideAll() {
    var c = document.getElementsByClassName("schoolDisplayBlock");
    for (var i = 0; i < c.length;i++) {
        c[i].style.display = 'none';
    }
}

// Function that shows all college divs 
function showAll() {
    var c = document.getElementsByClassName("schoolDisplayBlock");
    for (var i = 0; i < c.length;i++) {
        c[i].style.display = 'inline-block';
    }
}