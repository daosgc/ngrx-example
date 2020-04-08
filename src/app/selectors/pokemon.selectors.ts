import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { PokemonState } from '../reducers/pokemon.reducer';

export const pokemonsState = createFeatureSelector<PokemonState>('pokemons');

export const selectPokemons = createSelector(
  pokemonsState,
  ({ pokemons }: PokemonState) => pokemons,
);
