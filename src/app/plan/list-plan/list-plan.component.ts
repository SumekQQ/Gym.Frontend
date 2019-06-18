import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-list-plan',
  templateUrl: './list-plan.component.html',
  styleUrls: ['./list-plan.component.css']
})
export class ListPlanComponent implements OnInit {
  @Output() deleteClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Input() trainingPlanData: Array<any>;
  @Input() exerciseData: Array<Exercise>;
  @Input() categoryData: Array<any>;
  constructor() { }

  ngOnInit(): void {

  }

  public newRecord(){
    this.newClicked.emit();
  }
  
  public deleteRecord(record){
    this.deleteClicked.emit(record);
  }

  public editRecord(record){
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  public getExercise(id){
    return this.exerciseData.find(x=> x.id == id)
  }
}
