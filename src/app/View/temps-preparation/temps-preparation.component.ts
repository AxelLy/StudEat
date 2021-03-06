import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routingComponents } from 'src/app/app-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule} from 'src/app/app.module';

@Component({
  selector: 'app-temps-preparation',
  templateUrl: './temps-preparation.component.html',
  styleUrls: ['./temps-preparation.component.css']
})
export class TempsPreparationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ajoutCreneau():void{
    this.router.navigateByUrl('/creneau');
  }

}
