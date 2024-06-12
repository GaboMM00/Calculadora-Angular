import { Component ,input,Input} from '@angular/core';

@Component({
  selector: 'app-calbuttom',
  standalone: true,
  imports: [],
  templateUrl: './calbuttom.component.html',
  styleUrl: './calbuttom.component.css'
})
export class CalbuttomComponent {
  @Input() id: string = "";
  @Input() num :string="0";
  @Input() color: string = 'black';
  @Input() size: number = 14;
  @Input() background: string = 'white';
}
