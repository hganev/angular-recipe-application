export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {
    public title: string;
    public description: string;
    public instructions: Instruction[];
    public ingredients: Ingredient[];
    public cover_photo: string;

    constructor(t: string, d: string, ingr: Ingredient[], instr: Instruction[], cp: string) {
        this.title = t;
        this.description = d;
        this.instructions = instr;
        this.ingredients = ingr;
        this.cover_photo = cp;
    }
}
