class Recipe {
    private _recipe: string;

    constructor(recipe: string) {
        this._recipe = "Recipe";
    }

    public get getRecipe() {
        return this._recipe;
    }

    public set getRecipe(recipe: string) {
        if (recipe = "") {
            throw new Error('The recipe is invalid');
        }
        this._recipe = recipe;
    }

  }