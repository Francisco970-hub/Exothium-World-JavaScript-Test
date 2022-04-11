class Animals {
    private _name: string; // number
    private _quantity: number; // number
    private _isLegendary:boolean; // boolean

    constructor(quantity:string,isLegendary:string,name: string) {
      this._name = "Animals";
      this._quantity = 0;
      this._isLegendary =false;
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

    public get getIsLengendary() {
        return this._isLegendary;
    }

    public set setIsLengendary(value: boolean){
        this._isLegendary= value;
    }
  }