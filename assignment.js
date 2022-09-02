// Feet To Mile
function feetToMile(feet) {
  if (feet < 0) {
    console.log("Error! Please enter positive measurement.");
  } else {
    var mile = feet / 5280;
    return mile;
  }
}

var assignment1Output = feetToMile(100);
console.log(assignment1Output);

// Count Wood
function woodCalculator(chair, table, bed) {
  if (chair < 0 && table < 0 && bed < 0) {
    console.log("Error! Please check again.");
  } else {
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    var total = chair + table + bed;
  }
  return total;
}

var output2 = woodCalculator(1, -1, 3);
console.log(output2);
