import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptRoleComponent } from './dept-role.component';

describe('DeptRoleComponent', () => {
  let component: DeptRoleComponent;
  let fixture: ComponentFixture<DeptRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
