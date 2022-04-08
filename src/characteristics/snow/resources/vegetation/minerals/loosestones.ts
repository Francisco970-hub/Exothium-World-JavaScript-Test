class LooseStones extends Vegetation{
    private _quantity: number; // number
   
    constructor(characteristics:string,title:string,name: string, quantity: number) {
        super(characteristics,name,title);
      this._quantity = 0;
    }

    public get quantity() {
        return this._quantity;
    }

    public set quantity(quantity: number) {
        if (quantity < 0) {
            throw new Error('The quantity is invalid');
        }
        this._quantity = quantity;
    }
  }