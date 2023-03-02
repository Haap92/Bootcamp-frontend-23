import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListResolver } from './pokemon-list/pokemon-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    resolve: { pokemons: PokemonListResolver },
  },
  {
    path: ':id',
    component: PokemonDetailComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {};