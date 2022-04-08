class Resources extends Snow{
    private _title: string; // number
   
    constructor(characteristics:string,title: string) {
        super(characteristics);
        this._title = "Resources";
    }

    public get title() {
        return this._title;
    }

    public set title(title: string) {
        if (title = "") {
            throw new Error('The name is invalid');
        }
        this._title = title;
    }
  }