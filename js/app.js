// Function used for the "back top top" button:

mybutton = document.getElementById("top");
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

fetch("databases/shop_items.json")
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

fetch("databases/shop_items.json")
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



// Banners 3/4:

fetch("databases/banners.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    const banners = data;

  for (var i = 0; i < data.length; i++) {
  console.log(data[0]);
  document.getElementById("banners").innerHTML =
  obj.name + " " + obj.name; 
    document.getElementById("banners").innerHTML +
    ("<p> Name: <span class = 'gold'>" + data[i].name + "<br>" + data[i].image + "</span></p>")
  }
});



