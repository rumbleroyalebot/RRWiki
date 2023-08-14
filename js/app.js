let toTopButton = document.getElementById("top");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
