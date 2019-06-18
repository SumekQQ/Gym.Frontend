import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExerciseComponent } from './list-exercise.component';

describe('GridExerciseComponent', () => {
  let component: GridExerciseComponent;
  let fixture: ComponentFixture<GridExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
