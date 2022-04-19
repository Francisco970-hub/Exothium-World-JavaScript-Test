export class Character {
    private _name: string;
    private _hp: number;
    private _stamina: number;
    private _hunger: number;
    private _inventorySpace: number;

    constructor(name: string) {
        this._name=name;
        this._hp=100;
        this._stamina=100;
        this._hunger=100;
        this._inventorySpace=0;
    }

    public get gname() {
        return this._name;
    }


    public set sname(name:string) {
        this._name=name;
    }


    public get ghp() {
        return this._hp;
    }


    public set shp(hp:number) {
        if(hp>0 && hp<100){
        this._hp=hp;}
    }

    public get gstamina() {
        return this._stamina;
    }


    public set sstamina(stamina:number) {
        if(stamina>0 && stamina<100){
            this._stamina=stamina;
        }
    }

    public get ghunger() {
        return this._hunger;
    }


    public set shunger(hunger:number) {
        if(hunger>0 && hunger<100){
            this._hunger=hunger;
        }
    }

    public get ginventorySpace() {
        return this._inventorySpace;
    }


    public set sinventorySpace(inventorySpace:number) {
        this._inventorySpace=inventorySpace;
    }

    public  takeHp(damage:number) {
        let newHp:number =this._hp-damage
        this.shp=newHp;
    }

    public  takeStamina(damage:number) {
        let newStamina:number =this._stamina-damage
        this.sstamina=newStamina;
    }

    public  takehunger(damage:number) {
        let newHunger:number =this._hunger-damage
        this.shunger=newHunger;
    }

  }

