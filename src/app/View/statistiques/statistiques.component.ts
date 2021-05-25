import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';


@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})


export class StatistiquesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("ok c'est les stats")
  }
  
  type = 'line';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Nombre d'utilisateurs",
        data: [10, 20, 60, 70, 90],
        fill: false,
        borderColor: 'rgb(75, 192, 192)'
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
}
