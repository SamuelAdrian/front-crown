import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importacion Componentes
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
// Importacion Modulo Material Angular
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class SharedModule { }
