import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {OnsenModule, OnsNavigator} from 'ngx-onsenui';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {MineComponent} from './pages/mine/mine.component';
import {TabsComponent} from './pages/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MineComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OnsenModule
  ],
  providers: [OnsNavigator],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    TabsComponent,
    HomeComponent,
    AboutComponent,
    MineComponent,
  ]
})
export class AppModule {
}
