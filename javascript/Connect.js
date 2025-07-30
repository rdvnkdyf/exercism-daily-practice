 const moves = [
  [-1, 0],[-1, +1],[0, -1],[0, +1],[+1, -1],[+1, 0],];

export class Board {
  constructor(board) {
    this.board = board.map((row) => [...row].filter((l) => l !== ' '));
    this._winner = '';
  }

  transpose() {
    return this.board[0].map((_, i) => this.board.map((row) => row[i]));
  }
  getAllNextPositions(position, letter, path) {
    const { board } = this;
    const nextPositions = moves
      .map(([x, y]) => [position[0] + x, position[1] + y])
      .filter((position) => !path.has(JSON.stringify(position)))
      .filter(([x, y]) => {
        try {
          return board[x][y] === letter;
        } catch {}
      });
    return nextPositions;
  }

  solve(letter, path, position) {
    const { board } = this;
    const nextPositions = this.getAllNextPositions(position, letter, path);
    if (nextPositions.length === 0) {
      return;
    }
    if (nextPositions.some(([x, _]) => x === board.length - 1)) {
      this._winner = letter;
      return;
    }
    nextPositions.forEach((nextPosition) => {
      const nextPath = new Set(path);
      nextPath.add(JSON.stringify(nextPosition));
      this.solve(letter, nextPath, nextPosition);
    });
  }
  winner(letter = 'O') {
    const { board } = this;
    const startIndexes = board[0]
      .map((l, i) => (l === letter ? i : null))
      .filter((v) => v != null);
    if (board.length === 1 && startIndexes.length > 0) {
      return letter;
    }
    startIndexes.forEach((i) => {
      const path = new Set();
      const position = [0, i];
      path.add(JSON.stringify(position));
      this.solve(letter, path, position);
    });
    if (this._winner || letter === 'X') {
      return this._winner;
    } else {
      this.board = this.transpose();
      return this.winner('X');
    }
  }
}