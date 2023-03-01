import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
