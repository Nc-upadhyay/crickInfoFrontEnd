import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-odi-ranking',
  templateUrl: './odi-ranking.component.html',
  styleUrls: ['./odi-ranking.component.css']
})
export class OdiRankingComponent implements OnInit{
  players_ranks:any
constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getPlayersRank();
  }


  private getPlayersRank() {
    console.log(" method is call")
    this.api.getODIRanking().subscribe({
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
