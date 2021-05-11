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
import { InfosBancaireComponent } from './View/infos-bancaire/infos-bancaire.component';
import { MarketingComponent } from './View/marketing/marketing.component';
import { TempsPreparationComponent } from './View/temps-preparation/temps-preparation.component';
import { InfosRestaurantComponent } from './View/infos-restaurant/infos-restaurant.component';
import { CommentairesComponent } from './View/commentaires/commentaires.component';
import { EtablissementsComponent } from './View/etablissements/etablissements.component';


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
    InfosBancaireComponent,
    MarketingComponent,
    TempsPreparationComponent,
    InfosRestaurantComponent,
    CommentairesComponent,
    EtablissementsComponent
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
