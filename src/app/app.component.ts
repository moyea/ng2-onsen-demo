import {Component} from '@angular/core';
import {TabsComponent} from './pages/tabs/tabs.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initPage = TabsComponent;
}
