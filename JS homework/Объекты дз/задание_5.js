//Задание 5.

//Переписать консольное приложение из предыдущего юнита на классы.
class ElcetroDevices {
  constructor(location) {
    this.location = location;
    this.condition = recent;
  }
}

IsOn = function () {
  console.log(`this device is turned on`);
};

IsOff = function () {
  console.log(`this device is turned off`);
};

class Notebooks extends ElcetroDevices {
  constructor(location, condition, price, oc) {
    super(location);
    (this.location = location)((this.condition = condition)),
      (this.price = price),
      (this.oc = oc);
  }
}
class Computers extends ElcetroDevices {
  constructor(location, condition, price, oc) {
    super(location);
    (this.location = location)((this.condition = condition))(
      (this.price = price)
    )((this.oc = oc));
  }
}
class Printers extends ElcetroDevices {
  constructor(location, condition, price, multicolor) {
    super(location);
    (this.location = location)((this.condition = condition))(
      (this.price = price)
    )((this.multicolor = multicolor));
  }
}
ThereIsConntection = function () {
  console.log("this printer is connected with device");
};
ThereIsNoConntection = function () {
  console.log("this printer is not connected with device");
};

HaveSameOc = function () {
  console.log("these computers have some oc");
};

HaveNotSameOc = function () {
  console.log("these computers have not some oc");
};

HaveSamePrice = function () {
  console.log("these notebooks have some price");
};

HaveNotSamePrice = function () {
  console.log("notebooks have not some price");
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

samsung.isPriceSame = function () {
  console.log("this notebook have not same price with computer");
};
acer.HaveSameLocation = function () {
  console.log("this computer have some location with printer");
};
isPriceSame();
HaveSameLocation();

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
