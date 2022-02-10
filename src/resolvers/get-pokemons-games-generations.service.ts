import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { forkJoin } from "rxjs";
import { BaseApiService } from "src/services/base-api.service";
@Injectable({
    providedIn:"root"
})
export class GetPokemonGenerationAndVersionService implements Resolve<any>{
    constructor(private baseApiService: BaseApiService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return forkJoin([this.baseApiService.get('generation'),this.baseApiService.get('version')]);
    }
  
}