import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/services/base-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  gameList:any[] = [];
  generationsList:any[] = [];
  constructor(private baseApiService: BaseApiService) { }

  ngOnInit(): void {
    this.baseApiService.get('generation').subscribe((generationRes:any) =>{
      this.gameList = generationRes.results;
    });
    
    this.baseApiService.get('version').subscribe((versionRes:any) =>{
      this.generationsList = versionRes.results;
    });
  }

}
