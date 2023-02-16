import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonData(limit?: number) {
    if(limit){
      const pokemonData =  this.http.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
      return pokemonData
    }
    const pokemonData =  this.http.get('https://pokeapi.co/api/v2/pokemon');
    return pokemonData;
  }

  getPokemon(id: string) {
    const pokemon = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get(pokemon);
  }

  getPokemonByGeneration(generation: string) {
    const pokemonByGeneration = `https://pokeapi.co/api/v2/generation/${generation}`;
    return this.http.get(pokemonByGeneration);
  }
}