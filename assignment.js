// Feet To Mile
function feetToMile(feet) {
  if (feet <= 0) {
    console.log("Error! Please enter positive measurement.");
  } else {
    var mile = feet / 5280;
    return mile;
  }
}

var assignment1Output = feetToMile(100);
console.log(assignment1Output);
