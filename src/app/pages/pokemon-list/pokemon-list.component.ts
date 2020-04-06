import { Component, OnInit } from '@angular/core';
import { PokemonService, ResponseData } from 'src/app/sevices/pokemon/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  $pokemonResponse: Observable<ResponseData>;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const itemsPerPage = 10;
    this.$pokemonResponse = this.pokemonService.getPokemonList(itemsPerPage);
  }

}
