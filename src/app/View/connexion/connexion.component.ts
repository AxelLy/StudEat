import { Component, OnInit } from '@angular/core';
import { RestaurateurService } from '../../Services/restaurateur.service';
import { Restaurateur } from '../../Models/restaurateur';
import { Router } from '@angular/router';
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
