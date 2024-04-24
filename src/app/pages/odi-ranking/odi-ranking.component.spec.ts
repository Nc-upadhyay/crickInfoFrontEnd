import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiRankingComponent } from './odi-ranking.component';

describe('OdiRankingComponent', () => {
  let component: OdiRankingComponent;
  let fixture: ComponentFixture<OdiRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdiRankingComponent]
    });
    fixture = TestBed.createComponent(OdiRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
