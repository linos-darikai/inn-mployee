import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrChart } from './hr-chart';

describe('HrChart', () => {
  let component: HrChart;
  let fixture: ComponentFixture<HrChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
