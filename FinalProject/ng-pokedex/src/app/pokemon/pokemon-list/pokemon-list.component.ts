import { Component, HostListener } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import {
  Pokemon,
  generation,
  pokemonTypeColors,
  pokemonBackgroundColors,
} from '../../types';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  allPokemons: Pokemon[] = [];
  generationPokemons: Pokemon[] = [];
  pokemons: Pokemon[] = [];
  pokemonList: Pokemon[] = [];
  search: string = '';
  scrolled: boolean = false;
  displayedPokemons: number = 18;
  pokemonLoadIncrement: number = 9;
  sortOrder: boolean = false;
  selectedGeneration: string = '0';
  generation = generation;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService
      .getPokemonData(1008)
      .subscribe((allPokemonData: any) => {
        this.allPokemons = allPokemonData.results;

        this.allPokemons.forEach((pokemon) => {
          const pokemonId = pokemon.url.split('/')[6];
          this.pokemonService
            .getPokemon(pokemonId)
            .subscribe((pokemonInfo: any) => {
              pokemon.id = pokemonId;
              pokemon.sprite = pokemonInfo.sprites.front_default;
              pokemon.image =
              pokemonInfo.sprites.other['official-artwork'].front_default;
              pokemon.color = pokemonInfo.types[0].type.name;
              pokemon.firstType = pokemonInfo.types[0].type.name;
              pokemon.seccondType = pokemonInfo.types[1].type.name || undefined;
              
            });
        });

        this.pokemonList = this.allPokemons;
        this.pokemons = this.pokemonList.slice(0, this.displayedPokemons);
      });
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    this.scrolled = window.scrollY > 0;
  };

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

  orderPokemonsByName(pokemons: Pokemon[]) {
    if (this.sortOrder) {
      return pokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return pokemons.sort((a, b) => +a.id - +b.id);
    }
  }

  toggleSortOrder() {
    this.sortOrder = !this.sortOrder;
    this.pokemons = this.orderPokemonsByName(this.pokemonList).slice(
      0,
      this.displayedPokemons
    );
  }

  getColorForType(type: string): string {
    const colorForType = pokemonTypeColors[type];
    return colorForType;
  }

  getColorForBackground(type: string): string {
    const colorForBackground = pokemonBackgroundColors[type];
    return colorForBackground;
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

  onSelectChange(generation: string) {
    this.selectedGeneration = generation;
    if (generation !== '0') {
      this.pokemonService
        .getPokemonByGeneration(generation)
        .subscribe((pokemonData: any) => {
          this.generationPokemons = pokemonData.pokemon_species.map((pokemon: any) => {
            return {
              id: pokemon.url.split('/')[6],
              name: pokemon.name,
              sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.url.split('/')[6]
              }.png`,
              image: '',
              color: '',
              firstType: '',
              seccondType: '',
              
            };
          });

          this.generationPokemons.forEach((pokemon) => {
            this.pokemonService
              .getPokemon(pokemon.id)
              .subscribe((pokemonInfo: any) => {
                pokemon.sprite = pokemonInfo.sprites.front_default;
                pokemon.image =
                  pokemonInfo.sprites.other['official-artwork'].front_default;
                pokemon.firstType = pokemonInfo.types[0].type.name;
                pokemon.color = pokemonInfo.types[0].type.name;
              });
          });

          this.pokemonList = this.generationPokemons;
          this.pokemonList.sort((a, b) => {
            return parseInt(a.id) - parseInt(b.id);
          });
          this.pokemons = this.pokemonList.slice(0, this.displayedPokemons);
          window.scrollTo(0, 0)
        });
    }else {
      this.pokemonList = this.allPokemons;
      this.pokemons = this.pokemonList.slice(0, this.displayedPokemons);
      window.scrollTo(0, 0)
    }
  }
}

