import * as readline from "readline";

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const plateQuestion = () => {
    return new Promise<string>((resolve) => {
        rl.question('Input car plate? ', (answer) => {
            resolve(answer)
        })
    })
}

const dateQuestion = () => {
    return new Promise<string>((resolve) => {
        rl.question('Input date? ', (answer) => {
            resolve(answer)
        })
    })
}

const timeQuestion = () => {
    return new Promise<string>((resolve) => {
        rl.question('Input time? ', (answer) => {
            resolve(answer)
        })
    })
}

async function main () {
    const plate = await plateQuestion()
    const date = await dateQuestion()
    const time = await timeQuestion()

    console.log(plate, date, time)
    rl.close()
}

main()
