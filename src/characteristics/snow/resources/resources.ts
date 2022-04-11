export class Resources {
    private _name: string;
    private _quantity: number;

    constructor(quantity: number,name: string) {
        this._name = "Resources";
        this._quantity=0;
    }

    public get getName() {
        return this._name;
    }

    public set getName(name: string) {
        if (name = "") {
            throw new Error('The name is invalid');
        }
        this._name = name;
    }

    public get getQuantity() {
        return this._quantity;
    }

    public set setQuantity(value: number){
        if (value < 0) {
            throw new Error('The quantity is invalid');
        }
        this._quantity= value;
    }

  }