export default class TimeValidation {
    time: string;
    constructor() {
      this.time = "21:05";
    }
  
    timeFormat(timeCheck: string) {
      return  /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(timeCheck);
    }
  
    isValid(date: string) {
  
      return this.timeFormat(date);
    }
  }
