export class Vegetation {
    private _name: string; // number
   
    constructor(name: string) {
      this._name = name;
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
  }