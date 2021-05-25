import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routingComponents } from 'src/app/app-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule} from 'src/app/app.module';

@Component({
  selector: 'app-creneau-plat',
  templateUrl: './creneau-plat.component.html',
  styleUrls: ['./creneau-plat.component.css']
})
export class CreneauPlatComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public afficherCrenaux(): void {
    this.router.navigateByUrl('/temps-preparation2');
  }

  public retourTemps(): void{
    this.router.navigateByUrl('/temps-preparation');
  }
}
