import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importa FormsModule para que ngModel funcione

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    // Para la funcionalidad del navegador
    FormsModule       // Asegúrate de que FormsModule está aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
