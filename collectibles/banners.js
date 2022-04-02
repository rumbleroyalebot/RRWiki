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

fetch('/RRWiki/databases/banners2.json')
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        // console.log(data);
        var divArray = new Array();
        var imageNames = Object.getOwnPropertyNames(data);
        console.log(imageNames);
        for (let i in imageNames) {
            // get image name and link
            var Name = imageNames[i];
            var Link = data[imageNames[i]];

            // make elements
            var divID = Name.toLowerCase().replace(' ', '_').replace('.', '_');
            var imageDiv = document
                .getElementById('banners')
                .appendChild(document.createElement('p'));
            imageDiv.id = divID;
            imageDiv.classList.add('bannerName', 'bannersContainer');
            divArray.push(divID);

            imageDiv.appendChild(document.createTextNode(Name));

            var Image = imageDiv.appendChild(document.createElement('img'));
            Image.setAttribute('src', Link);
            Image.setAttribute('loading', 'lazy');

            imageDiv.appendChild(document.createElement('hr'));

            // event listener
            imageDiv.addEventListener('click', () => {
                document
                    .getElementById(divArray[i])
                    .children[0].classList.toggle('bigimage');
            });
        }
    });
