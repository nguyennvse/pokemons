import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
import { BaseApiService } from 'src/services/base-api.service';
import { searchPokemonAction } from 'src/state/actions/pokemon.action';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  searchInput = '';
  pokemonList:any[] = [];
  filterPokemonList:any[] = [];
  timeOutId: any;
  currentSearchList :any[] = [];
  pokemonCount = 0;
  showJpName = false;
  currentPageOption={
    length: 100,
    pageIndex: 0,
    pageSize: 20,
    previousPageIndex: 0,
  };

  //state implementation
  filterPokemonList$:Observable<any> = new Observable<any>();
  constructor(
    private baseApiService:BaseApiService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private store: Store<{pokemonList:[]}>
       ) { }

  ngOnInit(): void {
    this.filterPokemonList$ = this.store.select('pokemonList');
    this.route.data.subscribe((res:any) =>{
      this.pokemonList = res.data;
      const nameList:Observable<any>[] = [];
      this.pokemonList.forEach(pokemon => {
        nameList.push(this.baseApiService.get(`pokemon-species/${pokemon.id}`));
      });
      forkJoin(nameList).subscribe(nameRes => {
        nameRes.forEach((data,index)=>{
          this.pokemonList[index].jpName = data.names[0].name;
        });
        // this.filterPokemonList = this.pokemonList.slice(0,20);
        this.pokemonCount = res.data.length;

        this.store.dispatch(searchPokemonAction({ newList:this.pokemonList.slice(0,20)}))
      });

     
    });
    this.route.queryParams.subscribe(params => {
      if(params.name){
        this.filterPokemonList = this.pokemonList.filter(pokemon => pokemon.name.includes(params.name));
        this.pokemonCount = this.filterPokemonList.length;

        this.store.dispatch(searchPokemonAction({ newList:this.filterPokemonList }));
      }
    });
  }


  viewPokemonDetail(pokemonInfomation:any){
    this.dialog.open(PokemonDetailComponent,{
      width: '70wh',
      height: '60vh',
      data: pokemonInfomation,
    })
  }

  searchPokemon(event:any){
    event.preventDefault();
    if(this.timeOutId){
      clearTimeout(this.timeOutId);
    }
    
    this.timeOutId = setTimeout(()=>{
      this.currentSearchList = this.pokemonList.filter(pokemon => pokemon.name.includes(this.searchInput));
      this.filterPokemonList = this.currentSearchList.slice(this.currentPageOption.pageIndex * this.currentPageOption.pageSize, (this.currentPageOption.pageIndex+1)*this.currentPageOption.pageSize);
      this.pokemonCount = this.currentSearchList.length;
      this.store.dispatch(searchPokemonAction({ newList:this.filterPokemonList}));

    },300);
  }

  pageChange(event:any){
    this.currentPageOption = event;
    const tempList = this.searchInput ? this.currentSearchList : this.pokemonList;
    const maxpageSize = (event.pageIndex+1)*event.pageSize > tempList.length ? tempList.length: (event.pageIndex+1)*event.pageSize;
    this.filterPokemonList = tempList.slice(event.pageIndex * event.pageSize, maxpageSize);
    this.store.dispatch(searchPokemonAction({ newList:this.filterPokemonList}));
  }
}
