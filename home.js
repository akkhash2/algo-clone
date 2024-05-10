let playing = false;
let timeout;

function playGif() {
  const img = document.getElementById('image');
  if (!playing) {
    img.src = 'img/sorting.gif'; 
    playing = true;
  }
}

function stopGif() {
  const img = document.getElementById('image');
  if (playing) {
    img.src = 'img/sorting.jpg'; 
    playing = false;
  }
}