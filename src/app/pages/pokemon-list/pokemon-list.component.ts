import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/sevices/pokemon/pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private pokemonService: PokemonService
  ) {
    this.pokemonService.loadPokemons();
  }

  ngOnInit() {
    this.pokemons$ = this.pokemonService.selectAll();
  }

}
