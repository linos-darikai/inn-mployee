import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProgressChart } from './employee-progress-chart';

describe('EmployeeProgressChart', () => {
  let component: EmployeeProgressChart;
  let fixture: ComponentFixture<EmployeeProgressChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProgressChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProgressChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
