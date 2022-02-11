import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseApiService } from "src/services/base-api.service";
import { finalize } from 'rxjs/operators';
@Injectable()
export class PokemonInterceptopService implements HttpInterceptor{
    constructor(private baseApiService: BaseApiService){
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.baseApiService.spinnerSubject.next(true);
        return next.handle(req).pipe(
            finalize(() => {
                setTimeout(()=>{this.baseApiService.spinnerSubject.next(false);},100)
              })
        )
    }
}


