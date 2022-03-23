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

// Classic Era 1/:
fetch("./shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("skins");
    for (let i in skins) {
      if (skins[i]["era"] === "classic") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name: " + skins[i]["skin"] + " " + skins[i]["item"] + "<br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });

// Classic Era:
fetch("./shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("skins");
    for (let i in skins) {
      if (skins[i]["era"] === "classic") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name: " + skins[i]["skin"] + " " + skins[i]["item"] + "<br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });

// Classic Era:
fetch("./shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("skins");
    for (let i in skins) {
      if (skins[i]["era"] === "classic") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name: " + skins[i]["skin"] + " " + skins[i]["item"] + "<br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });

// Classic Era:
fetch("./shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("skins");
    for (let i in skins) {
      if (skins[i]["era"] === "classic") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name: " + skins[i]["skin"] + " " + skins[i]["item"] + "<br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });

// Classic Era:
fetch("./shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("skins");
    for (let i in skins) {
      if (skins[i]["era"] === "classic") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name: " + skins[i]["skin"] + " " + skins[i]["item"] + "<br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });

// Classic Era:
fetch("./shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("skins");
    for (let i in skins) {
      if (skins[i]["era"] === "classic") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name: " + skins[i]["skin"] + " " + skins[i]["item"] + "<br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });

// Classic Era:
fetch("./shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("skins");
    for (let i in skins) {
      if (skins[i]["era"] === "classic") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name: " + skins[i]["skin"] + " " + skins[i]["item"] + "<br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });

// Classic Era:
fetch("./shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("skins");
    for (let i in skins) {
      if (skins[i]["era"] === "classic") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name: " + skins[i]["skin"] + " " + skins[i]["item"] + "<br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });



// Old Event Shop Items 1.5/4:

fetch("/RRWiki/databases/shop_items.json")
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