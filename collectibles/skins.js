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

// Classic Era 1/7:
fetch("../databases/shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("classicSkins");
    for (let i in skins) {
      if (skins[i]["era"] === "classic") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name:<span class = 'gold'> " + skins[i]["skin"] + " " + skins[i]["item"] + "</span><br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });

// Modern Era 2/7:
fetch("../databases/shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("modernSkins");
    for (let i in skins) {
      if (skins[i]["era"] === "modern") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name:<span class = 'gold'> " + skins[i]["skin"] + " " + skins[i]["item"] + "</span><br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });

// Futuristic Era 3/7:
fetch("../databases/shop_items.json")
.then((resp) => {
  return resp.json();
})
.then((data) => {
  var skins = data["skins"];
  var skindiv = document.getElementById("futuristicSkins");
  for (let i in skins) {
    if (skins[i]["era"] === "futuristic") {
      skindiv.innerHTML =
        skindiv.innerHTML +
        ("<p>Name:<span class = 'gold'> " + skins[i]["skin"] + " " + skins[i]["item"] + "</span><br />") +
        ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
    }
  }
});

// Medieval Era 4/7:
fetch("../databases/shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("medievalSkins");
    for (let i in skins) {
      if (skins[i]["era"] === "medieval") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name:<span class = 'gold'> " + skins[i]["skin"] + " " + skins[i]["item"] + "</span><br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });

// Pirate Era 5/7:
fetch("../databases/shop_items.json")
.then((resp) => {
  return resp.json();
})
.then((data) => {
  var skins = data["skins"];
  var skindiv = document.getElementById("pirateSkins");
  for (let i in skins) {
    if (skins[i]["era"] === "pirate") {
      skindiv.innerHTML =
        skindiv.innerHTML +
        ("<p>Name:<span class = 'gold'> " + skins[i]["skin"] + " " + skins[i]["item"] + "</span><br />") +
        ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
    }
  }
});

// Samurai Era 6/7:
fetch("../databases/shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("samuraiSkins");
    for (let i in skins) {
      if (skins[i]["era"] === "samurai") {
        skindiv.innerHTML =
          skindiv.innerHTML +
          ("<p>Name:<span class = 'gold'> " + skins[i]["skin"] + " " + skins[i]["item"] + "</span><br />") +
          ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
      }
    }
  });


// Steampunk Era 7/7:
fetch("../databases/shop_items.json")
.then((resp) => {
  return resp.json();
})
.then((data) => {
  var skins = data["skins"];
  var skindiv = document.getElementById("steampunkSkins");
  for (let i in skins) {
    if (skins[i]["era"] === "steampunk") {
      skindiv.innerHTML =
        skindiv.innerHTML +
        ("<p>Name:<span class = 'gold'> " + skins[i]["skin"] + " " + skins[i]["item"] + "</span><br />") +
        ("Cost: " + skins[i]["price"] + " " + skins[i]["cost"] + "</p>");
    }
  }
});

// Old Event Shop Items 1.5/4:

fetch("../databases/shop_items.json")
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