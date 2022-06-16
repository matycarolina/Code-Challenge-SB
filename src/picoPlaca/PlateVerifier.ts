export default class PlateVerifier {
  notPermitedRanges: string[][];
  digitsPerDay: number[][];

  constructor() {
    this.notPermitedRanges = [
      ["07:00", "09:30"],
      ["16:00", "19:30"],
    ];
    this.digitsPerDay = [[], [1, 2], [3, 4], [5, 6], [7, 8], [9, 0], []];
  }

  hourInRange(time: string, ranges: string[]) {
    return time >= ranges[0] && time <= ranges[1];
  }

  picoPlacaPredictor(plate: string, date: Date, time: string) {
    const { hourInRange, digitsPerDay, notPermitedRanges } = this;

    const plateLastDigit = parseInt(plate[plate.length - 1]);
    const day = date.getDay();
    const restrictedPlates = digitsPerDay[day];

    if (
      hourInRange(time, notPermitedRanges[0]) ||
      hourInRange(time, notPermitedRanges[1])
    ) {
      return restrictedPlates.indexOf(plateLastDigit) >= 0;
    }

    return false;
  }
}
