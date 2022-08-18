let squares = Array.from(document.querySelectorAll('.square'));
let player = 'player-1';
let used = 0;
squares.forEach((square) => {
  square.addEventListener('click', () => {
    if (!square.classList.contains('used')) {
      square.classList.add(player, 'used');
      used++;
      if (
        [3, 6].filter((i) => { return squares[(parseInt(square.id) + i) % 9].classList.contains(player); }).length === 2 ||
        [1, 2].filter((i) => { return squares[((parseInt(square.id) + i) % 3) + Math.floor(parseInt(square.id) / 3) * 3].classList.contains(player); }).length === 2 ||
        [0, 4, 8].filter((i) => { return squares[i].classList.contains(player); }).length == 3 ||
        [2, 4, 6].filter((i) => { return squares[i].classList.contains(player); }).length == 3 ) {
        document.querySelector('body').id = player;
      } else if (used === 9) document.querySelector('body').id = 'draw';
      player = player === 'player-1' ? 'player-2' : 'player-1';
    }
  });
});
