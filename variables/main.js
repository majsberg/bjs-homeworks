"use strict";
function getResult(a, b, c) {
  let x1;
  let x2;
  let m = [];
  let result;
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    m = [x1, x2];
    result = `Корни уравнения: ${m}`;
    return result;
  } else if (d == 0) {
    x1 = -b / (2 * a);
    result = `Корень уравнения: ${x1}`;
    return result;
  } else {
    result = "Уравнение не имеет корней";
    return result;
  }
}

let intrest = getResult(3, -14, -5);
console.log(intrest);