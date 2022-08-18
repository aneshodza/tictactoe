let body = document.getElementById('playing');
let modal = document.getElementsByClassName('modal-wrapper')[0];
body.addEventListener('click', (e) => {
  if (body.id === 'player-1') console.log('player-1');
  else if (body.id === 'player-2') console.log('player-2');
  else if (body.id === 'draw') console.log('draw');
});
