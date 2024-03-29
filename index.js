// Test file for using the Raspberry Pi and Johnny-Five 
const five = require('johnny-five'); 
const raspi = require('raspi-io'); 
// Make a new `Board()` instance and use raspi-io 
const board = new five.Board({ 
       io: new raspi(), 
});

// Run Board 
board.on('ready', function() { 
    // LED Pin variable 
    const led = new five.Led('P1-7'); 
    led.on(); 
    this.repl.inject({ 
            on: () => { 
                    led.on(); 
            }, 
            off: () => { 
                    led.stop().off(); 
            }, 
            strobe: () => { 
                    led.stop().off(); 
                    led.strobe(); 
            }, 
            blink: () => { 
                    led.stop().off(); 
                    led.blink(500); 
            }, 
    }); 
    // When this script is stopped, turn the LED off 
    // This is just for convenience 
    this.on('exit', function() { 
            led.stop().off(); 
    }); 
}); 