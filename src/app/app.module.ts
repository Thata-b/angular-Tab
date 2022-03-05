import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { EuComponent } from './eu/eu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'eu', component: EuComponent },
    { path: 'tabuada', component: TabuadaComponent },
  ]),
],

  declarations: [ AppComponent, HelloComponent, HomeComponent, EuComponent, NavbarComponent, TabuadaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



