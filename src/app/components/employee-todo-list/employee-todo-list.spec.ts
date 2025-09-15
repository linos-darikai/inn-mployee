import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTodoList } from './employee-todo-list';

describe('EmployeeTodoList', () => {
  let component: EmployeeTodoList;
  let fixture: ComponentFixture<EmployeeTodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeTodoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTodoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
