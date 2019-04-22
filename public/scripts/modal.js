// Get DOM Elements
const midal = document.querySelector('#my-midal');
const midalBtn1 = document.querySelector('#midal-btn1');
const closeBtn = document.querySelector('.clise');

// Events
midalBtn1.addEventListener('click', openMidal);
closeBtn.addEventListener('click', closeMidal);
window.addEventListener('click', outsideClick);

// Open
function openMidal() {
  midal.style.display = 'block';
}

// Close
function closeMidal() {
  midal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == midal) {
    midal.style.display = 'none';
  }
}
