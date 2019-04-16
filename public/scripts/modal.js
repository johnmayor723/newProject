// Get DOM Elements
const modal = document.querySelector('#my-midal');
const modalBtn = document.querySelector('#midal-btn');
const closeBtn = document.querySelector('.clise');

// Events
modalBtn.addEventListener('click', openMidal);
closeBtn.addEventListener('click', closeMidal);
window.addEventListener('click', outsideClick);

// Open
function openMidal() {
  modal.style.display = 'block';
}

// Close
function closeMidal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
