import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-world-test-championship',
  templateUrl: './world-test-championship.component.html',
  styleUrls: ['./world-test-championship.component.css']
})
export class WorldTestChampionshipComponent {
  pointsTable: any
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.api.getWorldTestChampionPointTable().subscribe({
      next: data => {
        this.pointsTable = data;
        console.log(this.pointsTable);
      },
      error: () => {
        console.error();
      }
    });
  }
}
