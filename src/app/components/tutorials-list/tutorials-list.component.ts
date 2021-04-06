import { Component, OnInit } from '@angular/core';
import { TutorialService} from '../../Services/tutorial.service';
import { Tutoriel} from '../../Models/tutoriel';
import { RestaurateurService} from '../../Services/restaurateur.service';
import { Restaurateur} from '../../Models/restaurateur';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  Tutoriels: Tutoriel[] = [];
  Restaurateurs: Restaurateur[] = [];
  
  constructor(private tuto: TutorialService) { }

  ngOnInit(): void {
    this.tuto.getAll()
    .subscribe(
      data =>{
        // this.tuto= data;
        this.Tutoriels = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

      // this.tutoriels = this.tutoriels[0];
    }
    
    test(){
      console.log(this.Tutoriels);
    }


}
