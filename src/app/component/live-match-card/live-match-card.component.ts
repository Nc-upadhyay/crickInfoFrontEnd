import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-live-match-card',
  templateUrl: './live-match-card.component.html',
  styleUrls: ['./live-match-card.component.css']
})
export class LiveMatchCardComponent {
  formateDate(miliSecond: any): String {
    return new Date(miliSecond).toLocaleDateString();
    
  }
  @Input() data: any
}
