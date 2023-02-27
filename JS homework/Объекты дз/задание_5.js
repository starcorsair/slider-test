//Задание 5.

//Переписать консольное приложение из предыдущего юнита на классы.
class ElcetroDevices {
  constructor(location) {
    this.location = location;
    this.condition = recent;
  }
  //переписать
  getName = function () {
    console.log(`The name of this ${this.type} is ${this.name}`);
  };

  putTheDeviceOnCharging = function () {
    console.log(`${this.name} is on charging now`);
  };

  putTheDeviceOnCharging = function () {
    console.log(`${this.name} is on charging, please wait few minutes`);
  };

  turnOn = function () {
    console.log(`${this.name} is turned on`);
  };

  turnOff = function () {
    console.log(`${this.name} is turned off`);
  };
}

//Делегирующая связь

class Computer extends Device {
  constructor(type, name, model, year) {
    super(year);
    (this.type = type), (this.name = name), (this.model = model);
  }
}

class Phone extends Device {
  constructor(type, model, name, year) {
    super(year);
    (this.type = type), (this.model = model), (this.name = name);
  }
}

class Accessories extends Device {
  constructor(type, model, name, year) {
    super(year);
    (this.type = type), (this.model = model), (this.name = name);
  }
}

// тут правильно
const samsung = new Notebooks("office", "recent", "expensive", "Linux");
const acer = new Computers("office", "recent", "cheap", "Windows");
const hp = new Printers("office", "recent", "cheap", "colored");

samsung.cpu = "Corei5";
samsung.card = "AMD";

acer.disk = "SSD";
acer.drive = "no";

hp.name = "LazerJet";
hp.year = 2023;

samsung.isPriceSame = function () {
  console.log("this notebook have not same price with computer");
};
acer.HaveSameLocation = function () {
  console.log("this computer have some location with printer");
};
isPriceSame();
HaveSameLocation();

//тут правильно

samsung.IsOn();
samsung.IsOff();
samsung.HaveSamePrice();
samsung.HaveNotSamePrice();

acer.IsOn();
acer.IsOff();
acer.HaveSameOc();
acer.HaveNotSameOc();

hp.IsOn();
hp.IsOff();
hp.ThereIsConntection();
hp.ThereIsNoConntection();

console.log(samsung);
console.log(acer);
console.log(hp);
