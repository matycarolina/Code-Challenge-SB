// import the readline module for work with stdin, or stdout.
const readline = require("readline");

// create a readline object to work with the stream.
// pass the stdin, or stdout in the current process.
const prompts = readline.createInterface(process.stdin, process.stdout);

// create a question or there handler.
prompts.question("Enter Learning Resources Name : ", (response) => {
  // check the response.
  if (response.toLocaleLowerCase() == "gfg") {
    console.log("You are a part of the very huge learning community.");
  } else {
    console.log(
      "Have a look at Geeksforgeeks, they solve many of your technical doubts."
    );
  }

  // after the all work is done want to terminate this process.
  process.exit();
});
