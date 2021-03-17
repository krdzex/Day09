// Only change code below this line
function inverseWhile() {
    var fiveNumbers = "";
    var i = 5;
    while (i >= 0) {
        if (i == 0) {
            fiveNumbers += i;
            return fiveNumbers;
        }
        fiveNumbers += i + ",";
        i--;

    }
    // return fiveNumbers;
}
// Only change code above this line
inverseWhile();
console.log(inverseWhile());
module.exports = inverseWhile;