// Write The Function Here
function printInConsole() {
    // First Way
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    //   for (let i = 0; i < values.length; i++) {
    //     console.log(`The Value Is ${values[i]} And Type Is ${typeof values[i]}`);
    //   }
    // Second Way
    //   values.forEach((value) =>
    //     console.log(`The Value Is ${value} And Type Is ${typeof value}`)
    //   );
    //   Third Way
    //   for (let value of values) {
    //     console.log(`The Value Is ${value} And Type Is ${typeof value}`);
    //   }
    // Fourth Way
    for (var i in values) {
        console.log("The Value Is ".concat(values[i], " And Type Is ").concat(typeof values[i]));
    }
    return "Done";
}
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done
