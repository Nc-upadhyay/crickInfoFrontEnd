import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  liveData: any
  index:any
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadLiveScore();
  }

  private loadLiveScore() {
    this.api.getLiveScore().subscribe({
      next: data => {
        this.liveData = data;
      },

      error: (error) => {
        console.log(error);
      }
    });
  }
  refreshScore(){
    console.log("refesh");
    this.loadLiveScore();
  }
  trackByName(data:any):String{
    return data.teamHeading;
  }
}
