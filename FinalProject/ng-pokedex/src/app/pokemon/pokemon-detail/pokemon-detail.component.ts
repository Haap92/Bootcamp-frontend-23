import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import {
  Pokemon,
  pokemonBackgroundColors,
  PokemonDetail,
  pokemonTypeColors,
} from '../types';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {
  pokemon!: Pokemon;
  pokemonDetail!: PokemonDetail;
  currentTab: string = 'description';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.pokemonService.getPokemon(id).subscribe((data: any) => {
        this.pokemon = {
          id: data.id,
          name: data.name,
          url: '',
          sprite: data.sprites.front_default,
          image: data.sprites.other['official-artwork'].front_default,
          color: data.types[0].type.name,
          firstType: data.types[0].type.name,
          seccondType: data.types[1]?.type.name,
        };
        this.pokemonDetail = {
          id: data.id,
          experience: data.base_experience,
          height: data.height,
          weight: data.weight,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          spAttack: data.stats[3].base_stat,
          spDefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
          firstAbility: data.abilities[0].ability.name,
          seccondAbility: data.abilities[1]?.ability.name || null,
          hiddenAbility: data.abilities[2]?.ability.name || null,
        };
        console.log(this.pokemon);
        console.log(this.pokemonDetail);
      });
    }
  }

  getColorForType(type: string): string {
    const colorForType = pokemonTypeColors[type];
    return colorForType;
  }

  getColorForBackground(type: string): string {
    const colorForBackground = pokemonBackgroundColors[type];
    return colorForBackground;
  }

  goBack(): void {
    this.router.navigate(['pokedex']);
  }

  setCurrentTab(tab: string) {
  this.currentTab = tab;
  }

  async navigateToPreviousPokemon() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const currentId = idParam ? +idParam : null;
    const newId = currentId ? currentId - 1 : null;
    if (newId && newId >= 1) {
      await this.router.navigate(['pokedex', newId]);
      window.location.reload();
    }
  }

  async navigateToNextPokemon() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const currentId = idParam ? +idParam : null;
    const newId = currentId ? currentId + 1 : null;
    if (newId) {
      await this.router.navigate(['pokedex', newId]);
      window.location.reload();
    }
  }
}
