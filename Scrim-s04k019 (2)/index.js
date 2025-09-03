// Home team 
let scoreHome = document.getElementById("home-score");
let home = 0;
let scoreGuest = document.getElementById("guest-score");
let guest = 0;

function homeadd1(){
    home += 1;
    scoreHome.innerText = home;
    checkHighlight()
}
function homeadd2(){
    home += 2
    scoreHome.innerText = home;
    checkHighlight() 
}

function homeadd3(){
    home += 3
    scoreHome.innerText = home;
    checkHighlight() 
}

// Guest Team

function guestadd1(){
    guest += 1;
    scoreGuest.innerText = guest;
    checkHighlight() 
}
function guestadd2(){
    guest += 2;
    scoreGuest.innerText = guest;
    checkHighlight() 
}

function guestadd3(){
    guest += 3;
    scoreGuest.innerText = guest;
    checkHighlight() 
}

// NEW GAME 
function newGame() {
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
    guest = 0
    home = 0
    checkHighlight() 
    
}

// Highlight
function checkHighlight() {
  // Get the div elements for home and guest highlights
  const homeHighlight = document.getElementById("home-highlight");
  const guestHighlight = document.getElementById("guest-highlight");

  // Check if the elements exist to prevent errors
  if (!homeHighlight || !guestHighlight) {
    console.error("Error: Could not find highlight divs.");
    return;
  }
  // Clear any existing highlights before applying a new one
  homeHighlight.style.backgroundColor = "";
  guestHighlight.style.backgroundColor = "";
  // The if/else if/else statement to compare scores
  if (home > guest) {
    homeHighlight.style.backgroundColor = "yellow";
  } else if (guest > home) {
    guestHighlight.style.backgroundColor = "yellow";
  }
}