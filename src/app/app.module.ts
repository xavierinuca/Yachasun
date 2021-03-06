import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//RUTAS
import { app_routing } from './app.routes';

//SERVICIOS
import { InformacionService } from './services/informacion.service';
import { ProductosService } from './services/productos.service';
//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';
import { SearchComponent } from './components/search/search.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';

import { ChartsModule} from "ng2-charts/ng2-charts";
import { BarraComponent } from './components/barra/barra.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    NotificacionesComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    ChartsModule
  ],
  providers: [
    InformacionService,
    ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
