import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-or-update-exercise',
  templateUrl: './add-or-update-exercise.component.html',
  styleUrls: ['./add-or-update-exercise.component.css']
})
export class AddOrUpdateExerciseComponent implements OnInit {
  @Output() exerciseCreated = new EventEmitter<any>();
  @Input() exerciseInfo: any;
  @Input() categoryData: any;

  constructor() {
    this.clearExerciseInfo();
  }

  ngOnInit() { }
  
  public addOrUpdateExerciseRecord = function(event) {
    this.exerciseCreated.emit(this.exerciseInfo);
    this.clearExerciseInfo();
  };

  private clearExerciseInfo = function() {
    this.exerciseInfo = {
      id: undefined,
      name: '',
      category: undefined
    };
  };
}
