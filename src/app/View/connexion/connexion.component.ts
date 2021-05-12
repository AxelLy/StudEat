import { Component, OnInit } from '@angular/core';
import { RestaurateurService } from '../../Services/restaurateur.service';
import { Restaurateur } from '../../Models/restaurateur';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthService';
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


  constructor(private resto: RestaurateurService, private router: Router, private auth: AuthService) {
    this.isOk = false;
  }

  ngOnInit() {
    this.getAllRestaurateurs();
  }

  onLoggedin(){console.log(this.resto);}

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
        this.auth.isAuth = true;
        this.isOk = true;
        console.log("les resto existe");
        localStorage.setItem('isLog', '1');
        console.log(localStorage.getItem('isLog'))
        this.router.navigate(['homeRestaurant']);

      }
      else{
        console.log("pas bon");
      }
    });
  }

}
