export default class PlateVerifier {
  constructor() {
    this.plate = "";
  }

  hourInRange(hour) {
    const ranges = [
      ["07:00", "09:30"],
      ["16:00", "19:30"],
    ];
    return hour >= ranges[0] && hour <= ranges[1];
  }

  picoPlacaPredictor(plate) {
    const { hourInRange } = this;
    
    const dateTime = new Date();
    const day = dateTime.getDay;
    const hour = dateTime.toLocaleTimeString("en-US", { hour12: false });
    
    const plateLastDigit = parseInt(plate[plate.length - 1]);

    const digitsPerDay = [[], [1, 2], [3, 4], [5, 6], [7, 8], [9, 0], []];
    const restrictedPlates = digitsPerDay[day];

    if (hourInRange(hour)) {
      return restrictedPlates.indexOf(plateLastDigit) >= 0;
    }

    return false;
  }
}
