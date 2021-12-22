function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function passwordGenerator() {
    var includeNumbers = document.getElementById("includeNumbers");
    var includeSpecial = document.getElementById("includeSpecial");
    var includeLetters = document.getElementById("includeLetters");
    var password = "";
    var charSelection = [];
    var passwordLength = Number(
      document.getElementById("passwordLength").value
    );
    //passwordLength = 12;
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const special = [
      "!",
      "/",
      "*",
      "@",
      "#",
      "^",
      "&",
      "*",
      ")",
      "(",
      "-",
      "=",
    ];
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    if (includeNumbers.checked == true) {
      charSelection += [0];
    }
    if (includeSpecial.checked == true) {
      charSelection += [1];
    }
    if (includeLetters.checked == true) {
      charSelection += [2];
    }
    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = numbers[getRandomInt(numbers.length)];
      var randomSpecial = special[getRandomInt(special.length)];
      var randomLetters = letters[getRandomInt(letters.length)];
      var randomCharType = getRandomInt(charSelection.length);
      if (charSelection[randomCharType] == 0) {
        password += randomNumber;
      } else if (charSelection[randomCharType] == 1) {
        password += randomSpecial;
      } else if (charSelection[randomCharType] == 2) {
        password += randomLetters;
      }
    }
    document.getElementById("outputDisplay").value = password;
  }