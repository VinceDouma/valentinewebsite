const texts = ["Was that a missclick?",
    "You're so silly",
    "Dont worry I'll make the button bigger",
    "What?",
    "You're actually trying to say no? ",
    "Are you sure????",
    "Baby:(",
    "What if I say Please",
    "With a strawberry on top?",
    "What if I make the button orange?",
    "Its orange now your favorite color no?",
    "Do you not like orange?",
    "What if I promise to make you a million waffles in the future?",
    ":(((",
    "Do you actually want to say no or are you just joking???",
    "PLEASE",
    "I'LL DO ANYTHING BABY",
    "MWAH",
    "NOT EVEN A KISS??",
    "BABY I LOVE YOU PLEASE DONT SAY NO",
    ":'(",
    "I promise to be the best husband baby please say yes..",
    "PLEASE BABY:((((( (23)"
]; 

let index = 0;
let yesButton = document.getElementById("Yes");
let noButton = document.getElementById("No");

let scaleFactor = 1;
let noButtonOffset = 0; // Initial position offset

// Ensure "No" button has position relative in CSS
noButton.style.position = "relative";

noButton.addEventListener("click", function () {
    if (index === 23) { 
        noButton.innerHTML = "🔒"; 
        window.alert("You can't click this button, it is disabled.");
        return; 
    }

    if (index < texts.length) { 
        this.textContent = texts[index];

        // Change "Yes" button color when the specific text appears
        if (texts[index] === "Its orange now your favorite color no?") {
            yesButton.style.backgroundColor = "orange";
        }

        // Increase "Yes" button size after index > 2
        if (index > 2) { 
            scaleFactor += 0.1; 
            yesButton.style.transform = `scale(${scaleFactor})`;

            // Move "No" button slightly to the right
            noButtonOffset += 10 ; // Move 20px per click
            noButton.style.left = noButtonOffset + "px";
        }

        index++; 
    }
});

function Pagesecond() {
    
}
