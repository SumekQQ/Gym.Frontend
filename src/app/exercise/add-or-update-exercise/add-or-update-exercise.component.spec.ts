import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateExerciseComponent } from './add-or-update-exercise.component';

describe('AddOrUpdateExerciseComponent', () => {
  let component: AddOrUpdateExerciseComponent;
  let fixture: ComponentFixture<AddOrUpdateExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
