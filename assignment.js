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

// Count Brick
var floorCount = 0;
var feetCount = 0;
var feet = 0;
var brick = 0;

function brickCalculator(floor) {
  if (floor <= 0) {
    console.log("! Please Check your value.");
  } else if (floor <= 10) {
    feet = floor * 15;
  } else if (floor > 10 && floor <= 20) {
    floorCount = floor % 10;
    feetCount = floorCount * 12;
    feet = feetCount + 10 * 15;
  } else if (floor > 20) {
    floorCount = floor - 20;
    feetCount = floorCount * 10;
    feet = feetCount + 10 * 12 + 10 * 15;
  }
  var brick = feet * 1000;
  return brick;
}

var brickNeed = brickCalculator(17);
console.log(brickNeed);

// Tiny Friend
function tinyFriend(names) {
  var min = names[0];
  //var min_str = names[i].length;
  for (var i = 0; i < names.length; i++) {
    var element = names[i];
    var char = element.length;
    var check = names[i].length;
    if (char < check) {
      min = names;
    }
    return min;
  }
}

var names = [
  "Ahsan",
  "Mamun",
  "Sassoto",
  "Miraz",
  "Fahim",
  "Rabbi",
  "Mehedi",
  "Hasib",
  "Naim",
];
var tinyFriendResult = tinyFriend(names);
console.log(tinyFriendResult);
