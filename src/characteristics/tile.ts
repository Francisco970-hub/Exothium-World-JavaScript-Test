import {Animals} from "./snow/resources/animals";
import {Resources} from "./snow/resources/resources";
export class Tile {
    private _type: string;
    private _animalsList: Array<Animals>;
    private _resourcesList: Array<Resources>;

    constructor(type: string) {
        this._type = type;
        this._animalsList= new Array<Animals>();
        this._resourcesList = new Array<Resources>();
    }

    public  getType() {
        return this._type;
    }

    public set setType(type: string) {
        if (type = "") {
            throw new Error('The type is invalid');
        }
        this._type = type;
    }

    public get getAnimals() {
        return this._animalsList;
    }

    public set setAnimals(value: Animals) {
        this._animalsList.push(value);
    }

    public get getResources() {
        return this._resourcesList;
    }

    public set setResources(value: Resources) {
        this._resourcesList.push(value);
    }

  }

