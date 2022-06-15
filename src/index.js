import PlateVerifier from './PlateVerifier';
import * as readline from 'node:readline';

const plateVerifier = new PlateVerifier();

// create a readline object to work with the stream.
// pass the stdin, or stdout in the current process.
const prompts = readline.createInterface(process.stdin, process.stdout);

// create a question or there handler.
prompts.question("Type your license plate (Ex: ABC-1234): ", (response) => {
  // check the response.
  if (plateVerifier.picoPlacaPredictor(response)) {
    console.log("You are restricted.");
  } else {
    console.log(
      "You are not restricted"
    );
  }

  // after the all work is done want to terminate this process.
  process.exit();
});