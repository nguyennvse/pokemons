import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { GetPokemonResolveService } from 'src/resolvers/get-pokemons-resolve.service';
import { pokemonReducer } from 'src/state/reducers/pokemon.reducer';
import { ContentComponent } from './components/content/content.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path : '' , component: ContentComponent},
  {
    path : 'view-more', component: PokemonListComponent,
    resolve:{ data : GetPokemonResolveService},
    },
  {path : '**' , component: ContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),StoreModule.forRoot({pokemonList: pokemonReducer})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
