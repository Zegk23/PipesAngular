import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel
import { CommonModule } from '@angular/common'; // Importa CommonModule para los pipes

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule]
})
export class AppComponent {
  nombre: string = '';
  salario: number = 0;
  fechaNacimiento: string = ''; // Se usa string para compatibilidad con ngModel
  numeroDecimal: number = 0;
  porcentaje: number = 0.123; // Ejemplo de porcentaje
  objeto = {
    nombre: 'Luis',
    edad: 24,
    carrera: 'Ingeniería'
  };

  datosEnviados = false; // Control para mostrar resultados solo después de presionar el botón

  submitForm() {
    this.datosEnviados = true;
    console.log('Formulario enviado:', {
      nombre: this.nombre,
      salario: this.salario,
      fechaNacimiento: this.fechaNacimiento,
      numeroDecimal: this.numeroDecimal
    });
  }
}
