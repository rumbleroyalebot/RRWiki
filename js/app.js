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

// Shop Items 1/4:

fetch("/databases/shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    const skins = data["skins"];

  for (var i = 0; i < skins.length; i++) {
  document.getElementById("itemList").innerHTML =
    document.getElementById("itemList").innerHTML +
    ("<p> Name: <span class = 'gold'>" + skins[i].skin + " " + skins[i].item + "</span> <br>") +
    ("Era: <b>" + skins[i].era + "</b><br>") +
    ("Price: " + skins[i].price + " " + skins[i].cost + "</p>");
  }
});

// Old Event Shop Items 1.5/4:

fetch("/databases/shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    const old_event = data["old_event"];

  for (var i = 0; i < old_event.length; i++) {
  document.getElementById("OldEventsitemList").innerHTML =
    document.getElementById("OldEventsitemList").innerHTML +
    ("<p> Name: <span class = 'gold'>" + old_event[i].skin + " " + old_event[i].item + "</span> <br>") +
    ("Era: <b>" + old_event[i].era + "</b><br>") +
    ("Price: " + old_event[i].price + " " + old_event[i].cost + "</p>");
  }
});


// Phrases 2/4:

fetch("/databases/phrases.json")
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


// Banners 3/4:

fetch("/databases/banners.json")
.then((resp) => {
  return resp.json();
})
.then((data) => {
  dataLen = Object.getOwnPropertyNames(data);
  for (let i in dataLen) {
    dataNum = dataLen[i];
    var name = data[dataNum]["name"];
    var img = data[dataNum]["image"];
    document.getElementById("banners").innerHTML =
      document.getElementById("banners").innerHTML +
      ("<div class='bannerContainer'><p>" + name + "</p><img draggable='false' class='banner' src='" + img + "'/></div> <hr />");
  }
});
