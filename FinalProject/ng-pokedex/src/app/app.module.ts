import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonService } from './pokemon.service';
import { SearchBarComponent } from './core/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
import { SelectComponent } from './core/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    SearchBarComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
