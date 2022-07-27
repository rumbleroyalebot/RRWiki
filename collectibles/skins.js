// Importing JSON files:

// Shop Items 1/4:

// Classic Era 1/8:
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

// Modern Era 2/8:
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

// Futuristic Era 3/8:
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

// Medieval Era 4/8:
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

// Pirate Era 5/8:
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

// Samurai Era 6/8:
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


// Steampunk Era 7/8:
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

// Zombie Era 6/8:
fetch("../databases/shop_items.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    var skins = data["skins"];
    var skindiv = document.getElementById("zombieSkins");
    for (let i in skins) {
      if (skins[i]["era"] === "zombie") {
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