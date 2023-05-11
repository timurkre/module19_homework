class ElectricalAppliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.isPluggedIn = false;
    }
  
    plugIn() {
      this.isPluggedIn = true;
      console.log(`${this.name} is plugged in.`);
    }
  
    unplug() {
      this.isPluggedIn = false;
      console.log(`${this.name} is unplugged.`);
    }
  }
  
  class DeskLamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
      super(name, power);
      this.brightness = brightness;
      this.isTurnedOn = false;
    }
  
    turnOn() {
      this.isTurnedOn = true;
      console.log(`${this.name} is turned on.`);
    }
  
    turnOff() {
      this.isTurnedOn = false;
      console.log(`${this.name} is turned off.`);
    }
  }
  
  class Computer extends ElectricalAppliance {
    constructor(name, power, processor) {
      super(name, power);
      this.processor = processor;
      this.isTurnedOn = false;
    }
  
    turnOn() {
      this.isTurnedOn = true;
      console.log(`${this.name} is turned on.`);
    }
  
    turnOff() {
      this.isTurnedOn = false;
      console.log(`${this.name} is turned off.`);
    }
  }
  
  class ElectricalAppliances {
    constructor(...appliances) {
      this.appliances = appliances;
    }
  
    getTotalPower() {
      let totalPower = 0;
      this.appliances.forEach((appliance) => {
        if (appliance.isPluggedIn) {
          totalPower += appliance.power;
        }
      });
      console.log(`Total power consumption: ${totalPower} watts`);
    }
  }
  
  const deskLamp = new DeskLamp("Desk Lamp", 60, 50);
  const computer = new Computer("Computer", 350, "Intel Core i7");
  const electricalAppliances = new ElectricalAppliances(deskLamp, computer);
  
  deskLamp.plugIn();
  deskLamp.turnOn();
  computer.plugIn();
  computer.turnOn();
  electricalAppliances.getTotalPower();