import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AProposComponent } from './View/a-propos/a-propos.component';
import { FonctionnementComponent } from './View/fonctionnement/fonctionnement.component';

const routes: Routes = [
  {path: 'home', component:AppComponent},
  {path: 'about', component:AProposComponent},
  {path: 'fonctionnement', component:FonctionnementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AProposComponent, FonctionnementComponent]
