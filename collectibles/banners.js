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

// Banners 3/4:

fetch("/RRWiki/databases/banners.json")
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
