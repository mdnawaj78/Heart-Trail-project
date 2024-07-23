const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => { 
    const xPos = event.offsetX; 
    const yPos = event.offsetY; 
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random()*100;
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },3000);
});

// text effect


const containerText = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];
let careersIndex = 0, characterIndex = 0;

(function updateText() {
    containerText.innerHTML = `<h1>I AM ${"I" === careers[careersIndex][0] ? "an" : "a"} ${careers[careersIndex].slice(0, ++characterIndex)}</h1>`;
    if (characterIndex === careers[careersIndex].length) (characterIndex = 0, careersIndex = ++careersIndex % careers.length);
    setTimeout(updateText, 300);
})();



// calander section

const monthName = document.getElementById("month-name");
const dayName  =document.getElementById("day-name");
const dayNumber = document.getElementById("day");
const yearNumber = document.getElementById("year");

const date = new Date();
const months = date.getMonth()

monthName.innerText = date.toLocaleString("en",{
    month: "long"
} )

dayName.innerText= date.toLocaleString("en" , {
    weekday: "long"
});

dayNumber.innerText = date.getDate();

yearNumber.innerText = date.getFullYear();