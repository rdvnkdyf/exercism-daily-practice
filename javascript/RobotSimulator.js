export class InvalidInputError extends Error {
    constructor(message) {
        super();
        this.message = message || 'Invalid Input';
    }
}
export class Robot {
   bearing = "north";
    place({ x, y, direction }) {
      if (["north", "east", "south", "west"].includes(direction)) {
        this.bearing = direction;
        this.coordinates = [x, y];
      } else {
        throw new InvalidInputError();
      }
    }
  
    turnRight() {
      switch (this.bearing) {
        case "north":
          this.bearing = "east";
          break;
        case "east":
          this.bearing = "south";
          break;
        case "south":
          this.bearing = "west";
          break;
        default:
          this.bearing = "north";
      }
    }
    turnLeft() {
      switch (this.bearing) {
        case "north":
          this.bearing = "west";
          break;
        case "west":
          this.bearing = "south";
          break;
        case "south":
          this.bearing = "east";
          break;
        default:
          this.bearing = "north";
      }
    }
    advance() {
      switch (this.bearing) {
        case "north":
          this.coordinates = [this.coordinates[0], this.coordinates[1] + 1];
          break;
        case "east":
          this.coordinates = [this.coordinates[0] + 1, this.coordinates[1]];
          break;
        case "south":
          this.coordinates = [this.coordinates[0], this.coordinates[1] - 1];
          break;
        default:
          this.coordinates = [this.coordinates[0] - 1, this.coordinates[1]];
      }
    }
    evaluate(commandList) {
      commandList.split("").forEach((commandCode) => {
        switch (commandCode) {
          case "L":
            this.turnLeft();
            break;
          case "R":
            this.turnRight();
            break;
          default:
            this.advance();
        }
      });
    }
}
