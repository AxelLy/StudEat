import { Component } from '@angular/core';
import { ConnexionComponent } from './View/connexion/connexion.component'
import {AuthService} from './Services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'studEat';
  isConnect: string;


  constructor(public auth: AuthService){
    this.isConnect = "ko";
    console.log("dsqd")
  }

  ngOnInit(): void {
    localStorage["isConnect"] = "ko";
    this.isConnect = localStorage["isConnect"];
    console.log(this.isConnect);
  }
  



}
