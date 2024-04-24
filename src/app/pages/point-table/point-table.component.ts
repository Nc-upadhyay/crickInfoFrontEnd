import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.css']
})
export class PointTableComponent implements OnInit{
  pointsTable:any
  constructor(private api:ApiService){}
ngOnInit(): void {
  this.api.getIPLPointTable().subscribe({
    next:data=>{
      this.pointsTable=data;
    console.log(this.pointsTable);
    },
    error:()=>{
    console.error();
    }
  });
}
}
