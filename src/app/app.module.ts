import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './View/connexion/connexion.component';
import { InscriptionComponent } from './View/inscription/inscription.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConnexionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
