import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import { BaseApiService } from 'src/services/base-api.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
   videoLinks = ['https://www.youtube.com/embed/D0zYJ1RQ-fs','https://www.youtube.com/embed/1roy4o4tqQM','https://www.youtube.com/embed/bILE5BEyhdo','https://www.youtube.com/embed/uBYORdr_TY8']
   pokemonList:any[] = [];
  constructor(
    private baseApiService:BaseApiService,
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
     this.getRandomTenPokemon().subscribe((result:any) => {
       this.pokemonList = result;
      });

  }
  

  getRandomTenPokemon(){
    return forkJoin(Array.from({length: 10}, () => Math.floor(Math.random() * 101)+1).map(pokemonId => {return this.baseApiService.get(`pokemon/${pokemonId}`);})
    );
  }

  viewPokemonDetail(pokemonInfomation:any){
    this.dialog.open(PokemonDetailComponent,{
      width: '70wh',
      height: '60vh',
      data: pokemonInfomation,
    })
  }

  viewMore(){
    this.router.navigate(['view-more']);
  }
}
