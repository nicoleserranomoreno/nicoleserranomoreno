const scrollable = document.getElementById("scrollable")
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const faviconFolders = ["atom", "dna", "microbe"];

function toggleScrollToTopButton() {
    scrollToTopBtn.style.display = scrollable.scrollTop >= 700 ? "block" : "none";
}

function scrollToTop() {
    scrollable.scrollTo({top: 0, behavior: "smooth"});
}

scrollToTopBtn.addEventListener("click", scrollToTop);
scrollable.addEventListener("scroll", toggleScrollToTopButton);


function assignRandomFavicon() {
    const randomIndex = Math.floor(Math.random() * faviconFolders.length);
    const faviconFolder = faviconFolders[randomIndex];
    const faviconApple = document.getElementById("favicon-apple");
    faviconApple.href = "images/icons/" + faviconFolder + "/apple-touch-icon.png"
    const favicon16 = document.getElementById("favicon-16");
    favicon16.href = "images/icons/" + faviconFolder + "/favicon-16x16.png"
    const favicon32 = document.getElementById("favicon-32");
    favicon32.href = "images/icons/" + faviconFolder + "/favicon-32x32.png"
}

window.addEventListener("load", (event) => {
    toggleScrollToTopButton()
    assignRandomFavicon();
});


