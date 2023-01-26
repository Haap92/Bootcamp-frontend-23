import { Pokemon } from './types';

function getRandomId(max: number) {
    return Math.floor(Math.random() * max);
  }
  

function getPokemonsId(target: any){
    
    let pokemonTeam: number[] = []
    let index: number = 0

    for (index; index <= 5; index++) {
        const newPokemonId: number = getRandomId(1009)
        pokemonTeam.push(newPokemonId)         
    }
    console.log(`This trainer have ${pokemonTeam.length} pokemon in his pockets!`); 
    target.prototype.pokemonTeam = pokemonTeam
}

class PokemonInTeam implements Pokemon{
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

@getPokemonsId
class Trainer {
    name: string;
    pokemonTeam!: number[];
    constructor(name: string, pokemonTeam?: number[]) {
      this.name = name;
      if(pokemonTeam) this.pokemonTeam = pokemonTeam;
    }
    
    async loadJson(url: string) {
        const urlResponse = await fetch(url);
        if (urlResponse.status == 200) return await urlResponse.json();
      }

    async getPokemon(id: number) {
        const gettedPokemon = await this.loadJson(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemon = new PokemonInTeam (gettedPokemon.id, gettedPokemon.name)
        return pokemon
    }

    andPokemonTeam() {
        const pokemonTeam = this.pokemonTeam.map((id) => this.getPokemon(id));
        console.log(`Trainer: ${trainer.name}`);
        Promise.all(pokemonTeam).then((team) => console.log('Pokemon Team:', team));
    }
}

const trainer = new Trainer("Haap");
trainer.andPokemonTeam();