import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersRankingComponent } from './players-ranking.component';

describe('PlayersRankingComponent', () => {
  let component: PlayersRankingComponent;
  let fixture: ComponentFixture<PlayersRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayersRankingComponent]
    });
    fixture = TestBed.createComponent(PlayersRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
