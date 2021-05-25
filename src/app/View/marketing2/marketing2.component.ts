import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routingComponents } from 'src/app/app-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule} from 'src/app/app.module';
@Component({
  selector: 'app-marketing2',
  templateUrl: './marketing2.component.html',
  styleUrls: ['./marketing2.component.css']
})
export class Marketing2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ajoutPromotion():void{
    this.router.navigateByUrl('/ajout-promotion');
  }
}
