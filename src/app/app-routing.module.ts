import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AProposComponent } from './View/a-propos/a-propos.component';
import { FonctionnementComponent } from './View/fonctionnement/fonctionnement.component';
import { LinksComponent } from './View/links/links.component';
import { ConnexionComponent } from './View/connexion/connexion.component';

const routes: Routes = [
  {path: 'home', component:AppComponent},
  {path: 'about', component:AProposComponent},
  {path: 'fonctionnement', component:FonctionnementComponent},
  {path: 'links', component:LinksComponent},
  {path: 'connexion', component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AProposComponent, FonctionnementComponent,LinksComponent,ConnexionComponent]
