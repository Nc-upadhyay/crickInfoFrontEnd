import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRankingComponent } from './test-ranking.component';

describe('TestRankingComponent', () => {
  let component: TestRankingComponent;
  let fixture: ComponentFixture<TestRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestRankingComponent]
    });
    fixture = TestBed.createComponent(TestRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
