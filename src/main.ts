const prompt = require("prompt-sync")();
import { Tile } from "../src/characteristics/tile";
function main() {
  var multi: string[][] = new Array<Array<string>>();
  for (var i: number = 0; i < 3; i++) {
    multi[i] = [];
    for (var j: number = 0; j < 3; j++) {
      multi[i][j] = new Tile(`${0}`).getType();
    }
  }
  let direction = "N";
  var pos: Array<number> = [1, 0];
  while (
    direction == "N" ||
    direction == "S" ||
    direction == "W" ||
    direction == "E"
  ) {
    try {
      multi[pos[0]][pos[1]] = "X";
      print(multi);
      direction = prompt("Insert a direction: ");
      multi[pos[0]][pos[1]] = "0";
      pos = izac(pos[0], pos[1], direction)!;
    } catch (err) {
      console.log("Invalid Position");
      main();
      break;
    }
  }
}

function izac(x: number, y: number, direction: string) {
  if (direction == "N") {
    if (x > 0) {
      var nx = x - 1;
      return [nx, y];
    }
  }
  if (direction == "S") {
    if (x < 2) {
      var nx = x + 1;
      return [nx, y];
    }
  }
  if (direction == "W") {
    if (y > 0) {
      var ny = y - 1;
      return [x, ny];
    }
  }
  if (direction == "E") {
    if (y < 2) {
      var ny = y + 1;
      return [x, ny];
    }
  }
}

function print(map: Array<Array<string>>) {
  map.forEach((r) => {
    console.log(r);
  });
}

main();
