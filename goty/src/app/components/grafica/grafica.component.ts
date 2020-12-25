import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  @Input('data') single = [
    {
      "name": "juego 1",
      "value": 15
    },
    {
      "name": "juego 2",
      "value": 25
    },
    {
      "name": "juego 3",
      "value": 15
    }
  ];
  
  multi: any[] = [];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights'

  constructor() {
    
  }
  
  onSelect(event:any) {
    console.log(event);
  }
  ngOnInit(): void {
  }

}
