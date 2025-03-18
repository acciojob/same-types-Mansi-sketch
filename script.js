function isSameType(value1, value2) {
  const isValue1NaN = typeof value1 === "number" && isNaN(value1);
  const isValue2NaN = typeof value2 === "number" && isNaN(value2);

  if (isValue1NaN && isValue2NaN) {
    return true;
  }
  
  if (typeof value1 === typeof value2) {
    return true;
  }
  
  return false;
}


// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
if (!isNaN(value1)) value1 = Number(value1);
if (!isNaN(value2)) value2 = Number(value2);
alert(isSameType(value1, value2));