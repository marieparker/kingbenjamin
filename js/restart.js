function playAgain() {
  location.reload();

  document.getElementById('intro').classList.toggle('hide');
}

function showButton() {
  document.getElementById('again').classList.toggle('restart');
}

function start() {
  let start = document.getElementById('intro');
  start.play();
}
  