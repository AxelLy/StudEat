import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  RestaurateurService
} from '../../Services/restaurateur.service';
import {
  Restaurateur
} from '../../Models/restaurateur';
import {
  FormsModule
} from '@angular/forms';

import {AppComponent} from '../../app.component';
import { RouterLink, RouterModule, Routes, RoutesRecognized, Router } from '@angular/router';
import { AppRoutingModule} from '../../app-routing.module';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  //Declaration restaurateurs
  Restaurateurs: Restaurateur[] = [];
  rest = new Restaurateur();

  //Declaration connection
  isOk: boolean;

  @Output() onHide = new EventEmitter<boolean>();

  constructor(private resto: RestaurateurService, private router: Router) {
    this.isOk = false;
  }

  ngOnInit() {
    this.getAllRestaurateurs();
  }

  //On recupere tous nos restaurateurs
  getAllRestaurateurs() {
    this.resto.getAll().subscribe(
      data => {
        this.Restaurateurs = data;
      },
      error => {
        console.log(error);
      });
  }

  
  verifLogs() {

    this.Restaurateurs.forEach(r => { 
      
      //On vérifie que notre restauratuers existe
      if(r.mail == this.rest.mail && r.mdp == this.rest.mdp){
        this.isOk = true;
        console.log("les resto existe");
        
        this.router.navigate(['homeRestaurant']);

      }
      else{
        console.log("pas bon");
      }
    });
  }

}
