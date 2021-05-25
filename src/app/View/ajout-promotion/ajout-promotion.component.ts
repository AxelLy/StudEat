import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routingComponents } from 'src/app/app-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule} from 'src/app/app.module';

@Component({
  selector: 'app-ajout-promotion',
  templateUrl: './ajout-promotion.component.html',
  styleUrls: ['./ajout-promotion.component.css']
})
export class AjoutPromotionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ajoutPromotion(): void{
    this.router.navigateByUrl('/marketing2');
  }

  annulerPromotion(): void{
    this.router.navigateByUrl('/marketing');
  }
}
