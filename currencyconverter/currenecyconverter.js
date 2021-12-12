function converter() {
    var currencyA = document.getElementById("currencyA").value;
    var currencyB = document.getElementById("currencyB").value;
    var amountA = Number(document.getElementById("amount").value);
    var convertedResultUSD;
    var convertedResultFINAl;
    // Converts Selected Currency to USD
    if (currencyA == "NZD") {
      convertedResultUSD = amountA * 0.679889;
    }
    if (currencyA == "ZAR") {
      convertedResultUSD = amountA * 0.0625814;
    }
    if (currencyA == "AUD") {
      convertedResultUSD = amountA * 0.717328;
    }
    if (currencyA == "BHD") {
      convertedResultUSD = amountA * 2.65957;
    }
    if (currencyA == "JPY") {
      convertedResultUSD = amountA * 0.00882035;
    }
    if (currencyA == "SGD") {
      convertedResultUSD = amountA * 0.73294;
    }
    if (currencyA == "GBP") {
      convertedResultUSD = amountA * 1.32681;
    }
    if (currencyA == "KYD") {
      convertedResultUSD = amountA * 1.2195;
    }
    if (currencyA == "EURO") {
      convertedResultUSD = amountA * 1.13172;
    }
    if (currencyA == "CHF") {
      convertedResultUSD = amountA * 1.08602;
    }
    if (currencyA == "USD") {
      convertedResultUSD = amountA * 1;
    }
    if (currencyA == "CAD") {
      convertedResultUSD = amountA * 0.785803;
    }
    // Converts USD Converted Value to Selected Currency
    if (currencyB == "NZD") {
      convertedResultFINAl = convertedResultUSD / 0.679889;
    }
    if (currencyB == "ZAR") {
      convertedResultFINAl = convertedResultUSD / 0.0625814;
    }
    if (currencyB == "AUD") {
      convertedResultFINAl = convertedResultUSD / 0.717328;
    }
    if (currencyB == "BHD") {
      convertedResultFINAl = convertedResultUSD / 2.65957;
    }
    if (currencyB == "JPY") {
      convertedResultFINAl = convertedResultUSD / 0.00882035;
    }
    if (currencyB == "SGD") {
      convertedResultFINAl = convertedResultUSD / 0.73294;
    }
    if (currencyB == "GBP") {
      convertedResultFINAl = convertedResultUSD / 1.32681;
    }
    if (currencyB == "KYD") {
      convertedResultFINAl = convertedResultUSD / 1.2195;
    }
    if (currencyB == "EURO") {
      convertedResultFINAl = convertedResultUSD / 1.13172;
    }
    if (currencyB == "CHF") {
      convertedResultFINAl = convertedResultUSD / 1.08602;
    }
    if (currencyB == "USD") {
      convertedResultFINAl = convertedResultUSD / 1;
    }
    if (currencyB == "CAD") {
      convertedResultFINAl = convertedResultUSD / 0.785803;
    }
    document.getElementById("resultDisplay").value = convertedResultFINAl;
}