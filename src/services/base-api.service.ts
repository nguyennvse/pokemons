import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  configUrl = 'appconfig/config.json';
  baseUrl = 'https://pokeapi.co/api/v2/';
  constructor(public httpClient: HttpClient) {
  }

  configApp(){
    this.httpClient.get<any>(this.configUrl).subscribe(config => {this.baseUrl = config.baseUrl});
  }

  get(url:string){
    return this.httpClient.get(`${this.baseUrl}${url}`);
  }
}
