export default class DateValidation {
  date: string;
  constructor() {
    this.date = "15-06-2022";
  }

  dateFormat(dateCheck: string) {
    return  /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/.test(dateCheck);
  }

  isValid(date: string) {

    return this.dateFormat(date);
  }
}
