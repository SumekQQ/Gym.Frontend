import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-or-update-plan',
  templateUrl: './add-or-update-plan.component.html',
  styleUrls: ['./add-or-update-plan.component.css']
})
export class AddOrUpdatePlanComponent implements OnInit {
  @Output() planCreated = new EventEmitter<any>();
  @Output() cancelClicked = new EventEmitter<any>();
  @Input() exerciseData: Array<Exercise>; 
  @Input() planInfo: any;
  
  constructor() { 
    this.clearPlanInfo();
   }

  ngOnInit() {
    if(this.planInfo === undefined)
      this.clearPlanInfo();
   }

  public addOrUpdatePlanRecord = function(event) {
    this.planCreated.emit(this.planInfo);
    this.clearPlanInfo();
  };

  public addExerciseId(exercise){
    this.planInfo.exerciseIds.push(exercise.id);
  }

  public removeExerciseId(exercise){
    var deleteIndex = this.planInfo.exerciseIds.indexOf(exercise.id);
    this.planInfo.exerciseIds.splice(deleteIndex, 1);
  }

  public isExerciseExist(exercise){
    return this.planInfo.exerciseIds.includes(exercise.id);
  }

  public cancelEdit(){
    this.cancelClicked.emit();
    this.clearPlanInfo();
  }

  private clearPlanInfo = function(){
    this.planInfo = {
      id: undefined,
      name: '',
      exerciseIds: [],
    };
  }
}
