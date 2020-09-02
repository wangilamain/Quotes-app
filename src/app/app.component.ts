import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1, 'A pessimist sees difficulty in every opportunity.An optimist sees opportunity in every difficulty', 'anonymous', new Date(2020,4,21)),
    new Quote(2, 'You learn more from failure than from success', 'Sharon', new Date(2019,14,16)),
    new Quote(3, 'Its not whether you get knocked down,its whether you get up', 'Vince Lombardi', new Date(2020,1,11)),
    new Quote(4, 'The man who has confidence in himself gains confidence from others', 'Hasidic', new Date(2020,12,8))
  ];
}
