import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/models/pokemon/pokemon';
import { Observable } from 'rxjs';

export interface ResponseData {
  count: number;
  next: string;
  previous: string;
  results: [Pokemon];
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPokemonList(itemsPerPage: number): Observable<ResponseData> {
    const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}`;
    return this.httpClient.get<ResponseData>(apiURL);
  }
}
