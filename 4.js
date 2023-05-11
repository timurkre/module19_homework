// Родительская функция с методами, которые включают/выключают прибор из розетки
function ElectricAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }
  
  ElectricAppliance.prototype.plugIn = function() {
    this.pluggedIn = true;
    console.log(`${this.name} включен в розетку`);
  }
  
  ElectricAppliance.prototype.unplug = function() {
    this.pluggedIn = false;
    console.log(`${this.name} выключен из розетки`);
  }
  
  // Конкретный прибор - лампа
  function Lamp(name, power, bulbType) {
    ElectricAppliance.call(this, name, power);
    this.bulbType = bulbType;
  }
  
  Lamp.prototype = Object.create(ElectricAppliance.prototype);
  Lamp.prototype.constructor = Lamp;
  
  // Конкретный прибор - компьютер
  function Computer(name, power, brand, model) {
    ElectricAppliance.call(this, name, power);
    this.brand = brand;
    this.model = model;
  }
  
  Computer.prototype = Object.create(ElectricAppliance.prototype);
  Computer.prototype.constructor = Computer;
  
  // Создаем экземпляры приборов
  const lamp = new Lamp('Настольная лампа', 40, 'LED');
  const computer = new Computer('Компьютер', 200, 'Apple', 'iMac');
  
  // Включаем приборы в розетку
  lamp.plugIn();
  computer.plugIn();
  
  // Посчитываем потребляемую мощность
  function calculatePowerConsumption(...devices) {
    let powerConsumption = 0;
    for (let device of devices) {
      if (device.pluggedIn) {
        powerConsumption += device.power;
      }
    }
    return powerConsumption;
  }
  
  const totalPowerConsumption = calculatePowerConsumption(lamp, computer);
  console.log(`Общая потребляемая мощность: ${totalPowerConsumption} Вт`);