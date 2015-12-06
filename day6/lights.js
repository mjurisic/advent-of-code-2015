var rl = require('readline').createInterface({
    terminal: false, input: require('fs').createReadStream('input.txt')
});

var lights = [];

for (var i = 0; i < 1000; i++) {
    lights[i] = [];
    for (var j = 0; j < 1000; j++) {
        lights[i][j] = 0;
    }
}

rl.on('line', function (line) {
    var totalBrightness = 0;

    var myRegexp = /\s+(\d+),(\d+) through (\d+),(\d+)/;
    var match = myRegexp.exec(line);
    var xStart = parseInt(match[1]);
    var yStart = parseInt(match[2]);
    var xEnd = parseInt(match[3]);
    var yEnd = parseInt(match[4]);

    var feature;
    if (line.indexOf('toggle') != -1) {
        feature = toggle;
    } else if (line.indexOf('off') != -1) {
        feature = turnOff;
    } else {
        feature = turnOn;
    }

    for (var i = xStart; i <= xEnd; i++) {
        for (var j = yStart; j <= yEnd; j++) {
            feature.call(this, i, j);
        }
    }

    for (var i = 0; i <= 999; i++) {
        for (var j = 0; j <= 999; j++) {
            totalBrightness = totalBrightness + lights[i][j];
        }
    }

    console.log('total brightness:' + totalBrightness);
    console.log('------------------------------------');
});

var toggle = function (x, y) {
    lights[x][y] = lights[x][y] + 2;
};
var turnOn = function (x, y) {
    lights[x][y] = lights[x][y] + 1;
};
var turnOff = function (x, y) {
    lights[x][y] = Math.max(0, lights[x][y] - 1);
};
