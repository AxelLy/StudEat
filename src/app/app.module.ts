import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FonctionnementComponent } from './View/fonctionnement/fonctionnement.component';
import { AProposComponent } from './View/a-propos/a-propos.component';

@NgModule({
  declarations: [
    AppComponent,
    FonctionnementComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
