// Create the game board
const board = document.getElementById('board');
const squares = [];

for (let i = 0; i < 5; i++) {
  squares[i] = [];
  for (let j = 0; j < 5; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
    squares[i][j] = square;
    board.appendChild(square);

    // Add click event listener to toggle square and adjacent squares
    square.addEventListener('click', () => {
      toggleSquare(i, j);
      toggleSquare(i + 1, j);
      toggleSquare(i - 1, j);
      toggleSquare(i, j + 1);
      toggleSquare(i, j - 1);

      // Check if all squares are off
      if (isSolved()) {
        window.alert('You win!');
      }
    });
  }
}

// Function to toggle a square and update its class
function toggleSquare(x, y) {
  if (x >= 0 && x < 5 && y >= 0 && y < 5) {
    squares[x][y].classList.toggle('is-off');
  }
}

// Function to check if all squares are off
function isSolved() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (squares[i][j].classList.contains('is-off')) {
        return false;
      }
    }
  }
  return true;
}

// Randomly set the initial state of the board
function randomizeBoard() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (Math.random() < 0.5) {
        toggleSquare(i, j);
      }
    }
  }
}

// Call randomizeBoard to start a new game
randomizeBoard();
