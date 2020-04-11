import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { PokemonState } from '../reducers/pokemon.reducer';
import { tap, filter, first } from 'rxjs/operators';
import { LoadPokemons } from '../actions/pokemon.actions';
import { selectPokemons } from '../selectors/pokemon.selectors';
import { Pokemon } from '../models/pokemon';

@Injectable()
export class PokemonResolver implements Resolve<Observable<Pokemon[]>> {

  constructor(
    private store: Store<PokemonState>
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pokemon[]> {
    return this.store .pipe(
      select(selectPokemons),
      tap((pokemons) => {
        if (pokemons.length === 0) {
          this.store.dispatch(new LoadPokemons());
        }
      }),
      first()
    );
  }
}
