import PlateVerifier from "./PlateVerifier";
import * as readline from "node:readline";

const plateVerifier = new PlateVerifier();

// create a readline object to work with the stream.
// pass the stdin, or stdout in the current process.
const prompts = readline.createInterface(process.stdin, process.stdout);

// create a question or there handler.
prompts.question("Type START to begin: ", (response) => {
  // check the response.
  if (response === "START") {
    if (plateVerifier.picoPlacaPredictor("ABC-129", "06-15-2022", "08:00")) {
      console.log(
        "Plate: ABC-129, Date: 06-15-2022, Time: 08:00 ----> ",
        "You are restricted"
      );
    } else {
      console.log(
        "Plate: ABC-129, Date: 06-15-2022, Time: 08:00 ----> ",
        "You are not restricted"
      );
    }

    if (plateVerifier.picoPlacaPredictor("ABC-126", "06-15-2022", "18:00")) {
      console.log(
        "Plate: ABC-126, Date: 06-15-2022, Time: 18:00 ----> ",
        "You are restricted"
      );
    } else {
      console.log(
        "Plate: ABC-126, Date: 06-15-2022, Time: 18:00 ----> ",
        "You are not restricted"
      );
    }

    if (plateVerifier.picoPlacaPredictor("ABC-120", "06-15-2022", "09:50")) {
      console.log(
        "Plate: ABC-120, Date: 06-15-2022, Time: 09:50 ----> ",
        "You are restricted"
      );
    } else {
      console.log(
        "Plate: ABC-120, Date: 06-15-2022, Time: 09:50 ----> ",
        "You are not restricted"
      );
    }
  } else {
    console.log("Please, type again.");
  }

  // after the all work is done want to terminate this process.
  process.exit();
});
