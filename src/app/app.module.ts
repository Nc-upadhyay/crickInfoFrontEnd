import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { LiveComponent } from './pages/live/live.component';
import { LiveMatchCardComponent } from './component/live-match-card/live-match-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PointTableLayoutComponent } from './component/point-table-layout/point-table-layout.component';
import { WorldTestChampionshipComponent } from './pages/world-test-championship/world-test-championship.component';
import { OdiRankingComponent } from './pages/odi-ranking/odi-ranking.component';
import { TestRankingComponent } from './pages/test-ranking/test-ranking.component';
import { T20RankingComponent } from './pages/t20-ranking/t20-ranking.component';
import { PlayersRankingComponent } from './component/players-ranking/players-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    LiveComponent,
    LiveMatchCardComponent,
    PointTableComponent,
    GalleryComponent,
    PointTableLayoutComponent,
    WorldTestChampionshipComponent,
    OdiRankingComponent,
    TestRankingComponent,
    T20RankingComponent,
    PlayersRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
