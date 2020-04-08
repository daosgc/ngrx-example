import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { ApiService } from '../sevices/api.service';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  PokemonActionTypes,
  LoadPokemonsSuccess,
  LoadPokemonsError
} from '../actions/pokemon.actions';

@Injectable()
export class PokemonEffects {
  itemsPerPage = 10;

  constructor(
    private actions$: Actions,
    private pokemonApi: ApiService
  ) {}

  @Effect()
  loadPokemons$: Observable<Action> = this.actions$.pipe(
    ofType(PokemonActionTypes.LOAD_POKEMONS),
    switchMap(() =>
      this.pokemonApi.getPokemonList(this.itemsPerPage)
      .pipe(
        map(apiResponse => (new LoadPokemonsSuccess({pokemons: apiResponse.results}))),
        catchError(error => of(new LoadPokemonsError(error))),
      )
    ),
  );

}
