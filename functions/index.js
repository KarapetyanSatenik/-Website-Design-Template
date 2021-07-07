let menuWithLinks = document.querySelector(".menu-icon");
let nav = document.querySelector(".navigation")
menuWithLinks.addEventListener('click', () => {
    nav.classList.toggle('close')
})