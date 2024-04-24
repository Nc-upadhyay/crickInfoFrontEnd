import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  getLiveScore(){
    return this.httpClient.get(environment.apiUrl+"/cricket/live-matches")
  }
  getNews(){
    return this.httpClient.get(environment.apiUrl+"/cricket/news")
  }
  getIPLPointTable(){
    return this.httpClient.get(environment.apiUrl+"/cricket/point-table")
  }
  getWorldTestChampionPointTable(){
    return this.httpClient.get(environment.apiUrl+"/cricket/world-test")
  }
  getGallery(){
    return this.httpClient.get(environment.apiUrl+"/cricket/gallery")
  }
  getTestRanking(){
    return this.httpClient.get(environment.apiUrl+"/cricket/ranking-test");
  }
  getODIRanking(){
    return this.httpClient.get(environment.apiUrl+"/cricket/ranking-odi");
  }
  getT20Ranking(){
    return this.httpClient.get(environment.apiUrl+"/cricket/ranking-t20");
  }


}
