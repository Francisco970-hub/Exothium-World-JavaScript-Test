class Animals extends Resources {
    private _name: string; // number
   
    constructor(characteristics:string,title:string,name: string) {
        super(characteristics,title);
      this._name = "Animals";
    }

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        if (name = "") {
            throw new Error('The name is invalid');
        }
        this._name = name;
    }
  }