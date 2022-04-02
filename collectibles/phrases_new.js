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
// Phrases 2.5/4:


fetch('/RRWiki/databases/phrases.json')
   .then((resp) => {
      return resp.json();
   })
   .then((data) => {
      for (let a in data) {
         var mainCategs = document
            .getElementById('phrases')
            .appendChild(document.createElement('p'));
         mainCategs.id = a;
         mainCategs
            .appendChild(document.createElement('h1'))
            .appendChild(
               document.createTextNode(a.charAt(0).toUpperCase() + a.slice(1))
            );

         for (let i in data[a]) {
            var eraDiv = document
               .getElementById(a)
               .appendChild(document.createElement('div'));
            eraDiv
               .appendChild(document.createElement('h2'))
               .appendChild(
                  document.createTextNode(
                     i.charAt(0).toUpperCase() + i.slice(1)
                  )
               );

            for (let j in data[a][i]) {
               var phraseUL = eraDiv.appendChild(document.createElement('ul'));
               var phraseType = phraseUL.appendChild(
                  document.createElement('h3')
               );
               phraseType.appendChild(
                  document.createTextNode(
                     (j.charAt(0).toUpperCase() + j.slice(1)).replace('_', ' ')
                  )
               );
               phraseUL.id = `${j}_${i}_${a}`;
               phraseUL.classList.add('dropdown_content');

               for (let k in data[a][i][j]) {
                  var phraseLI = phraseUL.appendChild(
                     document.createElement('li')
                  );
                  phraseLI.appendChild(
                     document.createTextNode(data[a][i][j][k])
                  );
                  eraDiv.addEventListener('click', () => {
                     document
                        .getElementById(`${j}_${i}_${a}`)
                        .classList.toggle('dropdown_content');
                  });
               }
            }
         }
      }
   });
