class Item {
    private _name: string;
    private _castTime: number;
    private _recipes:Array<Recipe>;

    constructor(namw: string,castTime: number) {
        this._name = "Tile";
        this._castTime= 0;
        this._recipes = new Array<Recipe>();
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

    public get getRecipes() {
        return this._recipes;
    }

    public set setRecipes(value: Recipe) {
        this._recipes.push(value);
    }

  }