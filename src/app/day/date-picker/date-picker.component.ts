import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'ngbd-datepicker-basic',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class NgbdDatepickerBasic implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number, day: number};
  disabled = true;
  @Input() trainingDay: Array<any>
  @Output() dateSelected = new EventEmitter<any>();
 
  constructor(private calendar: NgbCalendar) {

  }

  ngOnInit(): void {
    this.dateSelected.emit(this.calendar.getToday());
  } 

  selectToday() {
    this.model = this.calendar.getToday();
  }


  public changedSelectedDate = function(event){
    this.date = event;
    this.dateSelected.emit(event);
  }

  private covertDate(date){
    var dateArr = date.split(".")
    return {year: parseInt( dateArr[2]), month: parseInt( dateArr[1]), day: parseInt( dateArr[0])}
  }

  isTraining(date: NgbDate){
    if(this.trainingDay === undefined)
      return false;

    for(let day of this.trainingDay){
      if(date.equals(this.covertDate(day.date)))
        return true;}

      return false
  }
  isToday = (date: NgbDate) => date.equals(this.calendar.getToday());
  isDisabled = (date: NgbDate, current: {month: number}) => date.month !== current.month;
}
