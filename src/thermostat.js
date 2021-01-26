class Thermostat {
    constructor() {
        this.temperature = 20,
        this.powersave = true
        this.maxLimitPsmOn = 25;
        this.maxLimitPsmOff = 32;
    }

   temp() { 
       return this.temperature
    }

    increase(number = 1) {
        this.temperature += number
        if (this.temperature > this.maxLimitPsmOn && this.powersave == true) {
            throw new Error("Max temp is 25 degrees in power save mode!")
        } else if (this.temperature > this.maxLimitPsmOff && this.powersave == false) {
            throw new Error("Max temp is 32 degrees when power save mode is off!") 
        }
        }

    decrease(number = 1) {
        this.temperature -= number
        if (this.temperature < 10) {
        throw new Error("No less than 10 degrees!")
        }
    }

    powerModeOff() {
        return this.powersave = false;
    }

    reset() {
        return this.temperature = 20;
    }

    usage() {
        if (this.temperature <= 18) {
            return "Low-usage."
        } else if (this.temperature <= 25) {
            return "Medium-usage."
        } else (this.temperature >= 26 & this.powersave === false)
            return "High-usage."
    }
} 