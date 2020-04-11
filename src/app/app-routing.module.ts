import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersViewComponent } from './pages/customers-view/customers-view.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonResolver } from './resolvers/pokemon.resolver';


const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersViewComponent},
  { path: 'pokemons', component: PokemonListComponent, resolve: { pokemons: PokemonResolver }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
