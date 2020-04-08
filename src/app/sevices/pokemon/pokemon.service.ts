import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { Store } from '@ngrx/store';
import { PokemonState } from 'src/app/reducers/pokemon.reducer';
import { LoadPokemons } from 'src/app/actions/pokemon.actions';
import { selectPokemons } from 'src/app/selectors/pokemon.selectors';

export interface ResponseData {
  count: number;
  next: string;
  previous: string;
  results: [Pokemon];
}
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private store: Store<PokemonState>
  ) { }

  public loadPokemons() {
    this.store.dispatch(new LoadPokemons());
  }

  public selectAll() {
    return this.store.select(selectPokemons);
  }
}
