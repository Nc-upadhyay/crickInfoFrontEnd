import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-point-table-layout',
  templateUrl: './point-table-layout.component.html',
  styleUrls: ['./point-table-layout.component.css']
})
export class PointTableLayoutComponent {
  @Input() pointsT:any
 @Input() pointsTFirstRow:any=["Teams",
 "Mat",
 "Won",
 "Lost",
 "Tied",
 "NR",
 "Pts",
 "NRR",]
}
