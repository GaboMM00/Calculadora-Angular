import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ModebarComponent } from './modebar/modebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ModebarComponent,CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
}
