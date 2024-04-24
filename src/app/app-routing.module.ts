import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { NewsComponent } from './pages/news/news.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { WorldTestChampionshipComponent } from './pages/world-test-championship/world-test-championship.component';
import { OdiRankingComponent } from './pages/odi-ranking/odi-ranking.component';
import { TestRankingComponent } from './pages/test-ranking/test-ranking.component';
import { T20RankingComponent } from './pages/t20-ranking/t20-ranking.component';
import { PlayersRankingComponent } from './component/players-ranking/players-ranking.component';

const routes: Routes = [
  {path:'',redirectTo :'home',pathMatch:'full'  },
  {path:'home',component :HomeComponent,title:'Home Page ' },
  {path:'live',component :LiveComponent,title:'Live'},
  {path:'news',component :NewsComponent,title:'News'},
  {path:'point-table', component:PointTableComponent,title:'Point-table'},
  {path:'gallery', component:GalleryComponent,title:'gallery'},
  {path:'test', component:WorldTestChampionshipComponent,title:'test championship'},
  {path:'ranking-odi', component:OdiRankingComponent,title:'odi-ranking'},
  {path:'ranking-test', component:TestRankingComponent,title:'text-ranking'},
  {path:'ranking-t20', component:T20RankingComponent,title:'t20-ranking'},
  {path:'ranking', component:PlayersRankingComponent,title:'players ranking'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
