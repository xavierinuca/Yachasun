import { Component } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent  {
  public barraChartOptions:any={
    scaleShowVericallines:false,
    responsive:true
  };


  public barChartLabels:string[] = ['Rojo', 'Amarillo', 'Azul', 'Blanco', 'Verde'];
  public barChartLabel:string[] = ['Vocal A', 'Vocal E', 'Vocal I', 'Vocal O', 'Vocal U'];

  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [1,  2 , 3, 2 , 1, 0], label: 'Errores Colores'},

  ];

  public barChartDat:any[] = [
    {data: [ ], label: ''},
    {data: [ 3, 1 , 2 , 2 ,1 , 0], label: 'Errores Vocales'}
  ];
 // events
 public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

public randomize():void {
  // Only Change 3 values
  let data = [];

    
   // Math.round(Math.random() * 3),
  //  3,
   // (Math.random() * 3),
   // 3,
    //(Math.random() * 3),
   // 3];
 
  /**
   * (My guess), for Angular to recognize the change in the dataset
   * it has to change the dataset variable directly,
   * so one way around it, is to clone the data, change it and then
   * assign it;
   */
}

}
