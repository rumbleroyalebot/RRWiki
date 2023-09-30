fetch("../databases/banners.json")
    .then((response) => response.json())
    .then((data) => {
        const bannerSection = document.getElementById("banner-section");
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const banner = data[key];
                const card = document.createElement("article");
                card.classList.add("card");
                const img = document.createElement("img");
                img.classList.add("card-img");
                img.src = banner.image;
                img.alt = "";
                const cardText = document.createElement("p");
                cardText.classList.add("card-text");
                cardText.textContent = banner.name;
                card.appendChild(img);
                card.appendChild(cardText);
                bannerSection.appendChild(card);
            }
        }
    })
    .catch((error) => console.error("Error loading JSON:", error));
