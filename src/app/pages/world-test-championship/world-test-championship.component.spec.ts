import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldTestChampionshipComponent } from './world-test-championship.component';

describe('WorldTestChampionshipComponent', () => {
  let component: WorldTestChampionshipComponent;
  let fixture: ComponentFixture<WorldTestChampionshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldTestChampionshipComponent]
    });
    fixture = TestBed.createComponent(WorldTestChampionshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
