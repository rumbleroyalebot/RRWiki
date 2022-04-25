// Importing JSON files:

// Banners 3/4:

fetch('../databases/banners.json')
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
            .appendChild(document.createElement('div'));
            imageDiv.id = divID;
            imageDiv.classList.add('bannerContainer');
            divArray.push(divID);

            let imageName = imageDiv.appendChild(document.createElement('p'));
            imageName.appendChild(document.createTextNode(Name));
            imageName.classList.add('bannerName');

            var Image = imageDiv.appendChild(document.createElement('img'));
            Image.setAttribute('src', Link);
            Image.setAttribute('loading', 'lazy');
            Image.setAttribute('draggable', 'false')
            Image.classList.add('banner');

            document.getElementById('banners').appendChild(document.createElement('hr'));

            // event listener
            imageDiv.addEventListener('click', () => {
                document
                    .getElementById(divArray[i])
                    .children[1].classList.toggle('bigimage');
            });
        }
    });
