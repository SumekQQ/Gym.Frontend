import { Component, OnInit } from '@angular/core';
import { TrainingDayService } from 'src/app/services/training-day.service';
import { TrainingDay } from 'src/app/models/training-day.model';
import * as moment from 'moment'; 
import { TrainingPlanService } from 'src/app/services/training-plan.service';

@Component({
  selector: 'app-main-day',
  templateUrl: './main-day.component.html',
  styleUrls: ['./main-day.component.css']
})
export class MainDayComponent implements OnInit {
  public selectedDate: {year: number, month: number, day: number};
  public trainingDayData: Array<TrainingDay>;
  public trainingPlanData: Array<any>;
  public currentTrainingDay: any;

  constructor(private trainingDataService: TrainingDayService){
    trainingDataService.get().subscribe(
      (data:Array<TrainingDay>) => {
        this.trainingDayData.forEach(x => x.plan = this.trainingPlanData.find(y => y.id === x.plan))
      });

    this.currentTrainingDay = this.setInitialTrainingDay();
  }

  ngOnInit() {
  }

  public dateSelected(date){
    this.selectedDate = date;
    this.currentTrainingDay = this.getTraining();
  }

  private getTraining(){
    for(let day of this.trainingDayData){
      if(this.isDateEquals(this.convertDate(day.date))){
        return day;
      }
      }

    return this.setInitialTrainingDay();
  }

  private convertDate(date){
    var dateArr = date.split(".")
    return {year: parseInt( dateArr[2]), month: parseInt( dateArr[1]), day: parseInt( dateArr[0])}
  }

  private isDateEquals(date){
    if(date.year === this.selectedDate.year && date.month === this.selectedDate.month && date.day === this.selectedDate.day)
      return true;
      
    return false;
  }

  private setInitialTrainingDay(){
    return{
      id: undefined,
      description: "",
      date: {year: 0, month: 0, day: 0},
      trainingPlan: undefined
    }
  }

  private getMonthName = () => moment(this.selectedDate.month, 'M').format('MMMM');
}
