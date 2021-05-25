import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AProposComponent } from './View/a-propos/a-propos.component';
import { FonctionnementComponent } from './View/fonctionnement/fonctionnement.component';
import { LinksComponent } from './View/links/links.component';
import { ConnexionComponent } from './View/connexion/connexion.component';
import { InscriptionComponent } from './View/inscription/inscription.component';
import { HomeRestaurantComponent } from './View/home-restaurant/home-restaurant.component';
import { MarketingComponent} from './View/marketing/marketing.component';
import { InfosBancaireComponent } from './View/infos-bancaire/infos-bancaire.component';
import { TempsPreparationComponent } from './View/temps-preparation/temps-preparation.component';
import { InfosRestaurantComponent } from './View/infos-restaurant/infos-restaurant.component';
import { CommentairesComponent } from './View/commentaires/commentaires.component';
import { EtablissementsComponent } from './View/etablissements/etablissements.component';
import { CreneauPlatComponent} from './View/creneau-plat/creneau-plat.component';
import { TempsPreparation2Component } from './View/temps-preparation2/temps-preparation2.component';
import { AjoutPromotionComponent} from './View/ajout-promotion/ajout-promotion.component';
import { Marketing2Component} from './View/marketing2/marketing2.component';
import { StatistiquesComponent } from './View/statistiques/statistiques.component';
// import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
// import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
// import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

const routes: Routes = [
  {path: 'home', component:AppComponent},
  {path: 'about', component:AProposComponent},
  {path: 'fonctionnement', component:FonctionnementComponent},
  {path: 'links', component:LinksComponent},
  {path: 'connexion', component:ConnexionComponent},
  {path: 'inscription', component:InscriptionComponent},
  // { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  // { path: 'tutorials', component: TutorialsListComponent },
  { path: 'homeRestaurant', component: HomeRestaurantComponent },
  { path : 'marketing', component: MarketingComponent},
  { path : 'infosbancaire', component: InfosBancaireComponent},
  { path : 'temps-preparation', component: TempsPreparationComponent},
  { path : 'infosRestaurant', component: InfosRestaurantComponent},
  { path : 'commentaires', component: CommentairesComponent},
  { path : 'etablissements', component : EtablissementsComponent},
  {path : 'creneau', component: CreneauPlatComponent},
  { path : 'temps-preparation2', component: TempsPreparation2Component},
  { path : 'ajout-promotion', component: AjoutPromotionComponent},
  { path : 'marketing2', component: Marketing2Component},
  { path : 'stats', component : StatistiquesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AProposComponent, FonctionnementComponent,LinksComponent,ConnexionComponent, MarketingComponent]
