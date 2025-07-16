import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateLayout } from './form-template-layout';

describe('FormTemplateLayout', () => {
  let component: FormTemplateLayout;
  let fixture: ComponentFixture<FormTemplateLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTemplateLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTemplateLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
