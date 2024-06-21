
//typing animation
var typed = new Typed(".typing", {
    strings: ["", "MERN Stack Developer", "Problem Solver", "Competitive Programmer", "Web Designer", "Quant Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


const navi = document.querySelectorAll(".navi");

function switchTab(clickedTab) {
    Arrays.forEach(element => {
        if (element == clickedTab) {
            element.classList.add("active");
        }
        else {
            element.classList.remove("active");
        }
    })
}

navi.addEventListener("click", () => {
    switchTab(navi);
});


window.addEventListener("click", (event) => {
    navi.forEach(element => {
        if (event.target === element) {
            navi.classList.add("active");
        }
        else {
            navi.classList.remove("active");
        }
    });
})