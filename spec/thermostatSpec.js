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
            expect(function() {thermostat.decrease(11)}).toThrow(new Error("No less than 10!"));
            });


  });