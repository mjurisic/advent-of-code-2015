var rl = require('readline').createInterface({
    terminal: false, input: require('fs').createReadStream('input.txt')
});

var sLen = 0;
var parsedLen = 0;

rl.on('line', function (line) {
    sLen  = sLen + line.length;
    var parsedString = eval(line);
    parsedLen = parsedLen + parsedString.length;
});

rl.on("close", function () {
    console.log('String len: ' + sLen);
    console.log('Parsed len: ' + parsedLen);
    console.log('Difference: ' + (sLen - parsedLen));

});
