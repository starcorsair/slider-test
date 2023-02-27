//Задание 4.

//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео.
//Реализуйте его на прототипах.

//Определите иерархию электроприборов. Включите некоторые в розетку.
//Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент).

//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
//Выбрав прибор, подумайте, какими свойствами он обладает.

//План:

//Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
//Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//Создайте экземпляры каждого прибора.
//Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

//Общие требования:

//Имена функций, свойств и методов должны быть информативными
//Соблюдайте best practices:
//использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
//информативные имена (а не a, b);
//четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
//использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

function ElcetroDevice(location) {
  this.location = location;
  this.condition = recent;
}
function Notebooks(location, condition, price, drivers, oc) {
  this.location = location;
  this.condition = condition;
  this.price = price;
  this.drivers = drivers;
  this.oc = "Linux";
}
function Printers(location, condition, drivers, price, multicolor) {
  this.location = location;
  this.condition = condition;
  this.price = price;
  this.drivers = drivers;
  this.multicolor = multicolor;
}

function Computers(location, condition, price, drivers, oc) {
  this.location = location;
  this.condition = condition;
  this.price = price;
  this.drivers = drivers;
  this.oc = "Windows";
}

function Scanners(location, condition, drivers, price, types) {
  this.location = location;
  this.condition = condition;
  this.price = price;
  this.drivers = drivers;
  this.types = types;
}
