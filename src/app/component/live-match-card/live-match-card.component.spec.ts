import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveMatchCardComponent } from './live-match-card.component';

describe('LiveMatchCardComponent', () => {
  let component: LiveMatchCardComponent;
  let fixture: ComponentFixture<LiveMatchCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveMatchCardComponent]
    });
    fixture = TestBed.createComponent(LiveMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
