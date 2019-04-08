"use strict";

alert('После каждой оценки нужно вводить запятую и пробел. \nУчтите, что средняя оценка выставляется только для пяти оценок и менее');
function getAverageMark(marks) {
  marks = prompt('Введите оценки ученика');
  let arr = marks.split(', ', 5);
  /*console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr[2]);*/
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];
  }
  /*console.log(sum);*/
  let average = sum / arr.length;
  return  `Средняя отметка: ${average}`;
}
let message = getAverageMark();
alert(message);