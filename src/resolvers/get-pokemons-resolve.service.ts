import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { BaseApiService } from "src/services/base-api.service";
@Injectable({
    providedIn:"root"
})
export class GetPokemonResolveService implements Resolve<any>{
    constructor(private baseApiService: BaseApiService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.baseApiService.getRandomTenPokemon(100)
    }
  
}