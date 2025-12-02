import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  contador: number = 0;
  nombre: string = '';
  colorActual: string = '#9b59b6';
  colores: string[] = ['#9b59b6', '#e74c3c', '#2ecc71', '#f39c12', '#3498db', '#1abc9c'];
  indiceColor: number = 0;

  get saludo(): string {
    return this.nombre ? `¡Hola, ${this.nombre}!` : 'Ingresa tu nombre para saludarte';
  }

  incrementar(): void {
    this.contador++;
  }

  decrementar(): void {
    this.contador--;
  }

  resetear(): void {
    this.contador = 0;
  }

  cambiarColor(): void {
    this.indiceColor = (this.indiceColor + 1) % this.colores.length;
    this.colorActual = this.colores[this.indiceColor];
  }
}
