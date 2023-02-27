class Device {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isPluggedIn = false;
  }

  plugIn() {
    console.log(this.name + " is on!");
    this.isPluggedIn = true;
  };

  unplug() {
    console.log(this.name + " is off!");
    this.isPluggedIn = false;
  }
}

class Iron {
  constructor(name, brand, power) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.isPluggedIn = false;
  }
}
Iron.prototype = new Device();

class Microwave {
  constructor(name, brand, power) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.isPluggedIn = true;
  }
}
Microwave.prototype = new Device();

const whiteIron = new Iron("Iron", "Philips", 150);
const blackMicrowave = new Microwave("Microwave", "Electrolux", 500);

whiteIron.unplug();
blackMicrowave.plugIn();

console.log(whiteIron);
console.log(blackMicrowave);