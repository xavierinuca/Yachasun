import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean=false;
  cargada_sobre_nosotros:boolean=false;
  equipo:any[]=[];
  constructor(public http:Http) {

    this.carga_info();
    this.carga_sobre_nosotros();

    }
// en este metodo tenemos la carga de la informacion que tenemos
// creada en el archivo Json, datos fisicos, no desde una base.
    public carga_info(){
      this.http.get("assets/data/info.pagina.json")
                .subscribe(data=>{
                  //  console.log(data.json());
                    this.cargada=data.json();
                    this.info= data.json();
                  });

    }
// aqui es donde se llama a la url de donde tenemos la base,
// teniendo como ejemplo un url con su archivo json de Firebase
//
    public carga_sobre_nosotros(){
      this.http.get("https://portafolio-df09e.firebaseio.com/equipo.json")
                .subscribe(data=>{
                    //console.log(data.json());
                    this.cargada_sobre_nosotros=data.json();
                    this.equipo = data.json();
                  });

    }


}
