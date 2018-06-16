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


  public barChartLabels:string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [ 59, 80, 81, 56, 55, 40], label: 'errores Colores'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'errores Vocales'}
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
  let data = [
    Math.round(Math.random() * 100),
    59,
    80,
    (Math.random() * 100),
    56,
    (Math.random() * 100),
    40];
  let clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = data;
  this.barChartData = clone;
  /**
   * (My guess), for Angular to recognize the change in the dataset
   * it has to change the dataset variable directly,
   * so one way around it, is to clone the data, change it and then
   * assign it;
   */
}

}
