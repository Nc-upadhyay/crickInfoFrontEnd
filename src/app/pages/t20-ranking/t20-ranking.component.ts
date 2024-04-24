import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-t20-ranking',
  templateUrl: './t20-ranking.component.html',
  styleUrls: ['./t20-ranking.component.css']
})
export class T20RankingComponent {
  players_ranks:any
  constructor(private api:ApiService){}
    ngOnInit(): void {
      this.getPlayersRank();
    }
  
  
    private getPlayersRank() {
      console.log(" method is call")
      this.api.getT20Ranking().subscribe({
        next: data => {
          console.log("data is " );
          this.players_ranks = data;
          console.log(this.players_ranks);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
}
