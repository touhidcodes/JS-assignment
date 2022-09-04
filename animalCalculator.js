// count animal
function animalCalculator(mile) {
  if (mile <= 10) {
    var animalCount = mile * 50;
  } else if (mile > 10 && mile < 20) {
    var firstCond = 10 * 50;
    var secondCond = mile - 10;
    var thirdCond = secondCond * 100;
    animalCount = firstCond + thirdCond;
  } else if (mile > 20) {
    var firstCond = 10 * 50;
    var secondCond = 10 * 100;
    var thirdCond = mile - 20;
    var fourthCond = thirdCond * 300;
    animalCount = firstCond + secondCond + fourthCond;
  }
  return animalCount;
}
