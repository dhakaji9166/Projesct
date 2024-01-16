

const bars = document.querySelector("#bar");
const menu = document.querySelector(".menu ul");
const closebtn = document.querySelector("#close")

bars.addEventListener(
    "click",
    function () {
        menu.style.left = 0;
        bars.style.display = "none";
        closebtn.style.display = "block"
    }
)

closebtn.addEventListener(
    "click",
    function () {
        menu.style.left = "";
        bars.style.display = "block";
        closebtn.style.display = "none"
    }
)

window.addEventListener(
    "resize",
    function () {
        console.log(window.screen.width)

        if (window.screen.width > 992) {
            bars.style.display = "";
            closebtn.style.display = ""
        }
    }
)
