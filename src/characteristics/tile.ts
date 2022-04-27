import {Animals} from "./snow/resources/animals";
import {Resources} from "./snow/resources/resources";
import {Vegetation} from "./snow/resources/vegetation";
export class Tile {
    private _type: string;
    private _animalsList: Array<Animals>;
    private _resourcesList: Array<Vegetation>;

    constructor(type: string) {
        this._type = type;
        this._animalsList= new Array<Animals>();
        this._resourcesList = new Array<Vegetation>();
    }

    public get gtype() {
        return this._type;
    }

    public gNanimals(name:string) {
        var n =0
        this._animalsList.forEach((a) => {
            if(a.gname == name){
                //console.log(a.gname);
                n++;
            }
        })
        return n;
    }

    public set stype(type: string) {
        if (type === "") {
            throw new Error('The type is invalid');
        }
        //console.log(type);
        this._type = type;
    }

    public get ganimals() {
        return this._animalsList;
    }

    public set sanimals(value: Animals) {
        this._animalsList.push(value);
    }

    public get gresources() {
        return this._resourcesList;
    }

    public set sresources(value: Vegetation) {
        this._resourcesList.push(value);
    }

  }

