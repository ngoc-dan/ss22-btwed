let number = prompt("nhap day so");
if (number > 0 && number < 9999999) {
  let numbers = number.split("");
  let numberArray = numbers.reverse();
  console.log(...numberArray);
} else {
  console.log("day khong hop le");
}