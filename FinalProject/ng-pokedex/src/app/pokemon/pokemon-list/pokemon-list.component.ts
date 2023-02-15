import { Component, HostListener } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { Pokemon } from '../../types';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  allPokemons: Pokemon[] = [];
  pokemons: Pokemon[] = [];
  pokemonList: Pokemon[] = [];
  search = '';
  scrolled = false;
  displayedPokemons = 35;
  pokemonLoadIncrement = 5;
 
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemonData(1008).subscribe((allPokemonData: any) => {
      this.allPokemons = allPokemonData.results;

      this.allPokemons.forEach((pokemon) => {
        const pokemonId = pokemon.url.split('/')[6];
        this.pokemonService.getPokemon(pokemonId).subscribe((pokemonInfo: any) => {
          pokemon.sprite = pokemonInfo.sprites.front_default;
          pokemon.id  = pokemonId
        });
      });

      this.pokemonList = this.allPokemons;
      this.pokemons = this.pokemonList.slice(0, this.displayedPokemons);
    });
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    this.scrolled = window.scrollY > 0;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (scrollPosition + windowSize >= bodyHeight) {
      this.displayedPokemons += this.pokemonLoadIncrement;
      this.pokemons = this.pokemonList.slice(0, this.displayedPokemons);
    }
  }

  onSearchChange(search: string) {
    this.search = search;
    this.displayedPokemons = 40;
    this.pokemons = search
      ? this.pokemonList.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
      : this.pokemonList.slice(0, this.displayedPokemons);
  }  
}