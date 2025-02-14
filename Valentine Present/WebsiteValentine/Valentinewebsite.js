// Background Video
const video = document.getElementById('backgroundVideo');

// Delay the video start and fade-in effect by 2.5 seconds
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        console.log('Video started after 2.5 seconds, starting fade-in');
        video.classList.add('fade-in'); // Add the fade-in class

        // Use a timeout to add the active class after a short delay
        setTimeout(() => {
            video.classList.add('fade-in-active'); // Trigger the fade-in effect
        }, 1000); // Adjust the delay as needed

        // Start playing the video
        video.play();
    }, 4500); // 4 seconds delay
});

// Countdown Timer
function createTargetDate() {
    const now = new Date();
    const year = now.getFullYear();
    let target = new Date(year, 4, 17); // May 17th

    if (now > target) {
        target = new Date(year + 1, 4, 17); // Next year if the date has passed
    }
    return target;
}

const target = createTargetDate();
let interval;

function Anniversary() {
    // Hide all buttons with class "btn"
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.style.display = 'none'; // Completely remove from layout
    });

    // Show the return button
    document.getElementById('returnBtn').style.display = 'inline-block';

    // Show the countdown container
    document.querySelector('.countdown-container').classList.add('visible');

    // Start the countdown timer
    if (!interval) {
        interval = setInterval(updateTimer, 1000);
        updateTimer();
    }
}

function updateTimer() {
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
        clearInterval(interval);
        document.querySelectorAll('.number').forEach(el => el.textContent = '00');
        document.getElementById('days').textContent = '0';
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Function to show the "100 Things I love about you" div
function showHundredThings() {
  // Hide all buttons with class "btn"
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
      button.style.display = 'none'; // Completely remove from layout
  });

  // Show the return button
  document.getElementById('returnBtn').style.display = 'inline-block';

  // Show the hidden div
  document.getElementById('hiddenDiv').style.display = 'block';
}

// Function to return to the original state
function returnToNormal() {
  // Immediately hide return button, hidden div, and countdown container
  document.getElementById('returnBtn').style.display = 'none';
  document.getElementById('hiddenDiv').style.display = 'none';
  document.getElementById('hiddenDiv2').style.display = 'none';
  document.querySelector('.countdown-container').classList.remove('visible');

  // Stop the countdown timer immediately
  clearInterval(interval);
  interval = null;

  // Wait 1 second before showing buttons
  setTimeout(() => {
      const buttons = document.querySelectorAll('.btn');
      buttons.forEach(button => {
          button.style.display = 'block';
          button.style.opacity = '0';
          // Force reflow to enable transition

      });
  }, 1000);
}


//my feelings
function Myfeelings() {
    // Hide all buttons with class "btn"
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.style.display = 'none'; // Completely remove from layout
    });
  
    // Show the return button
    document.getElementById('returnBtn').style.display = 'inline-block';
  
    // Show the hidden div
    document.getElementById('hiddenDiv2').style.display = 'block';
  }


