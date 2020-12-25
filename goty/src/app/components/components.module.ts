import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficaComponent } from './grafica/grafica.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: 
  [
    NavbarComponent, 
    GraficaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ], 
  exports:[
    NavbarComponent,
    GraficaComponent
  ]
})
export class ComponentsModule { }
