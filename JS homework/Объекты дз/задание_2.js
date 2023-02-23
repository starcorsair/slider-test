//Задание 2.

//Написать функцию, которая принимает в качестве аргументов строку и объект,
//а затем проверяет есть ли у переданного объекта свойство с данным именем.
//Функция должна возвращать true или false.

const stringNew = "color";
const ChairNew = {
  [stringNew]: "blue",
  price: "100",
  material: "wood",
};

function getObj(stringNew, ChairNew) {
  if (ChairNew.name) {
    return true;
  } else {
    return false;
  }
}

getObj(stringNew, ChairNew);
