let Pokemon = class {
    constructor(name, type, evolutions) {
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get evolutions() {
        return this._evolutions;
    }

    set name (newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }

    set type (newType) {
        newType = newType.trim();
        if (newType === '') {
            throw 'The type cannot be empty';
        }
        this._type = newType;
    }

    set evolutions (newEvolution) {
        newEvolutions = newEvolutions.trim();
        if (newEvolutions === '') {
            throw 'The evolution cannot be empty';
        }
        this._evolution = newEvolution;
    }
}

attack(Pokemon){
    console.log(Pokemon.name + ' has attacked');
}

evolve(Pokemon){
    console.log(Pokemon.name + ' has evolved to' + Pokemon.evolutions);
}


let Pikachu = new Pokemon ('Pikachu', 'electric', 'Raichu');
console.log(Pikachu.name);
console.log(Pikachu.type);
console.log(Pikachu.evolution);