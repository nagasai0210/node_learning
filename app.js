var events = require('events');
var util = require('util');

var Button = function (colour, clicks, visits) {
    this.colour = colour;
    this.clicks = clicks;
    this.visits = visits;
    this.percentage = (clicks / visits) * 100;
}

util.inherits(Button, events.EventEmitter);

var redButton = new Button('red', 1, 1);
var blueButton = new Button('blue', 1, 1);
var orangeButton = new Button('orange', 1, 1);

var buttons = [redButton, blueButton, orangeButton];

buttons.sort(function (a, b) {
    return (a.percentage > b.percentage) ? -1 : 1;
});

buttons.forEach(function (button) {
    button.on('show', function () {
        if ((Math.floor(Math.random() * 100) + 1) > 10) {
            button.visits = button.visits + 1;
        } else {
            button.clicks = button.clicks + 1;
            button.visits = button.visits + 1;
        }
    });
});

console.log(buttons[0]);