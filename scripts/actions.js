function restart() {
  Array.from(document.querySelectorAll('.square')).forEach((square) => {
    square.classList.remove('player-1', 'player-2', 'used');
  });
  document.querySelector('body').id = 'playing';
  window.used = 0;
  window.player = 'player-1';
}
