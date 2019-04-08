"use strict";

function askDrink(name, dateOfBirthday) {
  let birthday = new Date(dateOfBirthday);
  let now = new Date();
  let nowYear = now.getFullYear();
  let birthdayYear = birthday.getFullYear();
  let old = nowYear - birthdayYear;
  if (old >= 18) {
    let firstPhrase = `Не желаете ли олд-фэшн, ${name}?`
    return firstPhrase;
  } else {
    let secondPhrase = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    return secondPhrase;
  }
}

let question = askDrink("Марк","1988-10-22");
console.log(question);