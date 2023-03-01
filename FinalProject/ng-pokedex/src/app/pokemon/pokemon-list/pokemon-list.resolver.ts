import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../types';

@Injectable({ providedIn: 'root' })
export class PokemonListResolver implements Resolve<Pokemon[]> {
  constructor(private pokemonService: PokemonService) {}

  resolve(): Observable<Pokemon[]> {
    console.log('resolving...');
    
    return this.pokemonService.getPokemons()
  }
}

