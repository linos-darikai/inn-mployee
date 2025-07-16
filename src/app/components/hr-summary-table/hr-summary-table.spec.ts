import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSummaryTable } from './hr-summary-table';

describe('HrSummaryTable', () => {
  let component: HrSummaryTable;
  let fixture: ComponentFixture<HrSummaryTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrSummaryTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrSummaryTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
