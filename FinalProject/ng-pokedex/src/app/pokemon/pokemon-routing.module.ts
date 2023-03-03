import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListResolver } from './pokemon-list/pokemon-list.resolver';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PokemonListComponent,
  //   resolve: { pokemons: PokemonListResolver },
  // },
  // {
  //   path: ':id',
  //   component: PokemonDetailComponent,
  //   pathMatch: 'full'
  // },
  // { path: '404', component: NotFoundComponent },
  // { path: '**', redirectTo: '/404' }
  { path: 'pokedex', component: PokemonListComponent },
  { path: 'pokedex/:id', component: PokemonDetailComponent },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {};