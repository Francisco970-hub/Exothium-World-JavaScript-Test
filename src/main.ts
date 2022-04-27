const prompt = require("prompt-sync")();
const moment = require("moment");
import { Tile } from "../src/characteristics/tile";
import { Character } from "../src/character/character";
import { Animals } from "../src/characteristics/snow/resources/animals";
import { Vegetation } from "../src/characteristics/snow/resources/vegetation";

let direction;
var onMove;
var cheats: boolean = true;
function main() {
  let matrixSize: number = 3;
  let dayMesure = 5;
  let mesurePercentage: number = (dayMesure * 100) / 1440;

  var multi: Tile[][] = new Array<Array<Tile>>();
  for (var i: number = 0; i < matrixSize; i++) {
    multi[i] = [];
    for (var j: number = 0; j < matrixSize; j++) {
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

  //vegetation

  var bush = new Vegetation("Bush");
  var tree = new Vegetation("Tree");
  var looseStones = new Vegetation("Loose Stones");
  var stoneNodes = new Vegetation("Stone Nodes");
  var flintNodes = new Vegetation("Flint Nodes");

  //var vegetation : Array<Vegetation> = [bush,tree,looseStones,stoneNodes,flintNodes];

  //animals
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

  var Vsnow: Array<Vegetation> = [bush, tree, looseStones, stoneNodes];
  var Vmountain: Array<Vegetation> = [
    bush,
    looseStones,
    stoneNodes,
    flintNodes,
  ];
  var Vforest: Array<Vegetation> = [
    bush,
    tree,
    looseStones,
    stoneNodes,
    flintNodes,
  ];
  var Vplain: Array<Vegetation> = [bush, tree, looseStones, stoneNodes];
  var Vdesert: Array<Vegetation> = [stoneNodes];

  var VEG;

  VEG = {
    s: Vsnow,
    m: Vmountain,
    f: Vforest,
    p: Vplain,
    d: Vdesert,
  };

  var countDownDate = new Date().getTime();

  var name = prompt("Insert your name player : ");
  var p1 = new Character(name);

  var pos: Array<number> = [0, 0];
  console.log("Welcome to the game");
  console.log("Starting...");
  print(multi);

  while (true) {
    try {
      let jogada = makeAMove(
        pos,
        multi,
        types,
        p1,
        countDownDate,
        dayMesure,
        tudo,
        VEG
      );
      multi = jogada.multi;
      pos = jogada.pos;
    } catch (err) {
      console.log(err);
      break;
      main();
    }
  }
}

function sleep(delay: number) {
  console.log("Traveling ...");

  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function makeAMove(
  pos: Array<number>,
  multi: Array<Array<Tile>>,
  types: Array<string>,
  p1: Character,
  countDownDate: number,
  dayMesure: number,
  tudo: Object,
  vegetation: any
) {
  var rn: number = Math.random() * (types.length - 0) + 0;

  try {
    if (pos[0] == 0 && pos[1] == 0 && multi[pos[0]][pos[1]].gtype.length < 2) {
      console.log("Spawning...");
      // multi[0][0].stype = types[parseInt(rn.toString(), 10)];
      multi[0][0].stype = types[1];
      multi = generateBiome(pos, multi, tudo, vegetation);
      console.log("FEZ 0 0");
      print(multi);
      printLengaLenga(multi[pos[0]][pos[1]]);
      direction = prompt("Insert a direction: ");
      if (checkDireaction(direction)) {
        if (cheats) {
          p1.takeStamina(1);
          pos = newPos(0, 0, direction)!;
          onMove = new Date().getTime();
          LogCalcTime(onMove, pos, countDownDate, dayMesure);

          console.log(
            `${p1.gname} you have ${p1.ghp} hp , ${p1.gstamina} stamina`
          );
        } else {
          sleep(21000);
          p1.takeStamina(1);
          pos = newPos(0, 0, direction)!;
          onMove = new Date().getTime();
          LogCalcTime(onMove, pos, countDownDate, dayMesure);

          console.log(
            `${p1.gname} you have ${p1.ghp} hp , ${p1.gstamina} stamina`
          );
        }
      } else {
        console.log("0 On Make a move");
      }
    }

    // validador que nao altera se la ja tiver algum objeto - verificacao feita pelo tamanho da string
    if (multi[pos[0]][pos[1]].gtype.length > 2) {
      multi[pos[0]][pos[1]].stype = multi[pos[0]][pos[1]].gtype;
      print(multi);
      printLengaLenga(multi[pos[0]][pos[1]]);
      direction = prompt("Insert a direction: ");
      if (checkDireaction(direction)) {
        if (cheats) {
          p1.takeStamina(1);
          pos = newPos(pos[0], pos[1], direction)!;
          onMove = new Date().getTime();
          LogCalcTime(onMove, pos, countDownDate, dayMesure);

          console.log(
            `${p1.gname} you have ${p1.ghp} hp , ${p1.gstamina} stamina`
          );
        } else {
          sleep(21000);
          p1.takeStamina(1);
          pos = newPos(pos[0], pos[1], direction)!;
          onMove = new Date().getTime();
          LogCalcTime(onMove, pos, countDownDate, dayMesure);

          console.log(
            `${p1.gname} you have ${p1.ghp} hp , ${p1.gstamina} stamina`
          );
        }
      } else {
        console.log("full On Make a move");
      }
    }

    if (multi[pos[0]][pos[1]].gtype.length < 2) {
      //popula a cecula com random bioma
      // multi[pos[0]][pos[1]].stype = types[parseInt(rn.toString(), 10)];
      multi[pos[0]][pos[1]].stype = types[1];
      multi = generateBiome(pos, multi, tudo, vegetation);
      console.log("FEZ 0 1");
      print(multi);
      printLengaLenga(multi[pos[0]][pos[1]]);
      direction = prompt("Insert a direction: ");
      if (checkDireaction(direction)) {
        if (cheats) {
          p1.takeStamina(1);
          pos = newPos(pos[0], pos[1], direction)!;
          onMove = new Date().getTime();
          console.log("FUDEU AQUI");

          LogCalcTime(onMove, pos, countDownDate, dayMesure);

          console.log(
            `${p1.gname} you have ${p1.ghp} hp , ${p1.gstamina} stamina`
          );
        } else {
          sleep(21000);
          p1.takeStamina(1);
          pos = newPos(pos[0], pos[1], direction)!;
          onMove = new Date().getTime();
          LogCalcTime(onMove, pos, countDownDate, dayMesure);

          console.log(
            `${p1.gname} you have ${p1.ghp} hp , ${p1.gstamina} stamina`
          );
        }
      } else {
        console.log("empty On Make a move");
      }
    }

    //Resources: ${multi[pos[0]][pos[1]].gresources}
  } catch (err) {
    console.log(err);

    throw new Error("Invalid Direction");
    main();
  }

  return { multi, pos };
}

function newPos(x: number, y: number, direction: string) {
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
  console.log("Lenga lenga" + tile.gresources.length);

  console.log("tile A" + tile.ganimals);

  console.log("tile R" + tile.gresources);

  /*if(tile.gtype === 'water') {
    console.log(
      `Right now you r at a ${tile.gtype} biome with ${tile.ganimals.length} ${tile.ganimals[0].gname}s`
    );
  }
  else{
  console.log(
    `Right now you r at a ${tile.gtype} biome with ${tile.ganimals.length} ${
      tile.ganimals[0].gname
    }s and ${tile.gresources.length} ${
      tile.gresources[tile.gresources.length - 1].gname
    }s`
  ); //;}*/
}

function generateAnimals(
  biomaNome: string,
  bioma: Array<Animals>,
  animal: Animals,
  pos: Array<number>,
  multi: Array<Array<Tile>>
) {
  if (animal.gname === "Wolf") {
    var Wolfrange = 2;
    var WolfQuantity: number = Math.random() * (Wolfrange - 1) + 1;
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
    var rabbitQuantity: number = Math.random() * (rabbitrange - 1) + 1;
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
    var deerQuantity: number = Math.random() * (deerrange - 1) + 1;
    for (let v = 0; v < deerQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "ram") {
    var ramrange = 2;
    var ramQuantity: number = Math.random() * (ramrange - 1) + 1;
    for (let v = 0; v < ramQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "snake") {
    var snakerange = 5;

    var snakeQuantity: number = Math.random() * (snakerange - 1) + 1;
    for (let v = 0; v < snakeQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "bear") {
    var bearrange = 2;
    var bearQuantity: number = Math.random() * (bearrange - 1) + 1;
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
    var boarQuantity: number = Math.random() * (boarrange - 1) + 1;
    for (let v = 0; v < boarQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "hyena") {
    var hyenarange = 2;
    var hyenaQuantity: number = Math.random() * (hyenarange - 1) + 1;
    for (let v = 0; v < hyenaQuantity; v++) {
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "gigantworm") {
    var gigantwormrange = 2;
    var gigantwormQuantity: number = Math.random() * (gigantwormrange - 1) + 1;
    for (let v = 0; v < gigantwormQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "salmon") {
    var salmonrange = 10;
    var salmonQuantity: number = Math.random() * (salmonrange - 1) + 1;
    for (let v = 0; v < salmonQuantity; v++) {
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }
  if (animal.gname === "SP") {
    var SPrange = 30;
    var SPQuantity: number = Math.random() * (SPrange - 1) + 1;
    for (let v = 0; v < SPQuantity; v++) {
      //console.log(v);
      multi[pos[0]][pos[1]].sanimals = animal;
    }
  }

  return multi;
}

function generateVegetation(
  pos: Array<number>,
  range: number,
  type: Vegetation,
  multi: Array<Array<Tile>>,
  desert?: boolean
) {
  console.log("entrou generate");

  console.log("Range 1 : " + range);

  if (range > 0) {
    console.log("Range 2 :" + range);
    var quantity = Math.random() * (range - 1) + 1;
    console.log("Quantity:" + parseInt(quantity.toString()));

    for (let v = 0; v < parseInt(quantity.toString()); v++) {
      //console.log("V: "+ v);
      //console.log(type);

      multi[pos[0]][pos[1]].sresources = type;
    }
  }
  if (desert) {
    for (let l = 0; l <= 1; l++) {
      // console.log("l: "+ l);
      //console.log(type);

      multi[pos[0]][pos[1]].sresources = type;
    }
  } else {
    for (let l = 0; l <= 1; l++) {
      // console.log("l: "+ l);
      //console.log(type);

      multi[pos[0]][pos[1]].sresources = type;
    }
  }

  console.log(multi[pos[0]][pos[1]].gresources);

  return multi;
}

function generateBiome(
  pos: Array<number>,
  multi: Array<Array<Tile>>,
  tudo: any,
  vegetation: any
) {
  var bushRange;
  var treeRange;
  var looseRange;
  var stoneRange;
  var flintRange;
  var veg;

  if (multi[pos[0]][pos[1]].gtype === "snow") {
    veg = Math.random() * (vegetation.s.length - 1) + 1;
    //numero random que escolhe o animal
    console.log(parseInt(veg.toString()));

    var sn: number = Math.random() * (tudo.snow.length - 1) + 1;
    bushRange = 20;
    treeRange = 10;
    looseRange = 5;
    stoneRange = 2;

    multi = generateAnimals(
      "snow",
      tudo.snow,
      tudo.snow[parseInt(sn.toString())],
      pos,
      multi
    );

    if (vegetation.s[parseInt(veg.toString())].gname === "Bush") {
      console.log("snow B");
      multi = generateVegetation(
        pos,
        bushRange,
        vegetation.s[parseInt(veg.toString())],
        multi
      );
    }
    if (vegetation.s[parseInt(veg.toString())].gname === "Tree") {
      console.log("snow t");
      multi = generateVegetation(
        pos,
        treeRange,
        vegetation.s[parseInt(veg.toString())],
        multi
      );
    }
    if (vegetation.s[parseInt(veg.toString())].gname === "Loose Stones") {
      console.log("Snow LS");
      multi = generateVegetation(
        pos,
        looseRange,
        vegetation.s[parseInt(veg.toString())],
        multi
      );
    }
    if (vegetation.s[parseInt(veg.toString())].gname === "Stone Nodes") {
      console.log("Snow SN");
      multi = generateVegetation(
        pos,
        stoneRange,
        vegetation.s[parseInt(veg.toString())],
        multi
      );
    }
  }
  if (multi[pos[1]][pos[1]].gtype === "mountain") {
    //numero random que escolhe o animal
    veg = Math.random() * (vegetation.m.length - 1) + 1;
    //numero random que escolhe o animal
    console.log(parseInt(veg.toString()));

    var mn: number = Math.random() * (tudo.mountain.length - 1) + 1;
    bushRange = 15;
    looseRange = 15;
    stoneRange = 4;
    flintRange = 2;

    multi = generateAnimals(
      "mountain",
      tudo.mountain,
      tudo.mountain[parseInt(mn.toString())],
      pos,
      multi
    );

    if (vegetation.m[parseInt(veg.toString())].gname === "Bush") {
      console.log("mountain B");
      multi = generateVegetation(
        pos,
        bushRange,
        vegetation.m[parseInt(veg.toString())],
        multi
      );
    }
    if (vegetation.m[parseInt(veg.toString())].gname === "Loose Stones") {
      console.log("mountain LS");
      multi = generateVegetation(
        pos,
        looseRange,
        vegetation.m[parseInt(veg.toString())],
        multi
      );
    }
    if (vegetation.m[parseInt(veg.toString())].gname === "Stone Nodes") {
      console.log("mountain SN");
      multi = generateVegetation(
        pos,
        stoneRange,
        vegetation.m[parseInt(veg.toString())],
        multi
      );
    }
    if (vegetation.m[parseInt(veg.toString())].gname === "Flint Nodes") {
      console.log("mountain FN");
      multi = generateVegetation(
        pos,
        flintRange,
        vegetation.m[parseInt(veg.toString())],
        multi
      );
    }
  }
  if (multi[pos[1]][pos[1]].gtype === "forest") {
    //numero random que escolhe o animal
    var fn: number = Math.random() * (tudo.forest.length - 1) + 1;
    veg = Math.random() * (vegetation.f.length - 1) + 1;

    console.log(parseInt(veg.toString()));
    treeRange = 31;
    bushRange = 11;
    looseRange = 5;
    stoneRange = 3;
    flintRange = 1;

    multi = generateAnimals(
      "forest",
      tudo.forest,
      tudo.forest[parseInt(fn.toString())],
      pos,
      multi
    );

    if (vegetation.f[parseInt(veg.toString())].gname === "Bush") {
      console.log("Forest B");
      // multi = generateVegetation(pos,bushRange,vegetation.f[parseInt(veg.toString())],multi)
    }
    if (vegetation.f[parseInt(veg.toString())].gname === "Tree") {
      console.log("Forest T");
      // multi = generateVegetation(pos,treeRange,vegetation.f[parseInt(veg.toString())],multi)
    }
    if (vegetation.f[parseInt(veg.toString())].gname === "Flint Nodes") {
      console.log("Forest FN");
      // multi = generateVegetation(pos,flintRange,vegetation.f[parseInt(veg.toString())],multi)
    }
    if (vegetation.f[parseInt(veg.toString())].gname === "Loose Stones") {
      console.log("Forest LS");
      // multi = generateVegetation(pos,looseRange,vegetation.f[parseInt(veg.toString())],multi)
    }
    if (vegetation.f[parseInt(veg.toString())].gname === "Stone Nodes") {
      console.log("Forest SN");
      // multi = generateVegetation(pos,stoneRange,vegetation.f[parseInt(veg.toString())],multi)
    }
  }
  if (multi[pos[1]][pos[1]].gtype === "plain") {
    //numero random que escolhe o animal
    var pn: number = Math.random() * (tudo.plain.length - 1) + 1;
    veg = Math.random() * (vegetation.p.length - 1) + 1;

    console.log(parseInt(veg.toString()));
    treeRange = 5;
    bushRange = 3;
    looseRange = 11;
    stoneRange = 3;

    multi = generateAnimals(
      "plain",
      tudo.plain,
      tudo.plain[parseInt(pn.toString())],
      pos,
      multi
    );

    if (vegetation.p[parseInt(veg.toString())].gname === "Bush") {
      console.log("plain B");
      // multi = generateVegetation(pos,bushRange,vegetation.p[parseInt(veg.toString())],multi)
    }
    if (vegetation.p[parseInt(veg.toString())].gname === "Tree") {
      console.log("Plain T");
      // multi = generateVegetation(pos,treeRange,vegetation.p[parseInt(veg.toString())],multi)
    }
    if (vegetation.p[parseInt(veg.toString())].gname === "Loose Stones") {
      console.log("plsin LS");
      // multi = generateVegetation(pos,looseRange,vegetation.p[parseInt(veg.toString())],multi)
    }
    if (vegetation.p[parseInt(veg.toString())].gname === "Stone Nodes") {
      console.log("plain SN");
      // multi = generateVegetation(pos,stoneRange,vegetation.p[parseInt(veg.toString())],multi)
    }
  }
  if (multi[pos[1]][pos[1]].gtype === "desert") {
    //numero random que escolhe o animal
    var dn: number = Math.random() * (tudo.desert.length - 1) + 1;
    stoneRange = 4;

    if (vegetation.d[0].gname === "Stone Nodes") {
      console.log("Desert SN");

      // multi = generateVegetation(pos,stoneRange,vegetation.d[0],multi,true)
    }

    multi = generateAnimals(
      "desert",
      tudo.desert,
      tudo.desert[parseInt(dn.toString())],
      pos,
      multi
    );
  }
  if (multi[pos[0]][pos[1]].gtype === "water") {
    //numero random que escolhe o animal
    var wn: number = Math.random() * (tudo.water.length - 1) + 1;

    multi = generateAnimals(
      "water",
      tudo.water,
      tudo.water[parseInt(wn.toString())],
      pos,
      multi
    );
  }
  return multi;
}

function checkDireaction(direction: string) {
  if (
    direction === "N" ||
    direction === "S" ||
    direction === "W" ||
    direction === "E"
  ) {
    //console.log(direction);

    return true;
  }
}

function LogCalcTime(
  time: number,
  pos: Array<number>,
  firstTime: number,
  mesureNumber: number
) {
  time = moment(time).add(1, "hours");

  if (pos[0] === 0 && pos[1] === 0) {
    console.log(
      `Real Time :${moment(time)
        .diff(moment(firstTime), "minutes", true)
        .toFixed(2)} minutes`
    );
    console.log(`Game Time: ${24} hours`);
  } else {
    console.log(
      `Real Time :${moment(time)
        .diff(moment(firstTime), "minutes", true)
        .toFixed(2)} minutes`
    );
    console.log(
      `Game Time: ${(
        (moment(time).diff(moment(firstTime), "minutes", true) * 24) /
        mesureNumber
      ).toFixed(2)} hours`
    );
  }
}

main();

// npx ts-node main.ts
//printar matriz de welcome, perguntar spawn , popular no spawn e adicionar prints relacionados aos objetos populados
