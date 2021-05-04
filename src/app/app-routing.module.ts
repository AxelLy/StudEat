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
  { path : 'infosbancaire', component: InfosBancaireComponent}
  // ,  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  // { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AProposComponent, FonctionnementComponent,LinksComponent,ConnexionComponent]
