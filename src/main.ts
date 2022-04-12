const prompt = require("prompt-sync")();
import { Tile } from "../src/characteristics/tile";
import { Animals } from "../src/characteristics/snow/resources/animals";
function main() {
  var multi: Tile[][] = new Array<Array<Tile>>();
  for (var i: number = 0; i < 3; i++) {
    multi[i] = [];
    for (var j: number = 0; j < 3; j++) {
      multi[i][j] = new Tile(`${0}`);
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
      multi[pos[0]][pos[1]].stype = "X";
      var animals= new Animals(false,"Burro");
      var animals2= new Animals(false,"Burro");
      var animals3= new Animals(false,"Burro");
      var animals4= new Animals(false,"Burra");
      multi[pos[0]][pos[1]].sanimals = animals;
      multi[pos[0]][pos[1]].sanimals = animals2;
      multi[pos[0]][pos[1]].sanimals = animals3;
      multi[pos[0]][pos[1]].sanimals = animals4;
      console.log("N burros: " + multi[pos[0]][pos[1]].gNanimals("Burro"));
      
      console.log(`Type: ${multi[pos[0]][pos[1]].gtype} Animals: ${multi[pos[0]][pos[1]].ganimals} Resources: ${multi[pos[0]][pos[1]].gresources}`);
      print(multi);
      direction = prompt("Insert a direction: ");
      multi[pos[0]][pos[1]].stype = "0";
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

function print(map: Array<Array<Tile>>) {
  map.forEach((r) => {
    var array = [];
    for (let index = 0; index < r.length; index++) {
      array.push(r[index].gtype);
    }
    console.log(array);   
  });
}

main();


function Gettype() {
  throw new Error("Function not implemented.");
}
// npx ts-node main.ts