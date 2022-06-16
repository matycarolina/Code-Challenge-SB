import * as readline from "readline";
import PlateVerifier from "./picoPlaca/PlateVerifier";
import DateValidation from "./validations/DateValidation";
import PlateValidation from "./validations/PlateValidation";
import TimeValidation from "./validations/TimeValidation";

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const plateQuestion = () => {
  const validPlate = new PlateValidation();
  return new Promise<string>((resolve) => {
    rl.question("Input car plate? (Ex: ABC-123 or ABC-1234) : ", (answer) => {
      if (validPlate.isValid(answer)) {
        resolve(answer);
      } else {
        console.log("Type a valid car plate");
      }
    });
  });
};

const dateQuestion = () => {
  const validDate = new DateValidation();
  return new Promise<Date>((resolve) => {
    rl.question("Input date? (Ex: MM/DD/YYYY) : ", (answer) => {
      if (validDate.isValid(answer)) {
        resolve(new Date(answer));
      } else {
        console.log("Type a valid date");
      }
    });
  });
};

const timeQuestion = () => {
  const validTime = new TimeValidation();
  return new Promise<string>((resolve) => {
    rl.question("Input time? (Ex: HH:MM) : ", (answer) => {
      if (validTime.isValid(answer)) {
        resolve(answer);
      } else {
        console.log("Type a valid time");
      }
    });
  });
};

async function main() {
  const plate = await plateQuestion();
  const date = await dateQuestion();
  const time = await timeQuestion();

  const plateVerif = new PlateVerifier();

  if (plateVerif.picoPlacaPredictor(plate, date, time)) {
    console.log("You are restricted");
  } else {
    console.log("You are not restricted");
  }
  rl.close();
}

main();
