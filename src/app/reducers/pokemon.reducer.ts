import { Pokemon } from '../models/pokemon';
import { pokemonActions, PokemonActionTypes } from '../actions/pokemon.actions';

export interface PokemonState {
  pokemons?: Pokemon[];
  errorMessage: string;
}

export const initialState: PokemonState = {
  pokemons: [],
  errorMessage: ''
};


export function PokemonReducer(state = initialState, action: pokemonActions): PokemonState {
  switch (action.type) {
    case PokemonActionTypes.LOAD_POKEMONS_SUCCESS: {
      return {
        ...state,
        pokemons: action.payload.pokemons,
      };
    }
    case PokemonActionTypes.LOAD_POKEMONS_ERROR: {
      return {
        ...state,
        errorMessage: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
