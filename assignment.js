/*
// Feet To Mile
function feetToMile(feet) {
  if (feet < 0) {
    console.log("Error! Please enter positive measurement.");
  } else {
    var mile = feet / 5280;
    return mile;
  }
}

var result = feetToMile(100);
console.log("Your result is:", result);

// Count Wood
function woodCalculator(chair, table, bed) {
  if (chair < 0 || table < 0 || bed < 0) {
    console.log("Error! Please check again.");
  } else {
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    var woodTotal = chair + table + bed;
  }
  return woodTotal;
}

var woodNeed = woodCalculator(14, 6, 7);
console.log("Your total wood is:", woodNeed, "Cubic");

*/
// Count Brick
function brickCalculator(floor) {
  if (floor <= 0) {
    console.log("! Please Check your value.");
  }
  if (floor <= 10) {
    var feet1 = floor * 15;
  } else if (floor > 10 && floor <= 20) {
    var feet2 = floor * 12;
  } else if (floor > 20) {
    var feet3 = floor * 12;
  }
  var feet = feet1 + feet2 + feet3;
  return feet;
}

var brickNeed = brickCalculator(20);
console.log(brickNeed);
