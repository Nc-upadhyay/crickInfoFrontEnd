import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-players-ranking',
  templateUrl: './players-ranking.component.html',
  styleUrls: ['./players-ranking.component.css']
})
export class PlayersRankingComponent {
@Input() ranking:any;
}
