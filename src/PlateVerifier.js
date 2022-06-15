import moment from 'moment';
export default class PlateVerifier {
  constructor() {
    this.digitsPerDay = [[], [1, 2], [3, 4], [5, 6], [7, 8], [9, 0], []];
    this.notPermitedRanges = [
      ["07:00", "09:30"],
      ["16:00", "19:30"],
    ];
  }

  hourInRange(time, ranges) {
    return time >= ranges[0] && time <= ranges[1];
  }

  picoPlacaPredictor(plate, date, time) {
    const { hourInRange, digitsPerDay, notPermitedRanges } = this;
    
    const plateLastDigit = parseInt(plate[plate.length - 1]);
    const day = moment(date,["MM-DD-YYYY", "YYYY-MM-DD"]).day();
    const restrictedPlates = digitsPerDay[day];

    if((hourInRange(time,notPermitedRanges[0])|| hourInRange(time,notPermitedRanges[1])) && moment(date,["MM-DD-YYYY", "YYYY-MM-DD"]).isValid()){
      return restrictedPlates.indexOf(plateLastDigit)>=0;
  }

    return false;
  }
}
