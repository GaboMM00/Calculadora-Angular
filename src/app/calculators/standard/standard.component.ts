import { Component } from '@angular/core';
import { CalbuttomComponent } from '../../calculator-parts/calbuttom/calbuttom.component';

@Component({
  selector: 'app-standard',
  standalone: true,
  imports: [CalbuttomComponent],
  templateUrl: './standard.component.html',
  styleUrl: './standard.component.css'
})
export class StandardComponent {
  display = '';
  constructor() {
    console.log("Componente standard cargado");
  }
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
