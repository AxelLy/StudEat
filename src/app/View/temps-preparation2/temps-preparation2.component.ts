import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routingComponents } from 'src/app/app-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule} from 'src/app/app.module';

@Component({
  selector: 'app-temps-preparation2',
  templateUrl: './temps-preparation2.component.html',
  styleUrls: ['./temps-preparation2.component.css']
})
export class TempsPreparation2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public ajoutCreneau(): void {
    this.router.navigateByUrl('/creneau');
  }

}
