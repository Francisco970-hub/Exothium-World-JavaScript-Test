class Actions {
    private _name: string;
    private _castTime: number;
    private _targetAnimals:Array<Animals>;
    private _targetResources:Array<Resources>;
    private _targetItems:Array<Item>;
    private _consequence:Object;

    constructor(namw: string,castTime: number) {
        this._name = "Tile";
        this._castTime= 0;
        this._targetAnimals = new Array<Animals>();
        this._targetResources=new Array<Resources>();
        this._targetItems=new Array<Item>();
        this._consequence = new Object();
    }



    public get getName() {
        return this._name;
    }

    public set setName(name: string) {
        if (name = "") {
            throw new Error('The name is invalid');
        }
        this._name = name;
    }

    public get getCastTime() {
        return this._castTime;
    }

    public set setCastTime(castTime: number) {
        this._castTime=castTime;
    }

    public get getTargetAnimals() {
        return this._targetAnimals;
    }

    public set setTargetAnimals(value: Animals) {
        this._targetAnimals.push(value);
    }

    public get getTargetResources() {
        return this._targetResources;
    }

    public set settargetResources(value: Resources) {
        this._targetResources.push(value);
    }

    public get getTargetItems() {
        return this._targetItems;
    }

    public set settargetItems(value: Item) {
        this._targetItems.push(value);
    }

    public get getConsequence() {
        return this._consequence;
    }

    public set setConsequences(value: Object) {
        this._consequence=value;
    }

  }