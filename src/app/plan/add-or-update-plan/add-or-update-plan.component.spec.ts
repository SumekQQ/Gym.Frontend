import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdatePlanComponent } from './add-or-update-plan.component';

describe('AddOrUpdatePlanComponent', () => {
  let component: AddOrUpdatePlanComponent;
  let fixture: ComponentFixture<AddOrUpdatePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdatePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
