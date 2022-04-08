class Snow {
    private _characteristics: string; // number
   
    constructor(characteristics: string) {
      this._characteristics = "Snow";
    }

    public get characteristics() {
        return this._characteristics;
    }

    public set characteristics(characteristics: string) {
        if (characteristics = "") {
            throw new Error('The name is invalid');
        }
        this._characteristics = characteristics;
    }
  }