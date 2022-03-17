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
    console.log(data);
    const skins = data["skins"];

    for (var i = 0; i < skins.length; i++) {
      console.log(skins[i]);
      document.getElementById("itemList").innerHTML =
        document.getElementById("itemList").innerHTML +
        ("Name: " + skins[i].name + "<br />") +
        ("Skin: " + skins[i].skin + "<br />") +
        ("Era: " + skins[i].era + "<br />") +
        ("Cost: " + skins[i].cost + "<br />") +
        ("Price: " + skins[i].price + "<br /> <br />");
  }
});




