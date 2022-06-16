export default class PlateValidation {
    plate: string;
  constructor() {
    this.plate= "ABC-123";
  }

  onlyLetters(stringCheck: string) {
    return /^[a-zA-Z]+$/.test(stringCheck);
  }

  onlyNumbers(stringCheck: string) {
    return /^[0-9]+$/.test(stringCheck);
  }
  

isValid(plateNumber: string){
    const letters = plateNumber.split("-")[0];

    const numbers = plateNumber.split("-")[1];

    return this.onlyLetters(letters) && this.onlyNumbers(numbers)
}
  }