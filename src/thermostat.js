class Thermostat {
    constructor() {
        this.temperature = 20,
        this.powersave = true
    }

   temp() { 
       return this.temperature
    }

    increase(number = 1) {
        this.temperature += number
        if (this.powersave = true && this.temperature > 25) {
            throw new Error("Max temp is 25 degrees in power save mode!")
        } else if (this.powersave = false && this.temperature > 32) {
            throw new Error("Max temp is 32 degrees in power save mode!") }
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
        if (this.temperature < 18) {
            "Low-usage."
        } else if (this.temperature <= 25) {
            "Medium-usage."
        } else (this.temperature >= 26 & this.powersave == false)
            "High-usage."
    }
} 