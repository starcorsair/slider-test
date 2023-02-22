//Задание 4.
//Напишите функцию, которая принимает два числа.
//Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.
//Используйте setInterval.

function setNumbers(a, b) {
  let xNumber = a;
  const yNumber = setInterval(() => {
    console.log(xNumber);
    if (xNumber === b) clearInterval(yNumber);
    ++xNumber;
  }, 1000);
}
setNumbers(5, 15);
