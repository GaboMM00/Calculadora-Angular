import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  display = '';

  onButtonPress(symbol: string) {
    this.display += symbol;
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }
  erase() {
    this.display = "";
  }
  spr() {
    this.display = this.display.slice(0, this.display.length - 1);
  }
}
