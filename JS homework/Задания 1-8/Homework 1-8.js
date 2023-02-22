//Домашнее задание по JS

//Задание 1

const result = +prompt("Введите четное число", "");
if (typeof +result !== "number") {
  alert("Упс, кажется, вы ошиблись");
} else if (isNaN(result % 2)) {
  alert("Ошибка, введено НЕ ЧИСЛО");
} else if (result % 2 === 0) {
  alert("Число четное");
} else {
  alert("число нечетное");
}

//Задание 2
let x = 3,
  task;
switch (
  typeof x !== "symbol" &&
  (isFinite(x) || typeof x === "string") &&
  typeof x
) {
  case "number":
    task = "x - число";
    break;
  case "string":
    task = "x - строка";
    break;
  case "boolean":
    task = "x - логическое";
    break;
  default:
    task = "Тип x не определен";
}
console.log(res);

//Задание 3
function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}
reverseString("Hello");

//Задание 4

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
getRandomNumber(0, 100);

//Задание 5
let arr = [1, 2, 3, 4];
let lgth = arr.length;
let block = arr.map(function (item, index, array) {
  return item;
});
console.log(lgth);
console.log(block);

//Задание 6
let Arr = [1, 2, 3, 4];
Arr.forEach(function (i) {
  for (let i = 0; i < Arr.length; i++) {
    console.log("true");
  }
  console.log("falce");
});

//Задание 7

let arR = [1, 6, null, 124, NaN, 2, 5, 20];
let even = 0;
let odd = 0;
let nothing = 0;

for (let i = 0; i < arR.length; i++) {
  if (typeof arR[i] === "number" && !isNaN(arR[i])) {
    if (arR[i] === 0) {
      nothing += 1;
    } else if (arR[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
}
console.log(even);
console.log(odd);
console.log(nothing);

//Задание 8

let stuff = new Map();
stuff.set("chair", "white");
stuff.set("bed", "brown");
stuff.set("table", "black");
for (let elem of stuff) {
  console.log(elem);
}
