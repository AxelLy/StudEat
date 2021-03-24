import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './View/connexion/connexion.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
