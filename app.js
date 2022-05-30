const input = process.argv;
if (input.length == 4) {
  console.log(parseInt(input[2]) + parseInt(input[3]) + " Addition");
  console.log(parseInt(input[2]) * parseInt(input[3]) + " Multiplication");
  console.log(parseInt(input[2]) - parseInt(input[3]) + "Subtraction");
  console.log(parseInt(input[2]) / parseInt(input[3]) + "Division");
} else {
  var add = 0;
  var mul = 1;
  for (i = 2; i < input.length; i++) {
    mul = mul * parseInt(input[i]);
    add = add + parseInt(input[i]);
  }
  console.log(add + " Adiition");
  console.log(mul + " Multiplication");
}
