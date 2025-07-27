//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  constructor(matrix) {
    this.matrix = matrix;
  }

  tick() {
    const len = this.matrix.length;
    if (0==len) return;
    const width = (this.matrix[0]).length;
    var next = Array(len).fill().map(()=>Array(width).fill(0));
    for (var i=0; i<len; i++) {
      for(var j=0; j<width; j++){
        var sum = 0;
        sum  += (i>0 && j>0) ? this.matrix[i-1][j-1] : 0;
        sum  += (i>0) ? this.matrix[i-1][j]: 0;
        sum += (i>0 && j+1<width) ? this.matrix[i-1][j+1] : 0;
        sum += (j>0) ? this.matrix[i][j-1] : 0;
        sum += (j+1<width) ? this.matrix[i][j+1] : 0;
        sum  += (i+1<len && j>0) ? this.matrix[i+1][j-1] : 0;
        sum  += (i+1<len) ? this.matrix[i+1][j]: 0;
        sum += (i+1<len && j+1<width) ? this.matrix[i+1][j+1] : 0;
        next[i][j] = (3 == sum) || (1== this.matrix[i][j] && 2 == sum) ? 1 : 0;   
      }
    }
    this.matrix = next;
  }

  state() {
    return this.matrix;
  }
}
