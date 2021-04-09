import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'studEat';
  isConnect: string;


  constructor(){
    this.isConnect = "ko";
    console.log("dsqd")
  }
  ngOnInit(): void {
    localStorage["isConnect"] = "ko";
    this.isConnect = localStorage["isConnect"];
    console.log(this.isConnect);
  }
  



}
