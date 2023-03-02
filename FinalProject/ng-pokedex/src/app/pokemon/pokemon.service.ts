import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';
import evolutionChain, { Pokemon } from './types';

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

  getPokemonSpecie(id: string){
    const pokemonSpecie = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
    return this.http.get(pokemonSpecie);
  }

  getPokemonByEvolutionChain(evolutionChainId: string) {
    const pokemonByEvolutionChain = `https://pokeapi.co/api/v2/evolution-chain/${evolutionChainId}`;
    return this.http.get(pokemonByEvolutionChain);
  }

  getCompletePokemonData(id: string) {
    return forkJoin({
      pokemon: this.getPokemon(id),
      pokemonSpecie: this.getPokemonSpecie(id)
    })
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.getPokemonData(1008).pipe(
      mergeMap((allPokemonData: any) => {
        const allPokemons = allPokemonData.results;
        const requests: Observable<Pokemon>[] = [];
  
        allPokemons.forEach((pokemon: any) => {
          const pokemonId = pokemon.url.split('/')[6];
          const pokemonRequest = this.getPokemon(pokemonId).pipe(map((pokemonInfo: any) => {
            const newPokemon: Pokemon = {
              id: pokemonId,
              name: pokemon.name,
              url: '',
              sprite: pokemonInfo.sprites.front_default,
              image: pokemonInfo.sprites.other['official-artwork'].front_default,
              color: pokemonInfo.types[0].type.name,
              firstType: pokemonInfo.types[0].type.name,
              seccondType: pokemonInfo.types[1]?.type.name,
            };
            console.log(newPokemon);
            
            return newPokemon;
          }));
          requests.push(pokemonRequest);
        });
  
        return forkJoin(requests);
      })
    );
  }
}