import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateDayComponent } from './add-or-update-day.component';

describe('AddOrUpdateDayComponent', () => {
  let component: AddOrUpdateDayComponent;
  let fixture: ComponentFixture<AddOrUpdateDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
