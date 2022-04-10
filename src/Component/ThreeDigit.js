// I am making this seperate component to create a function that will decide if number is less than 999 than add 2 zero overall we need three digits for id of image=> Note that the pokemon id for these images must be padded with zeros to three places, like: 001, 002, 034, 199, etc. Try writing a function to take an id like 4 and turn it into 004.
function threeDigit(num){
    // slice(-3) cut 3 digit from back
    return num<=999?`00${num}`.slice(-3):num
}
 export {threeDigit}