// Create variables to store the home and guest scores
let homeScore = 0;
let guestScore = 0;

// Create variables to store the home-score and guest-score elements
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

// Set textContent for home-score and guest-score to the homeScore and guestScore
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

// Set IDs for each button and create variables for each element
// Home button elements
const homePlus1Btn = document.getElementById("homePlus1");
const homePlus2Btn = document.getElementById("homePlus2");
const homePlus3Btn = document.getElementById("homePlus3");

// Guest button elements
const guestPlus1Btn = document.getElementById("guestPlus1");
const guestPlus2Btn = document.getElementById("guestPlus2");
const guestPlus3Btn = document.getElementById("guestPlus3");

// Functions to increase score and update textContent of homeScoreEl
function homePlus1() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function homePlus2() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function homePlus3() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

// Functions to increase score and update textContent of guestScoreEl
function guestPlus1() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function guestPlus2() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function guestPlus3() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

// Event listeners for home buttons
homePlus1Btn.addEventListener("click", homePlus1);
homePlus2Btn.addEventListener("click", homePlus2);
homePlus3Btn.addEventListener("click", homePlus3);

// Event listeners for guest buttons
guestPlus1Btn.addEventListener("click", guestPlus1);
guestPlus2Btn.addEventListener("click", guestPlus2);
guestPlus3Btn.addEventListener("click", guestPlus3);
