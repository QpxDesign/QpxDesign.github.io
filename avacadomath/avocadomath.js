function simpleCalculator() {
    var a = document.getElementById("numOne").value;
    var b = document.getElementById("numTwo").value;
    var operation = document.getElementById("operation").value;
    if (operation == "add") {
        result = Number(a) + Number(b);
    } else if (operation == "sub") {
        result = Number(a) - Number(b); 
    } else if (operation == "multi") {
        result = Number(a) * Number(b);
    } else if (operation == "div") {
        result = Number(a) / Number(b);
    } else if (operation == "mod") {
        result = Number(a) % Number(b);
    }
    document.getElementById("SimpleCalculatorDisplay").innerHTML = result;
  }
  function xpercentOfCalculator() {
    var a = document.getElementById("xpercentof").value;
    var b = document.getElementById("xpercentofNUM").value;
    var result = Number(b)/100 * Number(a)
    document.getElementById("xpercentofDisplay").innerHTML = result;
  }
  function percentOfCalculator() {
    var a = document.getElementById("percentof").value;
    var b = document.getElementById("percentofNUM").value;
    var result = Number(a)/Number(b) * 100 + "%";
    document.getElementById("percentofDisplay").innerHTML = result;
  }
  function percentDecreaseCalculator() {
    var result;
    var a = document.getElementById("percentDecreaseNumOne").value;
    var b = document.getElementById("percentDecreaseNumTwo").value;
    var c = Number(b)-Number(a);
    var result = Number(c)/Number(a) * 100 + "%";
    document.getElementById("percentDecreaseDisplay").innerHTML = result;
  }
  function FactoringCalculator() {
    var a = Number(document.getElementById("FactoringNumber").value);
    var data = " ";
    if (a < 10000) {
    for (var i = 0; i < a; i++) {
      var c = a / i;
      if (c % 1 == 0) {
        var result = String(c) + " and " + String(i) + ", ";
        data += result;
    }
  }
  } else {
    data = "ERROR - Input above 10,000";
  }
    document.getElementById("FactoringCalculatorDisplay").innerHTML = data;
}
function DensityCalculator() {
  var m = Number(document.getElementById("DensityMass").value);
  var v = Number(document.getElementById("DensityVolume").value);
  var density = m/v + "g/cm3";
  document.getElementById("DensityCalculatorDisplay").innerHTML = density;
}
function DistanceConversionCalculator() {
  var a = Number(document.getElementById("DistanceUnitANum").value);
  var unitA = document.getElementById("distanceUnitA").value;
  var unitB = document.getElementById("distanceUnitB").value;
  var result;
  // Converts A to KM depending on what unit it is 
  if (unitA = "Mile") {
    a *=  1.609;  // Unit A to KM if its Miles
} else if (unitA = "Meter") {
  a /= 1000;
} else if (unitA = "Centimeter") {
  a *= 100000;
} else if (unitA = "Inch") {
  a *= 39370;
} else if (unitA = "Yard") {
  a *= 1094;
} else {
  a = 404;
}
// Converts A to specified unit 
if (unitB = "Mile") {
    a /=  1.609;  // Unit A to KM if its Miles
} else if (unitB = "Meter") {
  a *= 1000;
} else if (unitB = "Centimeter") {
  a /= 100000;
} else if (unitB = "Inch") {
  a /= 39370;
} else if (unitB = "Yard") {
  a /= 1094;
} else {
  a = 404;
}
document.getElementById("DistanceConversionCalculatorDisplay").innerHTML = a;
} 