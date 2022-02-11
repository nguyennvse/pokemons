import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseApiService } from 'src/services/base-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit,OnDestroy {
  spinnerSubscription:Subscription = new Subscription();
  isProcessing = false;
  constructor(private baseApiService: BaseApiService) { }
  ngOnDestroy(): void {
    this.spinnerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.spinnerSubscription = this.baseApiService.spinnerSubject.subscribe((res:any) => {
      this.isProcessing = res
    });
  }

}
