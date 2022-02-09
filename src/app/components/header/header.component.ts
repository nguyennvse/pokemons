import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerIcons = ["fa fa-rss", "fa fa-twitch","fa fa-steam-square", "fa fa-google","fa fa-pinterest","fa fa-twitter","fa fa-facebook"];
  rightHeaderIcons = ["fa fa-search","fa fa-user","fa fa-shopping-cart"]
  constructor() { }

  ngOnInit(): void {
  }

}
