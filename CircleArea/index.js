const {
  calculateCircleCircumference,
  calculateCircleArea,
} = require("./circle");

let arguments = process.argv.slice(2)
console.log("args", arguments)

calculateCircleArea(arguments[0] * 1);

calculateCircleCircumference(arguments[1] * 1);
