const card = document.querySelector('.card');
const intro = document.querySelector('.intro');
const invitation = document.querySelector('.invitation');
const copyButton = document.querySelector(".copy-address");
const address = document.querySelector(".location address");
const copyIcon = document.querySelector(".copy-address img");

card.addEventListener("click", () => {
    card.classList.add("closing");
    setTimeout(() => {
        intro.style.display = "none";
        invitation.style.display = "grid";
    }, 500);
});

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(address.textContent);

    copyIcon.src = "assets/icons/check.png";

    setTimeout(() => {
        copyIcon.src = "assets/icons/copy.png";
    }, 1500);
});