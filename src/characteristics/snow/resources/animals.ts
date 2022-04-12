export class Animals {
    private _name: string; // number
    private _isLegendary:boolean; // boolean

    constructor(isLegendary:boolean,name: string) {
      this._name = name;
      this._isLegendary =isLegendary;
    }

    public get gname() {
        return this._name;
    }

    public set sname(name: string) {
        if (name === "") {
            throw new Error('The name is invalid');
        }
        this._name = name;
    }

    public get gIsLengendary() {
        return this._isLegendary;
    }

    public set sIsLengendary(value: boolean){
        this._isLegendary= value;
    }
  }