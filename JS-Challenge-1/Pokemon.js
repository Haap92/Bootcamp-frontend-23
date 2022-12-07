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

    set type (types) {
        let newType = [];
        newType.push(types);
        if (newType === '') {
            throw 'The type must be an array';
        }
        if (newType === []) {
            throw 'The type cannot be empty';
        }
        this._type = newType;
    }

    set evolutions (evolutions) {
        let newEvolutions = [];
        newEvolutions.push(evolutions);
        if (newEvolutions === '') {
            throw 'The evolutions must be an array';
        }
        if (newEvolutions === []) {
            throw 'The evolution cannot be empty';
        }
        this._evolutions = newEvolutions;
    }
}

function attack(Pokemon) {
    return (Pokemon.name + ' has attacked');
}

function evolve(Pokemon) {
    let firstEvolution = Pokemon.evolutions[0]
    return (Pokemon.name + ' has evolved to ' + firstEvolution);
}


let Pikachu = new Pokemon ('Pikachu', ['Electric', 'Ground'], ['Raichu']);
console.log(Pikachu.name);
console.log(Pikachu.type);
console.log(Pikachu.evolutions);
console.log(attack(Pikachu));
console.log(evolve(Pikachu));