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

function ElcetroDevices(location) {
  this.location = location;
  this.condition = recent;
}
function Notebooks(location, condition, price, oc) {
  this.location = location;
  this.condition = condition;
  this.price = price;
  this.oc = oc;
}
function Computers(location, condition, price, oc) {
  this.location = location;
  this.condition = condition;
  this.price = price;
  this.oc = oc;
}
function Printers(location, condition, price, multicolor) {
  this.location = location;
  this.condition = condition;
  this.price = price;
  this.multicolor = multicolor;
}

Notebooks.prototype = new ElcetroDevices();
Computers.prototype = new ElcetroDevices();
Printers.prototype = new ElcetroDevices();

ElcetroDevices.prototype.IsOn = function () {
  console.log(`this device is turned on`);
};

ElcetroDevices.prototype.IsOff = function () {
  console.log(`this device is turned off`);
};

Printers.prototype.ThereIsConntection = function () {
  console.log("this printer is connected with device");
};
Printers.prototype.ThereIsNoConntection = function () {
  console.log("this printer is not connected with device");
};

Computers.prototype.HaveSameOc = function () {
  console.log("these computers have some oc");
};

Computers.prototype.HaveNotSameOc = function () {
  console.log("these computers have not some oc");
};

Notebooks.prototype.HaveSamePrice = function () {
  console.log("these notebooks have some price");
};

Notebooks.prototype.HaveNotSamePrice = function () {
  console.log("these notebooks have not some price");
};

const samsung = new Notebooks("office", "recent", "expensive", "Linux");
const acer = new Computers("office", "recent", "cheap", "Windows");
const hp = new Printers("office", "recent", "cheap", "colored");

samsung.cpu = "Corei5";
samsung.card = "AMD";

acer.disk = "SSD";
acer.drive = "no";

hp.name = "LazerJet";
hp.year = 2023;

samsung.isPrinterConnected = function () {
  console.log("this notebook is not connected with ${hp.name}");
};
