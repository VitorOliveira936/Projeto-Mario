
const button = document.querySelector('.contact-button');
const form = document.querySelector('form');
const mask = document.getElementById('mask-form')


const buttonClick = () => {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mask.style.visibility = "visible";

}

const hiddenForm = () => {
    form.style.left = "-232px";
    form.style.transform = "translateX(0)";
    mask.style.visibility = "hidden";
}





button.addEventListener("click", buttonClick)