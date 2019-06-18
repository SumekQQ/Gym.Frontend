import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.component.html',
  styleUrls: ['./list-exercise.component.css']
})
export class GridExerciseComponent implements OnInit {
  @Output() deleteClicked = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() exerciseData: Array<any>;
  @Input() categoryData: Array<any>;
  constructor() { }

  ngOnInit() {
  }

  public deleteRecord(record){
    this.deleteClicked.emit(record);
  }

  public editRecord(record){
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  public newRecord(){
    this.newClicked.emit();
  }
}
