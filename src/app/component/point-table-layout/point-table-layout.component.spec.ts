import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTableLayoutComponent } from './point-table-layout.component';

describe('PointTableLayoutComponent', () => {
  let component: PointTableLayoutComponent;
  let fixture: ComponentFixture<PointTableLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointTableLayoutComponent]
    });
    fixture = TestBed.createComponent(PointTableLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
