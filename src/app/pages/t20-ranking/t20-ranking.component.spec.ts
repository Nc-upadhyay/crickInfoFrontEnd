import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T20RankingComponent } from './t20-ranking.component';

describe('T20RankingComponent', () => {
  let component: T20RankingComponent;
  let fixture: ComponentFixture<T20RankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [T20RankingComponent]
    });
    fixture = TestBed.createComponent(T20RankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
