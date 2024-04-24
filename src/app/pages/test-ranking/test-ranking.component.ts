import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-test-ranking',
  templateUrl: './test-ranking.component.html',
  styleUrls: ['./test-ranking.component.css']
})
export class TestRankingComponent {
  players_ranks:any
  constructor(private api:ApiService){}
    ngOnInit(): void {
      this.getPlayersRank();
    }
  
  
    private getPlayersRank() {
      console.log(" method is call")
      this.api.getTestRanking().subscribe({
        next: data => {
          console.log("data is " );
          this.players_ranks = data;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
}
