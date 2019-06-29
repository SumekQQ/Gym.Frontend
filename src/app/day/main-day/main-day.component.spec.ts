import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDayComponent } from './main-day.component';

describe('MainDayComponent', () => {
  let component: MainDayComponent;
  let fixture: ComponentFixture<MainDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
