import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  configUrl = 'appconfig/config.json';
  baseUrl = 'https://pokeapi.co/api/v2/';
  spinnerSubject = new Subject();
  constructor(public httpClient: HttpClient) {
  }

  configApp(){
    this.httpClient.get<any>(this.configUrl).subscribe(config => {this.baseUrl = config.baseUrl});
  }

  get(url:string){
    return this.httpClient.get(`${this.baseUrl}${url}`);
  }

  getRandomTenPokemon(pokemonNumber:number){
    return forkJoin(Array.from({length: pokemonNumber}, () => Math.floor(Math.random() * 101)+1).map(pokemonId => {return this.get(`pokemon/${pokemonId}`);})
    );
  }
}
