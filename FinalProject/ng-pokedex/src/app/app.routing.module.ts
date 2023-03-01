import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { path: 'pokedex', component: PokemonListComponent },
  { path: 'pokedex/:id', component: PokemonDetailComponent },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
