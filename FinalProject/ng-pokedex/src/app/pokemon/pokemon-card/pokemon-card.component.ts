import { Component, Input } from '@angular/core';
import { Pokemon, pokemonBackgroundColors, pokemonTypeColors, } from '../../types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() 
  pokemon!: Pokemon;

  getColorForBackground(type: string): string {
    const colorForBackground = pokemonBackgroundColors[type];
    return colorForBackground;
  }

  getColorForType(type: string): string {
    const colorForBackground = pokemonTypeColors[type];
    return colorForBackground;
  }
}