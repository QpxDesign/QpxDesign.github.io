// Housing Data (Should be replaced by Database, just for demo purposes)
// Data Order: [name (street address), location, price, sqft, beds, baths, photo]
const home_1 = ["807 Tyhme Ave.", "San Francisco, CA", 1300000,2500, 4, 3, "home_1.jpg"]
const home_2 = ["843 Marvon St.", "Onalaska, WI", 2800000,2500, 4, 3, "home_2.jpg"]
const home_3 = ["51 East Goldfield Ave.", "West Orange, NJ", 1400000,2500, 4, 3, "home_3.jpg"]
const home_4 =  ["7849 Yukon Lane", "Napa, CA", 3500000,2500, 4, 3, "home_4.jpg"]
const home_5 =  ["31 North Tailwater St.", "Folsom, CA", 3800000,2500, 4, 3, "home_5.jpg"]
const home_6 =  ["7785 Water Street", "San Diego, CA", 1700000,2500, 4, 3, "home_6.jpg"]
const home_7 =  ["9848 Lees Creek Dr.", "Carson, CA", 2100000,2500, 4, 3, "home_7.jpg"]
const home_8 =  ["8014 Pennington St.", "Fresno, CA", 3200000,2500, 4, 3, "home_8.jpg"]
const home_9 =  ["519 Gulf Drive", "Long Beach, CA", 1900000,2500, 4, 3, "home_9.jpg"]
const home_10 =  ["295 Shore Circle", "Anaheim, CA", 2100000,2500, 4, 3, "home_10.jpg"]
const home_11 =  ["9702 Tailwater St.", "Ontario, CA", 3400000,2500, 4, 3, "home_11.jpg"]
const home_12 =  ["166 Joy Ridge Lane", "Tracy, CA", 900000,2500, 4, 3, "home_12.jpg"]
const home_13 = ["813 Woodland Court", "Huntington Park, CA", 956000,2500, 4, 3, "home_13.jpg"]
const home_14 =  ["817 Ridgewood St.", "Montebello, CA", 4100000,2500, 4, 3, "home_14.jpg"]
const home_15 =  ["51 High Noon Street.", "Milwaukee, WI", 1200000,2500, 4, 3, "home_15.jpg"]

const allHomes = [home_1,home_2,home_3,home_4, home_5, home_6, home_7, home_8, home_9, home_10, home_11, home_12, home_13, home_14, home_15]

function search() {
  var matchesCount = 0;
  var resultsDisplayDiv = document.getElementById("resultsDisplay")
  // Generates Regex query for search bar input value, with the Key 'i' to make the search case insensitive
  const searchQuery = RegExp(" " + document.getElementById("searchBar").value, "i")
  // Unloads all existing houses 
  resultsDisplayDiv.innerHTML = "";
  for (var i = 0; i < allHomes.length; i++) {
    // If the city name matches
    if(searchQuery.test(allHomes[i][1])) {
    resultsDisplayDiv.innerHTML += `<div class="sampleHouseDisplay">
    <img src="photos/${allHomes[i][6]}" alt="" />
    <h1>$${(allHomes[i][2].toLocaleString('en-US'))}</h1>
    <h2>${allHomes[i][4]}bds - ${allHomes[i][5]}bths - ${allHomes[i][3]} sqft</h2>
    <h3>${allHomes[i][0]}</h3>
    <h3>${allHomes[i][1]}</h3>
  </div>`; 
  matchesCount++;
  } else if (searchQuery.test(allHomes[i][0])){
    // if the street name matches
      resultsDisplayDiv.innerHTML += `<div class="sampleHouseDisplay">
      <img src="photos/${allHomes[i][6]}" alt="" />
      <h1>$${(allHomes[i][2].toLocaleString('en-US'))}</h1>
      <h2>${allHomes[i][4]}bds - ${allHomes[i][5]}bths - ${allHomes[i][3]} sqft</h2>
      <h3>${allHomes[i][0]}</h3>
      <h3>${allHomes[i][1]}</h3>
    </div>`; 
    matchesCount++;
  }
  // If no matches were found, return an error
} if (matchesCount == 0) {
  resultsDisplayDiv.innerHTML += `<h1 id="error">Whoops - No Results Found! <br> Try Searching Again</h1>`; 
}
  // Displays Total Matches found
  document.getElementById("matchesDisplay").innerHTML = matchesCount + " matches found"
}
function resulsDisplay() {
    const resultsDisplayDiv = document.getElementById("resultsDisplay")
    for (var i = 0; i < allHomes.length; i++) {
        resultsDisplayDiv.innerHTML += `<div class="sampleHouseDisplay">
        <img src="photos/${allHomes[i][6]}" alt="" />
        <h1>$${(allHomes[i][2].toLocaleString('en-US'))}</h1>
        <h2>${allHomes[i][4]}bds - ${allHomes[i][5]}bths - ${allHomes[i][3]} sqft</h2>
        <h3>${allHomes[i][0]}</h3>
        <h3>${allHomes[i][1]}</h3>
      </div>`; 
    }
}
function toggleHelp() {
  if (document.getElementById("helpWindow").style.display == "block") {
    document.getElementById("helpWindow").style.display = "none";
    document.getElementById("hideHelp").style.display = "none";
  } else if (document.getElementById("helpWindow").style.display == "none")
  document.getElementById("helpWindow").style.display = "block";
  document.getElementById("hideHelp").style.display = "block";
}
function resetResults() {
  var matchCount = 0;
  var resultsDisplayDiv = document.getElementById("resultsDisplay")
  // Unloads All Houses
  resultsDisplayDiv.innerHTML = "";
  // Resets Search Bar Content
  document.getElementById("searchBar").value = "";
  // Reloads All Houses
  for (var i = 0; i < allHomes.length; i++) {
    // If the city name matches
    resultsDisplayDiv.innerHTML += `<div class="sampleHouseDisplay">
    <img src="photos/${allHomes[i][6]}" alt="" />
    <h1>$${(allHomes[i][2].toLocaleString('en-US'))}</h1>
    <h2>${allHomes[i][4]}bds - ${allHomes[i][5]}bths - ${allHomes[i][3]} sqft</h2>
    <h3>${allHomes[i][0]}</h3>
    <h3>${allHomes[i][1]}</h3>
  </div>`; 
  matchCount++;
  // Re-sets matches 
  document.getElementById("matchesDisplay").innerHTML = matchCount + " matches found";
}
}