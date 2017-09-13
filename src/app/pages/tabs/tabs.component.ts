import {Component, OnInit} from '@angular/core';
import {HomeComponent} from 'app/pages/home/home.component';
import {AboutComponent} from 'app/pages/about/about.component';
import {MineComponent} from '../mine/mine.component';

@Component({
  selector: 'ons-page[tabs]',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  home = HomeComponent;
  about = AboutComponent;
  mine = MineComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
