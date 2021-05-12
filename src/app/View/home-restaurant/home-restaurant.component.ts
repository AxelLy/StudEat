import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-restaurant',
  templateUrl: './home-restaurant.component.html',
  styleUrls: ['./home-restaurant.component.css']
})
export class HomeRestaurantComponent implements OnInit {

  isLog:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isLog = (localStorage.getItem('isLog') == "1");
    console.log(this.isLog)
  }

}
