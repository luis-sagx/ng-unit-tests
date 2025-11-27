import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('pruebas-unitarias');

  ngOnInit(): void {
    // let calculator = new Calculator();
    // let result = calculator.multiply(4, 3);
    // console.log(result === 12);
    // console.log(result !== 16);
    // let result2 = calculator.divide(15, 5);
    // console.log(result2 === 3);
    // console.log(result2 !== 4);
    // let result3 = calculator.divide(10, 0);
    // console.log(result3 === null);
    // console.log(result3 !== 5);
  }
}
