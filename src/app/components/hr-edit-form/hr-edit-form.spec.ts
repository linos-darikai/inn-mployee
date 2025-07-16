import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrEditForm } from './hr-edit-form';

describe('HrEditForm', () => {
  let component: HrEditForm;
  let fixture: ComponentFixture<HrEditForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrEditForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrEditForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
