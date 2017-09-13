import {Component, OnInit, ViewChild} from '@angular/core';
import {OnsNavigator, onsNotification} from 'ngx-onsenui';
import {MineComponent} from '../mine/mine.component';

@Component({
  selector: 'ons-page[home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('carousel') carousel;

  constructor(private nav: OnsNavigator) {
  }

  prev(): void {
    this.carousel.nativeElement.prev();
  }

  next(): void {
    this.carousel.nativeElement.next();
  }

  goMine(): void {
    this.nav.element.replacePage(MineComponent);
  }

  confirm() {
    onsNotification
      .confirm({message: 'you should confirmed to next'})
      .then(res => {
        if (res) {
          onsNotification.alert('you confirmed this');
        }
      });
  }

  ngOnInit() {
  }

}
