import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../core/header/header.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { PokemonNotFoundComponent } from '../core/pokemon-not-found/pokemon-not-found.component';
import { SearchBarComponent } from '../core/search-bar/search-bar.component';
import { SelectComponent } from '../core/select/select.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonService } from './pokemon.service';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    SearchBarComponent,
    SelectComponent,
    HeaderComponent,
    PokemonNotFoundComponent,
    NotFoundComponent,
    PokemonDetailComponent,
  ],
  imports: [PokemonRoutingModule, BrowserModule, HttpClientModule, FormsModule],
  providers: [PokemonService],
})
export class PokemonModule {}
