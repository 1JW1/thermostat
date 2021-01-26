describe("thermostat", function() {
    var thermostat;
    
    beforeEach(function() {
        thermostat = new Thermostat();
    })
    
    it("Thermostat starts at 20 degrees", function() {
      expect(thermostat.temp()).toBe(20);
    });

    it("You can increase the temperature with an up function", function() {
      thermostat.increase(5)
      expect(thermostat.temp()).toBe(25);
      });
      
    it("You can decrease the temperature with a down function", function() {
        thermostat.decrease(5)
        expect(thermostat.temp()).toBe(15);
        });
        
    it("The minimum temperature is 10 degrees", function() {
        expect(function() {thermostat.decrease(11)}).toThrow(new Error("No less than 10 degrees!"));
        });

        it("If power saving mode is on, the maximum temperature is 25 degrees", function() {
            expect(function() {thermostat.increase(6)}).toThrow(new Error("Max temp is 25 degrees in power save mode!"));
            });

            it("If power saving mode is off, the maximum temperature is 32 degrees", function() {
                thermostat.powersave = false;
                expect(function() {thermostat.increase(13)}).toThrow(new Error("Max temp is 32 degrees when power save mode is off!"));
                });

                it("Power saving mode is on by default but it can also be turned off", function() {
                    thermostat.powerModeOff()
                    expect(thermostat.powersave).toBe(false);
                    });

                    it("You can reset the temperature to 20 with a reset function", function() {
                        thermostat.reset()
                        expect(thermostat.temperature).toBe(20);
                        });

                        it("You can ask about the thermostat's current energy usage (< 18 is low-usage)", function() {
                            thermostat.decrease(3)
                            expect(thermostat.usage()).toEqual("Low-usage.");
                            });

                            it("You can ask about the thermostat's current energy usage (<= 25 is medium-usage)", function() {
                                thermostat.increase(4)
                                expect(thermostat.usage()).toBe("Medium-usage.");
                                });

                                it("You can ask about the thermostat's current energy usage (anything else is high-usage)", function() {
                                    thermostat.powersave = false;
                                    thermostat.increase(7)
                                    expect(thermostat.usage()).toBe("High-usage.");
                                    });

                            it("increases the value of temperature by 1", function() {
                                thermostat.increase()
                                expect(thermostat.temperature).toBe(21);
                                });

                                it("decreases the value of temperature by 1", function() {
                                    thermostat.decrease()
                                    expect(thermostat.temperature).toBe(19);
                                    });

  });