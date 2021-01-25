class Thermostat {
    constructor() {
        this.temperature = 20
    }

   temp() { 
       return this.temperature
    }

    increase(number) {
        this.temperature += number
    }

    decrease(number) {
        this.temperature -= number
        if (this.temperature < 10) {
        throw new Error("No less than 10!")
        }
    }
} 