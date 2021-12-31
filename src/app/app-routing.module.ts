import { NgModule } from '@angular/core';

import { HomeComponent } from './component/home/home.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {path: 'Home/:id', component: HomeComponent},
  {path: 'MainPage', component: MainPageComponent}
];

@NgModule({
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],

  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
