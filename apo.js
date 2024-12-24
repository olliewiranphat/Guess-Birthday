//Guess My Birthday date
const myDate = 24
let input = +prompt(`Pls guess my birthday date`)
let guessTimes = 1
while (input !== myDate) {
    guessTimes += 1
    if (input == 'q') {
        break
    }
    // } else if (input <= 10) {
    //     input = +prompt(`Wrong!, it's more than 10`)
    // } else if (input <= 20) {
    //     input = +prompt(`Almost right!, but it's more than 20`)
    // } else if (input >= 25) {
    //     input = +prompt(`Wrong!, but it's less than 25`)
    // } else if (input > 31) {
    //     input = +prompt(`Pls enter a date in month`)
    // }
}
alert(`OK, let's quit!`)