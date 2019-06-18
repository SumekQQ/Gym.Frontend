import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';
import * as _ from 'lodash';

@Component({
  selector: 'exercise-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class ExerciseMainComponent{
  public exerciseData: Array<any>;
  public categoryData: Array<any>;
  public currentExercise: any; 

  constructor(private exerciseService: ExerciseService) {
    exerciseService.get().subscribe(
      (data: any) => this.exerciseData = data);
    this.currentExercise = this.setInitialValuesForExerciseData();

    this.categoryData = exerciseService.getCategory();
  }

  public createOrUpdateExercise = function(exercise: any) {
    let exerciseWithId;
    exerciseWithId = _.find(this.exerciseData, (el => el.id === exercise.id));

    if (exerciseWithId) {
      const updateIndex = _.findIndex(this.exerciseData, {id: exercise.id});
      this.exerciseService.update(exercise).subscribe(
        exerciseRecord =>  this.exerciseData.splice(updateIndex, 1, exercise)
      );
    } else {
      this.exerciseService.add(exercise).subscribe(
        exerciseRecord => this.exerciseData.push(exercise)
      );
    }
    this.currentExercise = this.setInitialValuesForExerciseData();
  };

  public editClicked = function(record){
    this.currentExercise = record;
  }

  public newClicked = function() {
    this.currentExercise = this.setInitialValuesForExerciseData();
  }

  public deleteClicked(record){
    const deleteIndex = _.findIndex(this.exerciseData, { id: record.id});
    this.exerciseService.remove(record).subscribe(
      result => this.exerciseData.splice(deleteIndex, 1)
    );
  }

  private setInitialValuesForExerciseData(){
    return{
      id: undefined,
      name: '',
      category: undefined
    }
  }
}
