// Only change code below this line
function logicalAndOperator(num) {
    if (num <= 80 && num >= 40) {
        return "Yes";
    }
    return "No";
}
console.log(logicalAndOperator(0));
console.log(logicalAndOperator(24));
console.log(logicalAndOperator(45));
console.log(logicalAndOperator(57));
console.log(logicalAndOperator(100));

logicalAndOperator(0);
logicalAndOperator(24);
logicalAndOperator(45);
logicalAndOperator(57);
logicalAndOperator(100);
// Only change code above this line
module.exports = logicalAndOperator;