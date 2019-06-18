import { Component, OnInit } from '@angular/core';
import { TrainingPlanService } from 'src/app/services/training-plan.service';
import { ExerciseService } from 'src/app/services/exercise.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-main-plan',
  templateUrl: './main-plan.component.html',
  styleUrls: ['./main-plan.component.css']
})
export class MainPlanComponent{
  public trainingPlanData: Array<any>;
  public exerciseData: Array<any>;
  public categoryData: Array<any>;
  public currentPlan: any;
  public listEnable = true; 

  constructor(private exerciseService: ExerciseService, private planService: TrainingPlanService) {
    planService.get().subscribe(
      (data: any) => this.trainingPlanData = data);
    
    exerciseService.get().subscribe(
      (data: any) => this.exerciseData = data);
      
    this.currentPlan = this.setInitialValuesForPlanData();
    this.categoryData = exerciseService.getCategory();
  }

  public createOrUpdatePlan = function(plan: any) {
    let plainWithId;
    plainWithId = _.find(this.trainingPlanData, (el => el.id === plan.id));

    if(plainWithId){
      const updateIndex = _.findIndex(this.trainingPlanData, {id: plan.id});
      this.planService.update(plan).subscribe(
        planRecord => this.trainingPlanData.splice(updateIndex, 1, plan)
      );
    } else {
      this.planService.add(plan).subscribe(
        planRecord => this.trainingPlanData.push(plan)
      );
    }
    this.currentPlan = this.setInitialValuesForPlanData();
    this.listEnable = true;
  };

  public editClicked = function(record){
    this.currentPlan = record;
    this.listEnable = false;
  }

  public newClicked = function(){
    this.listEnable = false;
    this.currentPlan = this.setInitialValuesForPlanData();
  }

  public deleteClicked(record){
    const deleteIndex = _.findIndex(this.exerciseData, { id: record.id});
    this.planService.remove(record).subscribe(
      result => this.trainingPlanData.splice(deleteIndex, 1)
    );
  }

  public cancelClicked(){
    this.listEnable = true;
    this.currentPlan = this.setInitialValuesForPlanData();
  }

  private setInitialValuesForPlanData(){
    return{
      id: undefined,
      name: '',
      exerciseIds: [],
    };
  }

}
