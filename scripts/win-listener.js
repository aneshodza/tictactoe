import { winHandler } from './win-handler.js';

let body = document.getElementById('playing');
body.addEventListener('click', (e) => {
  if (body.id === 'player-1') winHandler('player-1');
  else if (body.id === 'player-2') winHandler('player-2');
  else if (body.id === 'draw') winHandler('draw');
});
