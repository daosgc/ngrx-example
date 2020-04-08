import { Action } from '@ngrx/store';

export enum PokemonActionTypes {
  LOAD_POKEMONS         = '[Pokemons] LOAD_POKEMONS',
  LOAD_POKEMONS_SUCCESS = '[Pokemons] LOAD_POKEMONS_SUCCESS',
  LOAD_POKEMONS_ERROR   = '[Pokemons] LOAD_POKEMONS_ERROR',
}

export class LoadPokemonsError implements Action {
  readonly type = PokemonActionTypes.LOAD_POKEMONS_ERROR;
  constructor(public payload: any) {
  }
}
export class LoadPokemons implements Action {
  readonly type = PokemonActionTypes.LOAD_POKEMONS;
  constructor() {
  }
}
export class LoadPokemonsSuccess implements Action {
  readonly type = PokemonActionTypes.LOAD_POKEMONS_SUCCESS;
  constructor(public payload: any) {
  }
}

export type pokemonActions =
  LoadPokemonsError
  | LoadPokemons
  | LoadPokemonsSuccess;
