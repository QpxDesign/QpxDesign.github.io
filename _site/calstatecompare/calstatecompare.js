// College Stats for All CalStates with Data in Set Order 
// KEY: Name, Student Count, Size (in Acres), Campus Type, Graduation Rate, Acceptance Rate, City Name, Average SAT, Average ACT Score
let bakersfield = ["CSU Bakersfield",11264,375,"suburban",5318,40,78,"Bakersfield, CA", 933, 19, "images/bakersfield.jpeg"]
let channelisland = ["CSU Channel Islands",6943,1187,"rural",14000,81,79,"Camaroillo, CA",1070, 21]
let Chico = ["Chico State",16630,3249,"small city",15000,66,90,"Chico, CA", 1100, 21]
let DominguezHills = ["CSU Dominguez Hills",17763,346,"urban",4215,74,81,"Carson, CA", 900, 18]
let EastBay = ["Cal State East Bay",14641,14641,"suburban",11000,76,73,"Hayward, CA", 922, 19]
let Fresno = ["Fresno State",25341,388,"suburban",5464,56,90,"Fresno, CA",1010, 18.5]
let Fullerton = ["Cal State Fullerton",41408,236,"urban",7991,66,68,"Fullerton, CA",1130, 20]
let Humboldt = ["Humboldt State",6431,733,"rural",15000,46,85,"Humboldt, CA",1073, 21]
let LA = ["Cal State LA",26342,733,"urban",2768,47,76,"Los Angeles, CA", 985, 17.5]
let Maritime = ["Cal Maritime",907,92,"suburban",21000,64,82,"Vallejo, CA", 1160, 24]
let MontereyBay = ["CSU Monterey Bay",6871,1350,"suburban",12000,60,86,"Monterey Bay, CA",1075, 20]
let CSUN = ["CSUN",38551,1350,"suburban",8414,51,66,"Northride, CA",1030, 19]
let Pomona = ["Cal Poly Pomona",29704,1438,"suburban",13000,66,65,"Ponoma, CA",1140, 23]
let Sacramento = ["Sacramento State",29704,305,"urban",9797,78,83,"Sacramento, CA",1035, 19]
let SanBernardino = ["Cal State San Bernardino",19404,441,"urban",7342,76,78,"San Bernardino, CA",1000, 17.5]
let SanDiego = ["San Diego State",35578,283,"urban",15000,74,37,"San Diego, CA",1215, 25.5]
let SanFrancisco = ["San Francisco State",26628,141.1,"urban",15000,80,84,"San Francisco, CA",1057, 19.5]
let SanJose = ["San José State",33025,154,"urban",15000,57,67,"San Jose, CA", 1145, 22.5]
let SanLuisObispo = ["Cal Poly San Luis Obispo",22287,9678,"rural",22000,82,32,"San Luis Obispo, CA",1335, 29]
let SanMarcos = ["CSU San Marcos",7807,340,"urban",15000,53,79,"San Marcos, CA", 1100, 19.5]
let Sonoma = ["Sonoma State",10741,269,"suburban",17000,58,89,"Rohnert Park, CA",1080, 22]
let Stanislaus = ["Stanislaus State",10741,228,"suburban",6019,53,89,"Turlock, CA",1000, 19]

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

// Function that creates seperate window with two colleges compared side-to-side
function compareColleges() {
    var a = Number(document.getElementById("compareCollege1").value)
    var b = Number(document.getElementById("compareCollege2").value)
    // Displays Names of Selected Colleges 
    document.getElementById("collegeANameDisplay").innerHTML = collegeStats[a][0]
    document.getElementById("collegeBNameDisplay").innerHTML = collegeStats[b][0]
    // Displays City of Selected Colleges
    document.getElementById("collegeACityDisplay").innerHTML = collegeStats[a][7]
    document.getElementById("collegeBCityDisplay").innerHTML = collegeStats[b][7]
    // Displays Student Count of Selected Colleges
    document.getElementById("collegeAStudentDisplay").innerHTML = collegeStats[a][1]
    document.getElementById("collegeBStudentDisplay").innerHTML = collegeStats[b][1]
    //  Displays Campus Size of Selected Colleges
    document.getElementById("collegeASizeDisplay").innerHTML = collegeStats[a][2]
    document.getElementById("collegeBSizeDisplay").innerHTML = collegeStats[b][2]
    // Displays Average Cost of Selected Colleges
    document.getElementById("collegeACostDisplay").innerHTML = collegeStats[a][4]
    document.getElementById("collegeBCostDisplay").innerHTML = collegeStats[b][4]
    // Displays Acceptance Rate of Selected Colleges
    document.getElementById("collegeAacceptanceDisplay").innerHTML = collegeStats[a][6]
    document.getElementById("collegeBacceptanceDisplay").innerHTML = collegeStats[b][6]
     // Displays Graduation Rate of Selected Colleges
     document.getElementById("collegeAGraduationDisplay").innerHTML = collegeStats[a][5]
     document.getElementById("collegeBGraduationDisplay").innerHTML = collegeStats[b][5]
    // Displays Average SAT Score of Selected Colleges
    document.getElementById("collegeASATDisplay").innerHTML = collegeStats[a][8]
    document.getElementById("collegeBSATDisplay").innerHTML = collegeStats[b][8]
    // Displays Average SAT Score of Selected Colleges
    document.getElementById("collegeAACTDisplay").innerHTML = collegeStats[a][9]
    document.getElementById("collegeBACTDisplay").innerHTML = collegeStats[b][9]
}