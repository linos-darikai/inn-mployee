import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSummaryCards } from './hr-summary-cards';

describe('HrSummaryCards', () => {
  let component: HrSummaryCards;
  let fixture: ComponentFixture<HrSummaryCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrSummaryCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrSummaryCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
