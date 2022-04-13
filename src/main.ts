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

  let types: Array<string> = [
    "snow",
    "mountain",
    "forest",
    "plain",
    "desert",
    "water",
  ];

  var wolf = new Animals(false, "Wolf");
  var rabbit = new Animals(false, "rabbit");
  var deer = new Animals(false, "deer");
  var ram = new Animals(false, "ram");
  var snake = new Animals(false, "snake");
  var bear = new Animals(false, "bear");
  var boar = new Animals(false, "boar");
  var hyena = new Animals(false, "hyena");
  var gigantworm = new Animals(false, "gigantworm");
  var salmon = new Animals(false, "salmon");
  var SP = new Animals(false, "SP");

  var Asnow: Array<Animals> = [wolf, rabbit, deer];
  var Amountain: Array<Animals> = [ram, rabbit, snake];
  var Aforest: Array<Animals> = [bear, deer, boar];
  var Aplain: Array<Animals> = [hyena, boar, rabbit];
  var Adesert: Array<Animals> = [gigantworm, snake];
  var Awater: Array<Animals> = [salmon, SP];

  var tudo;
  tudo = {
    snow: Asnow,
    mountain: Amountain,
    forest: Aforest,
    plain: Aplain,
    desert: Adesert,
    water: Awater,
  };
  //console.log(tudo);
  //console.log(tudo.snow);

  var pos: Array<number> = [0, 0];
  console.log("Welcome to the game");
  console.log("Starting...");
  print(multi);
  //let direction = prompt("Insert a direction: ");
  //console.log(direction.toString());
  let direction;
  while (true) {
    try {
      var rn: number = Math.random() * (types.length - 0) + 0;
      //console.log(rn);

      if (pos[0] == 0 && pos[1] == 0 && multi[pos[0]][pos[1]].gtype.length < 2) {
        console.log("Spawning...");
        multi[0][0].stype = types[parseInt(rn.toString(), 10)];
        multi = generateBiome(pos, multi, tudo);
        print(multi);
        printLengaLenga(multi[pos[0]][pos[1]]);
        direction = prompt("Insert a direction: ");
        if(checkDireaction(direction)) {
        pos = izac(0, 0, direction)!;}
        else{
          break
        }
        console.log(pos);
        
      }
      // validador que nao altera se la ja tiver algum objeto - verificacao feita pelo tamanho da string
      if (multi[pos[0]][pos[1]].gtype.length > 2) {
        multi[pos[0]][pos[1]].stype = multi[pos[0]][pos[1]].gtype;
        print(multi);
        printLengaLenga(multi[pos[0]][pos[1]]);
        direction = prompt("Insert a direction: ");
        if(checkDireaction(direction)) {
          pos = izac(pos[0], pos[1], direction)!;}
          else{
            break
          }
      }

      if (multi[pos[0]][pos[1]].gtype.length < 2) {
        //popula a cecula com random bioma
        multi[pos[0]][pos[1]].stype = types[parseInt(rn.toString(), 10)];
        multi = generateBiome(pos, multi, tudo);
        print(multi);
        printLengaLenga(multi[pos[0]][pos[1]]);
        direction = prompt("Insert a direction: ");
        if(checkDireaction(direction)) {
          pos = izac(pos[0], pos[1], direction)!;}
          else{
            break
          }
      }

      //Resources: ${multi[pos[0]][pos[1]].gresources}
    } catch (err) {
      console.log(err);

      console.log("Invalid Position");
      break;
      main();
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

function printLengaLenga(tile: Tile) {
  console.log(
    `Right now you r at a ${tile.gtype} biome with ${tile.ganimals.length} ${tile.ganimals[0].gname}s `
  );
}

function generateObjects(
  biomaNome: string,
  bioma: Array<Animals>,
  animal: Animals,
  pos: Array<number>,
  multi: Array<Array<Tile>>
) {
  if (animal.gname === "Wolf") {
    var Wolfrange = 2;
    var WolfQuantity: number = Math.random() * (Wolfrange - 0) + 0;
    for (let v = 0; v < WolfQuantity; v++) {
      //console.log(v);

      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "rabbit") {
    var rabbitrange = 0;
    if (biomaNome === "plain") {
      rabbitrange = 5;
    }
    if (biomaNome === "mountain" || biomaNome === "snow") {
      rabbitrange = 10;
    }
    var rabbitQuantity: number = Math.random() * (rabbitrange - 0) + 0;
    for (let v = 0; v < rabbitQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "deer") {
    var deerrange = 0;
    if (biomaNome === "snow") {
      deerrange = 5;
    }
    if (biomaNome === "forest") {
      deerrange = 10;
    }
    var deerQuantity: number = Math.random() * (deerrange - 0) + 0;
    for (let v = 0; v < deerQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "ram") {
    var ramrange = 2;
    var ramQuantity: number = Math.random() * (ramrange - 0) + 0;
    for (let v = 0; v < ramQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "snake") {
    var snakerange = 5;

    var snakeQuantity: number = Math.random() * (snakerange - 0) + 0;
    for (let v = 0; v < snakeQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "bear") {
    var bearrange = 2;
    var bearQuantity: number = Math.random() * (bearrange - 0) + 0;
    for (let v = 0; v < bearQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "boar") {
    var boarrange = 0;
    if (biomaNome === "forest") {
      boarrange = 5;
    }
    if (biomaNome === "plain") {
      boarrange = 10;
    }
    var boarQuantity: number = Math.random() * (boarrange - 0) + 0;
    for (let v = 0; v < boarQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "hyena") {
    var hyenarange = 2;
    var hyenaQuantity: number = Math.random() * (hyenarange - 0) + 0;
    for (let v = 0; v < hyenaQuantity; v++) {
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "gigantworm") {
    var gigantwormrange = 2;
    var gigantwormQuantity: number = Math.random() * (gigantwormrange - 0) + 0;
    for (let v = 0; v < gigantwormQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "salmon") {
    var salmonrange = 10;
    var salmonQuantity: number = Math.random() * (salmonrange - 0) + 0;
    for (let v = 0; v < salmonQuantity; v++) {
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "SP") {
    var SPrange = 30;
    var SPQuantity: number = Math.random() * (SPrange - 0) + 0;
    for (let v = 0; v < SPQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }

  return multi;
}

function generateBiome(
  pos: Array<number>,
  multi: Array<Array<Tile>>,
  tudo: any
) {
  if (multi[pos[0]][pos[1]].gtype === "snow") {
    //numero random que escolhe o animal
    var sn: number = Math.random() * (tudo.snow.length - 0) + 0;

    //console.log(tudo.snow[parseInt(sn.toString())]);

    multi = generateObjects(
      "snow",
      tudo.snow,
      tudo.snow[parseInt(sn.toString())],
      pos,
      multi
    );
  }
  if (multi[pos[0]][pos[1]].gtype === "mountain") {
    //numero random que escolhe o animal
    var mn: number = Math.random() * (tudo.mountain.length - 0) + 0;

    //console.log(tudo.mountain[parseInt(mn.toString())]);

    multi = generateObjects(
      "mountain",
      tudo.mountain,
      tudo.mountain[parseInt(mn.toString())],
      pos,
      multi
    );
  }
  if (multi[pos[0]][pos[1]].gtype === "forest") {
    //numero random que escolhe o animal
    var fn: number = Math.random() * (tudo.forest.length - 0) + 0;

    //console.log(tudo.forest[parseInt(fn.toString())]);

    multi = generateObjects(
      "forest",
      tudo.forest,
      tudo.forest[parseInt(fn.toString())],
      pos,
      multi
    );
  }
  if (multi[pos[0]][pos[1]].gtype === "plain") {
    //numero random que escolhe o animal
    var pn: number = Math.random() * (tudo.plain.length - 0) + 0;

    //console.log(tudo.plain[parseInt(pn.toString())]);

    multi = generateObjects(
      "plain",
      tudo.plain,
      tudo.plain[parseInt(pn.toString())],
      pos,
      multi
    );
  }
  if (multi[pos[0]][pos[1]].gtype === "desert") {
    //numero random que escolhe o animal
    var dn: number = Math.random() * (tudo.desert.length - 0) + 0;

    //console.log(tudo.desert[parseInt(dn.toString())]);

    multi = generateObjects(
      "desert",
      tudo.desert,
      tudo.desert[parseInt(dn.toString())],
      pos,
      multi
    );
  }
  if (multi[pos[0]][pos[1]].gtype === "water") {
    //numero random que escolhe o animal
    var wn: number = Math.random() * (tudo.water.length - 0) + 0;

    //console.log(tudo.water[parseInt(wn.toString())]);

    multi = generateObjects(
      "water",
      tudo.water,
      tudo.water[parseInt(wn.toString())],
      pos,
      multi
    );
  }
  return multi;
}

function checkDireaction(direction: string){
  if(direction === "N" ||
  direction === "S" ||
  direction === "W" ||
  direction === "E"){
    return true;
  }
}
main();

// npx ts-node main.ts
//printar matriz de welcome, perguntar spawn , popular no spawn e adicionar prints relacionados aos objetos populados
