import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
news:any;

constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.getNews().subscribe({
      next:data=>{
        this.news=data;
        console.log("news");
        console.log(this.news);
      },
      error:()=>{
        console.error();
      }
    })
  }
  submit(url:string){
    window.open(url,'_blank')
  }
}
