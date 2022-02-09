import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/services/base-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private baseApiService:BaseApiService) { }

  ngOnInit(): void {
    this.baseApiService.configApp();
  }

}
