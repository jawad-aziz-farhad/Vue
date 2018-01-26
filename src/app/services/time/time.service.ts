import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  private date: any = {dateTime: '', monthDate: ''};
  constructor() { }

  getDate_Time(){
    var days= ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];
    var months = ['JAN', 'FEB', 'MAR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT','NOV','DEC']
    var date = new Date();
    this.date.dateTime = days[date.getDay()] + ',  ' + this.pad(date.getHours()) + ' : ' + this.pad(date.getMinutes()) + ' : ' + this.pad(date.getSeconds());
    this.date.monthDate = months[date.getMonth()] + ' ' + this.pad(date.getDate()) + ' , ' + date.getFullYear();
    return this.date;
  }

  pad(value){
    if(value < 10)
      return value = '0'+ value;
    else
      return value;  

  }
}
