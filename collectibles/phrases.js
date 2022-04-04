// Function used for the "back top top" button:

let mybutton = document.getElementById("top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function toTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome and Firefox
}



// Importing JSON files:
// Phrases 2/4:

fetch("../databases/phrases.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var eraNames = Object.getOwnPropertyNames(data["default"]);
    for (let i = 0; i < eraNames.length; i++) {

      document.getElementById("phrases").innerHTML =
        document.getElementById("phrases").innerHTML +
        ("<h3>" +eraNames[i] + ":</h3><ul type='disc'>");

      var phraseType = Object.getOwnPropertyNames(data["default"][eraNames[i]]);
      for (let j = 0; j < phraseType.length; j++) {


        document.getElementById("phrases").innerHTML =
          document.getElementById("phrases").innerHTML +
          ("<li><h3>" + phraseType[j] + ": <ul style='list-style-type: square'>");

        var phraseNumber = Object.getOwnPropertyNames(
          data["default"][eraNames[i]][phraseType[j]]
        );

        for (let k = 0; k < phraseNumber.length; k++) {

          phrase = data["default"][eraNames[i]][phraseType[j]][phraseNumber[k]];
          document.getElementById("phrases").innerHTML =
            document.getElementById("phrases").innerHTML +
            "</h3><li><p>" +
            phrase +
            "</p></li>";
        }

        document.getElementById("phrases").innerHTML =
          document.getElementById("phrases").innerHTML + "</ul> </li> <br />";
      }
      document.getElementById("phrases").innerHTML =
        document.getElementById("phrases").innerHTML + "</ul>";
    }
  });