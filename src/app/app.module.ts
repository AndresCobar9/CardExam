import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';

import { CardsComponent } from './cards/cards.component';
import { UsersService } from './Services/UsersService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TarjetaComponent } from './tarjeta/tarjeta.component';


const routes: Routes=
[
  { path:'', component: CardsComponent },
  

]


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TarjetaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
