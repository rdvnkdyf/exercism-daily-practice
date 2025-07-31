export class GoCounting {
  constructor(board) {
    this.board = board.map((e) => e.split(""));
    this.boardWidth = board[0].length;
    this.boardHeight = board.length;
    this.territories = {
      territoryBlack: [],
      territoryWhite: [],
      territoryNone: [],
    };
    
  }
  getTerritory(x, y) {
    if (x < 0 || y < 0 || x > this.boardWidth - 1 || y > this.boardHeight - 1)
      return { error: "Invalid coordinate" };
    if (this.board[y][x] == "W" || this.board[y][x] == "B")
      return { owner: "NONE", territory: [] };
    this.current =  { owner: null, territory: [] };
    if (this.testPosition( "territory", x, y))
      this.searchNeighbours( x, y);
    if (this.current.owner == null && this.current.territory.length !== 0) this.current.owner = "NONE";
    // sort territory array in increasing x, then for a given x, increasing y
    this.current.territory.sort((p1, p2) =>
      p1[0] - p2[0] !== 0 ? p1[0] - p2[0] : p1[1] - p2[1]
    );
    return this.current;
  }
  searchNeighbours( x, y) {
    if (this.testPosition( "territory", x + 1, y))      this.searchNeighbours( x + 1, y);
    if (this.testPosition( "territory", x, y + 1))      this.searchNeighbours( x, y + 1);
    if (this.testPosition( "territory", x - 1, y))      this.searchNeighbours( x - 1, y);
    if (this.testPosition( "territory", x, y - 1))      this.searchNeighbours( x, y - 1);
  }
  includesPosition(territory, x, y) {
    return territory.some((e) => e[0] == x && e[1] == y);
  }
  //returns true if position is a empty positionnot yet visited, false if position is a stone or beyong the board boundaries or has already been visited.
  testPosition( territory, x, y) {
    if (!this.board[y] || !this.board[y][x]) return false;
    if (["W", "B"].includes(this.board[y][x])) {
      this.setOwner(this.board[y][x]);
      return false;
    }
    if (this.includesPosition(this.current.territory, x, y)) {
      return false;
    } else {
      this.current.territory.push([x, y]);
      return true;
    }
  }
  setOwner(color) {
      const colorMap = { W: "WHITE", B: "BLACK" };
      if (!this.current.owner) this.current.owner = colorMap[color];
      if (this.current.owner !== colorMap[color]) this.current.owner = "NONE";
    }
  territoriesIncludePosition(x, y) {
    return (
      this.includesPosition(this.territories.territoryBlack, x, y) ||
      this.includesPosition(this.territories.territoryWhite, x, y) ||
      this.includesPosition(this.territories.territoryNone, x, y)
    );
  }
  getTerritories() {
    const colorMapping = {
      WHITE: "territoryWhite",
      BLACK: "territoryBlack",
      NONE: "territoryNone",
    };
    
    for (let x = 0; x < this.boardWidth; x++) {
      for (let y = 0; y < this.boardHeight; y++) {
        if (this.board[y][x] == "W" || this.board[y][x] == "B" || this.territoriesIncludePosition(x, y) ) continue;
        
        // this is to make current tests pass. an improvement would be to push the whole territory as one element, so that we can log multiple territories per player.
        const {owner, territory} = this.getTerritory(x, y);
        const territoryColor = colorMapping[owner]
        this.territories[territoryColor].push(...territory);
      }
    }
    return this.territories;
  }
}