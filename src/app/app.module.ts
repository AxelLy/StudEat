import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './View/connexion/connexion.component';
import { InscriptionComponent } from './View/inscription/inscription.component';
// import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
// import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
// import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRestaurantComponent } from './View/home-restaurant/home-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConnexionComponent,
    InscriptionComponent,
    // AddTutorialComponent,
    // TutorialDetailsComponent,
    // TutorialsListComponent,
    HomeRestaurantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
